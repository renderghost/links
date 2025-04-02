'use client';

import React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import Tooltip from '../Tooltip/Tooltip';

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
			className={clsx(
				styles.buttonBase,
				styles[variant],
				disabled && styles.disabled,
				className,
			)}
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

export default Button;
