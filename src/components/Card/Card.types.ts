import type React from 'react';

export interface CardProps {
	title: string;
	description: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url?: string;
	sourceUrl?: string;
	schemaType?: string;
	className?: string;
}
