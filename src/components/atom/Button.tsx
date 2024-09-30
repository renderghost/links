'use client';

import React from 'react';

// Button styles
const buttonStyles = {
	base: `
    inline-flex items-center justify-center px-4 py-2 
    border border-transparent text-sm font-medium rounded
    focus:outline-none focus:ring-offset-white focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400
    transition-colors duration-200 ease-in-out
  `,
	primary: `
    bg-slate-900 text-white 
    hover:bg-slate-800 
    active:bg-slate-950 
    focus:ring-slate-500
    dark:bg-slate-200 dark:text-slate-900
    dark:hover:bg-slate-300
    dark:active:bg-slate-100
  `,
	secondary: `
    bg-slate-200 text-slate-900 
    hover:bg-slate-300 
    active:bg-slate-400 
    focus:ring-slate-300
    dark:bg-slate-700 dark:text-white
    dark:hover:bg-slate-600
    dark:active:bg-slate-800
  `,
	transparent: `
    bg-transparent text-slate-900 
    hover:bg-slate-100 
    active:bg-slate-200 
    focus:ring-slate-300
    dark:text-white
    dark:hover:bg-slate-800
    dark:active:bg-slate-700
  `,
	card: `
    bg-white text-slate-900 
    hover:bg-slate-50 
    active:bg-slate-100 
    focus:ring-slate-200
    dark:bg-slate-800 dark:text-white
    dark:hover:bg-slate-700
    dark:active:bg-slate-600
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
