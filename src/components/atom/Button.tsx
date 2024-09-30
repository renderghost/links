'use client';

import React from 'react';

// Button styles
const buttonStyles = {
	base: `
    inline-flex items-center justify-center px-6 py-3 rounded
    font-semibold
    focus:outline-none focus:ring-offset-neutral-100 focus:ring-2 focus:ring-offset-2 focus:ring-attention-500
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
    hover:bg-brand-100 hover:text-brand-500
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

// Button Props
interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	variant?: 'primary' | 'secondary' | 'transparent' | 'card';
	disabled?: boolean;
	LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
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
}) => (
	<button
		onClick={onClick}
		className={`${getButtonClass(variant, disabled)} ${className}`}
		disabled={disabled}
	>
		{LeftIcon && <LeftIcon className='w-6 h-6 mr-2' aria-hidden='true' />}
		{children}
		{RightIcon && <RightIcon className='w-6 h-6 ml-2' aria-hidden='true' />}
	</button>
);

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
	'aria-label': string;
}

export const SquareIconButton: React.FC<SquareIconButtonProps> = ({
	Icon,
	onClick,
	className = '',
	variant = 'primary',
	disabled = false,
	'aria-label': ariaLabel,
}) => (
	<button
		onClick={onClick}
		className={`${getButtonClass(
			variant,
			disabled,
		)} flex px-2 items-center justify-center ${className}`}
		disabled={disabled}
		aria-label={ariaLabel}
	>
		<Icon className='w-6 h-6' aria-hidden='true' />
	</button>
);

// Card Button
export const CardButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	className = '',
	variant = 'card',
	disabled = false,
}) => (
	<button
		onClick={onClick}
		className={`${getButtonClass(
			variant,
			disabled,
		)} w-full text-left flex flex-col p-4 ${className}`}
		disabled={disabled}
	>
		{children}
	</button>
);
