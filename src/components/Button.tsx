'use client';

import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export const TextButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
}) => (
	<button
		onClick={onClick}
		className={`text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 ${className}`}
	>
		{children}
	</button>
);

interface FilledButtonProps extends ButtonProps {
	LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const FilledButton: React.FC<FilledButtonProps> = ({
	children,
	onClick,
	className,
	LeftIcon,
	RightIcon,
}) => (
	<button
		onClick={onClick}
		className={`flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-slate-200 dark:hover:bg-slate-700 ${className}`}
	>
		{LeftIcon && <LeftIcon className='w-5 h-5 mr-2' aria-hidden='true' />}
		{children}
		{RightIcon && <RightIcon className='w-5 h-5 ml-2' aria-hidden='true' />}
	</button>
);

interface SquareIconButtonProps {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	onClick?: () => void;
	className?: string;
}

export const SquareIconButton: React.FC<SquareIconButtonProps> = ({
	Icon,
	onClick,
	className,
}) => (
	<button
		onClick={onClick}
		className={`w-10 h-10 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-slate-200 dark:hover:bg-slate-700 ${className}`}
		aria-label='Icon button'
	>
		<Icon className='w-6 h-6' aria-hidden='true' />
	</button>
);

export const CardButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
}) => (
	<button
		onClick={onClick}
		className={`w-full text-left flex flex-col p-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded shadow focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-slate-200 dark:hover:bg-slate-700 ${className}`}
	>
		{children}
	</button>
);
