'use client';

import React, { useState, useRef } from 'react';

// Button styles
const buttonStyles = {
	base: `
    inline-flex items-center justify-center rounded
    font-semibold
    focus:outline-none focus:ring-offset-neutral-100 focus:ring-4 focus:ring-offset-2 focus:ring-attention-500
    transition-colors duration-200 ease-in-out
  `,
	primary: `
    bg-brand-900 text-neutral-100 
    hover:bg-brand-500 
    active:bg-brand-950 
    dark:bg-brand-200 dark:text-brand-900
    dark:hover:bg-brand-300
    dark:active:bg-brand-100
  `,
	secondary: `
    bg-brand-50 text-brand-950
    hover:bg-brand-100 hover:text-brand-500
    active:bg-brand-100
    dark:bg-brand-700 dark:text-neutral-100
    dark:hover:bg-brand-600
    dark:active:bg-brand-800
  `,
	transparent: `
    bg-transparent text-brand-950
    hover:bg-brand-50 hover:text-brand-500
    active:bg-brand-100
    dark:bg-brand-700 dark:text-neutral-100
    dark:hover:bg-brand-600
    dark:active:bg-brand-800
  `,
	card: `
    bg-neutral-100 text-brand-900 
    hover:bg-brand-50 
    active:bg-brand-100 
    focus:ring-brand-200
    dark:bg-brand-800 dark:text-neutral-100
    dark:hover:bg-brand-700
    dark:active:bg-brand-600
  `,
	disabled: `
    opacity-50 cursor-not-allowed
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
                               bg-neutral-0 text-neutral-100 
                               dark:bg-neutral-100 dark:text-neutral-0 
                               transition-opacity duration-150
                               -translate-x-1/2 left-1/2 bottom-full mb-1
                               whitespace-nowrap'
				>
					{content}
					<div
						className='absolute w-2 h-2 bg-neutral-0 dark:bg-neutral-100 rotate-45 
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
