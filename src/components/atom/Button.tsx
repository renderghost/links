'use client';

import React, { useState, useRef } from 'react';

// Button styles
const buttonStyles = {
	base: `
	dark:focus:outline-none
	dark:focus:ring-4
	dark:focus:ring-yellow-500
	dark:focus:ring-offset-2
	dark:focus:ring-offset-blue-950
	duration-200
	ease-in-out
	focus:outline-none
	focus:ring-4
	focus:ring-yellow-500
	focus:ring-offset-2
	focus:ring-offset-white
	font-medium
	inline-flex
	items-center
	justify-center
	rounded
	transition-colors
	transition-opacity
  `,
	primary: `
	bg-blue-700
	hover:bg-blue-500
	active:bg-blue-950
	//
	dark:bg-blue-100
	dark:hover:bg-white
	dark:active:bg-white
	//
	text-blue-100
	hover:text-blue-950
	//
	dark:text-blue-700
	dark:hover:text-blue-500
  `,
	secondary: `
	bg-blue-100
	hover:bg-blue-50
	active:bg-blue-100
	//
	dark:bg-blue-800
	dark:hover:bg-blue-500
	dark:active:bg-blue-800
	//
	text-blue-700
	hover:text-blue-500
	active:text-blue-700
	//
	dark:text-blue-100
	dark:hover:text-blue-100
	dark:active:text-blue-100
  `,
	transparent: `
	bg-opacity-0
	//
	dark:bg-blue-900
	dark:hover:bg-blue-800
	dark:active:bg-blue-500
	//
	text-blue-700
	hover:text-blue-500
	active:text-blue-700
	//
	dark:text-blue-100
	dark:hover:text-white
	dark:active:text-blue-100
  `,
	card: `
	active:bg-white
	bg-white
	dark:active:bg-blue-600
	dark:bg-blue-800
	dark:hover:bg-blue-700
	dark:text-white
	focus:ring-blue-200
	hover:bg-blue-50
	text-blue-900
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
                               bg-blue-950 text-white
                               dark:bg-white dark:text-blue-950
                               transition-opacity duration-150
                               -translate-x-1/2 left-1/2 bottom-full mb-1
                               whitespace-nowrap'
				>
					{content}
					<div
						className='absolute w-2 h-2 bg-blue-950 dark:bg-white rotate-45
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
			aria-label={ariaLabel}
		>
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
			aria-label={ariaLabel}
		>
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
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);

	return tooltip ? (
		<Tooltip content={tooltip}>{buttonContent}</Tooltip>
	) : (
		buttonContent
	);
};
