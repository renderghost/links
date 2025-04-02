'use client';

import React, { useState, useRef } from 'react';
import type { ButtonProps, SquareIconButtonProps } from './Button.types';
import {
	buttonBase,
	buttonVariants,
	buttonDisabled,
	squareButtonBase,
	cardButtonBase,
} from './Button.styles';

// --- Tooltip ---
const Tooltip: React.FC<{ content: string; children: React.ReactElement }> = ({
	content,
	children,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const triggerRef = useRef<HTMLElement>(null);

	return (
		<div className='relative inline-block'>
			{React.cloneElement(children, {
				ref: triggerRef,
				onMouseEnter: () => setIsVisible(true),
				onMouseLeave: () => setIsVisible(false),
				onFocus: () => setIsVisible(true),
				onBlur: () => setIsVisible(false),
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

// --- Helpers ---
const getButtonClass = (
	variant: keyof typeof buttonVariants,
	isDisabled = false,
) =>
	`${buttonBase} ${buttonVariants[variant]} ${
		isDisabled ? buttonDisabled : ''
	}`.trim();

// --- Button ---
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
	const content = (
		<button
			onClick={onClick}
			className={`${getButtonClass(variant, disabled)} ${className}`}
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

	return tooltip ? <Tooltip content={tooltip}>{content}</Tooltip> : content;
};

// --- Variants ---
export const TextButton: React.FC<ButtonProps> = props => (
	<Button {...props} variant='transparent' />
);

export const FilledButton: React.FC<ButtonProps> = props => (
	<Button {...props} variant='primary' />
);

export const SquareIconButton: React.FC<SquareIconButtonProps> = ({
	Icon,
	onClick,
	className = '',
	variant = 'primary',
	disabled = false,
	ariaLabel,
	tooltip,
}) => {
	const content = (
		<button
			onClick={onClick}
			className={`${squareButtonBase} ${getButtonClass(
				variant,
				disabled,
			)} ${className}`}
			disabled={disabled}
			aria-label={ariaLabel}>
			<Icon className='w-6 h-6' aria-hidden='true' />
		</button>
	);

	return tooltip ? <Tooltip content={tooltip}>{content}</Tooltip> : content;
};

export const CardButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	className = '',
	variant = 'card',
	disabled = false,
	ariaLabel,
	tooltip,
}) => {
	const content = (
		<button
			onClick={onClick}
			className={`${cardButtonBase} ${getButtonClass(
				variant,
				disabled,
			)} ${className}`}
			disabled={disabled}
			aria-label={ariaLabel}>
			{children}
		</button>
	);

	return tooltip ? <Tooltip content={tooltip}>{content}</Tooltip> : content;
};
