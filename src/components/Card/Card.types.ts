import type React from 'react';

export interface CardProps {
	title: string;
	description: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	actions?: React.ReactNode;
	schemaType?: string;
	url?: string;
	sourceUrl?: string;
	className?: string;
}
