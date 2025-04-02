import type React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'transparent' | 'card';

export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	variant?: ButtonVariant;
	disabled?: boolean;
	LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
	ariaLabel?: string;
	tooltip?: string;
}

export interface SquareIconButtonProps {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	onClick?: () => void;
	className?: string;
	variant?: ButtonVariant;
	disabled?: boolean;
	ariaLabel: string;
	tooltip?: string;
}
