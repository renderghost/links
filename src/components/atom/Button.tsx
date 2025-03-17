'use client';

import React, { useState, useRef } from 'react';

// Button styles
const buttonStyles = {
	base: `
	duration-200
	ease-in-out
	focus:outline-none
	focus:ring-2
	focus:ring-offset-2
	focus:ring-bones-yellow
	focus:ring-offset-white
	dark:focus:outline-none
	dark:focus:ring-bones-yellow
	dark:focus:ring-offset-bones-black
	font-medium
	inline-flex
	items-center
	justify-center
	rounded
	transition-colors
	transition-opacity
  `,
	primary: `
	bg-bones-mediumblue
	hover:bg-bones-blue
	active:bg-bones-black
	focus:bg-bones-blue
	dark:bg-bones-white
	dark:hover:bg-bones-white
	dark:active:bg-bones-white
	dark:focus:bg-bones-white
	text-bones-white
	hover:text-bones-black
	focus:text-bones-black
	dark:text-bones-mediumblue
	dark:hover:text-bones-blue
	dark:focus:text-bones-blue
  `,
	secondary: `
	bg-bones-white
	hover:bg-bones-white
	active:bg-bones-white
	focus:bg-bones-white
	dark:bg-bones-mediumblue
	dark:hover:bg-bones-blue
	dark:active:bg-bones-mediumblue
	dark:focus:bg-bones-blue
	text-bones-mediumblue
	hover:text-bones-blue
	active:text-bones-mediumblue
	focus:text-bones-blue
	dark:text-bones-white
	dark:hover:text-white
	dark:active:text-bones-white
	dark:focus:text-white
  `,
	transparent: `
	bg-opacity-0
	hover:bg-opacity-0
	active:bg-opacity-0
	focus:bg-opacity-0

	dark:bg-bones-black
	dark:hover:bg-bones-mediumblue
	dark:active:bg-bones-black
	dark:focus:bg-bones-mediumblue

	text-bones-mediumblue
	hover:text-bones-blue
	active:text-bones-mediumblue
	focus:text-bones-blue

	dark:text-bones-cyan
	dark:hover:text-white
	dark:active:text-bones-white
	dark:focus:text-white
  `,
	card: `
	active:bg-bones-white
	bg-bones-white
	dark:active:bg-bones-mediumblue
	dark:bg-bones-mediumblue
	dark:hover:bg-bones-mediumblue
	dark:text-white
	focus:ring-bones-cyan
	hover:bg-bones-white
	text-bones-black
  `,
	disabled: `
	cursor-not-allowed
	opacity-50
  `,
};

const getButtonClass = (
	variant: 'primary' | 'secondary' | 'transparent' | 'card',
	isDisabled: boolean = false,
) => {
	return `${buttonStyles.base} ${buttonStyles[variant]} ${
		isDisabled ? buttonStyles.disabled : ''
	}`.trim();
};

// Tooltip Component
const Tooltip: React.FC<{ content: string; children: React.ReactElement }> = ({
	content,
	children,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const triggerRef = useRef<HTMLElement>(null);

	const showTooltip = () => setIsVisible(true);
	const hideTooltip = () => setIsVisible(false);

	return (
		<div className='relative inline-block'>
			{React.cloneElement(children, {
				ref: triggerRef,
				onMouseEnter: showTooltip,
				onMouseLeave: hideTooltip,
				onFocus: showTooltip,
				onBlur: hideTooltip,
			})}
			{isVisible && (
				<div
					role='tooltip'
					className='absolute z-10 px-2 py-1 text-xs rounded
                               bg-bones-black text-white
                               dark:bg-bones-white dark:text-bones-black
                               transition-opacity duration-150
                               -translate-x-1/2 left-1/2 bottom-full mb-1
                               whitespace-nowrap'>
					{content}
					<div
						className='absolute w-2 h-2 bg-bones-black dark:bg-bones-white rotate-45
                                    -bottom-1 left-1/2 -translate-x-1/2'
					/>
				</div>
			)}
		</div>
	);
};

// Button Props
interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	variant?: 'primary' | 'secondary' | 'transparent' | 'card';
	disabled?: boolean;
	LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	ariaLabel?: string;
	tooltip?: string;
}

// Base Button Component
export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className = '',
	variant = 'primary',
	disabled = false,
	LeftIcon,
	RightIcon,
	ariaLabel,
	tooltip,
}) => {
	const buttonContent = (
		<button
			onClick={onClick}
			className={`px-6 py-3 ${getButtonClass(
				variant,
				disabled,
			)} ${className}`}
			disabled={disabled}
			aria-label={ariaLabel}>
			{LeftIcon && (
				<LeftIcon className='w-6 h-6 mr-2' aria-hidden='true' />
			)}
			{children}
			{RightIcon && (
				<RightIcon className='w-6 h-6 ml-2' aria-hidden='true' />
			)}
		</button>
	);

	return tooltip ? (
		<Tooltip content={tooltip}>{buttonContent}</Tooltip>
	) : (
		buttonContent
	);
};

// Specific Button Variants
export const TextButton: React.FC<ButtonProps> = props => (
	<Button {...props} variant='transparent' />
);

export const FilledButton: React.FC<ButtonProps> = props => (
	<Button {...props} />
);

// Square Icon Button
interface SquareIconButtonProps {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	onClick?: () => void;
	className?: string;
	variant?: 'primary' | 'secondary' | 'transparent' | 'card';
	disabled?: boolean;
	ariaLabel: string;
	tooltip?: string;
}

export const SquareIconButton: React.FC<SquareIconButtonProps> = ({
	Icon,
	onClick,
	className = '',
	variant = 'primary',
	disabled = false,
	ariaLabel,
	tooltip,
}) => {
	const buttonContent = (
		<button
			onClick={onClick}
			className={`px-3 py-3 ${getButtonClass(
				variant,
				disabled,
			)} flex items-center justify-center ${className}`}
			disabled={disabled}
			aria-label={ariaLabel}>
			<Icon className='w-6 h-6' aria-hidden='true' />
		</button>
	);

	return tooltip ? (
		<Tooltip content={tooltip}>{buttonContent}</Tooltip>
	) : (
		buttonContent
	);
};

// Card Button
export const CardButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	className = '',
	variant = 'card',
	disabled = false,
	ariaLabel,
	tooltip,
}) => {
	const buttonContent = (
		<button
			onClick={onClick}
			className={`${getButtonClass(
				variant,
				disabled,
			)} w-full text-left flex flex-col p-4 ${className}`}
			disabled={disabled}
			aria-label={ariaLabel}>
			{children}
		</button>
	);

	return tooltip ? (
		<Tooltip content={tooltip}>{buttonContent}</Tooltip>
	) : (
		buttonContent
	);
};
