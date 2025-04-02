import type React from 'react';

export interface SocialLink {
	title: string;
	url: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	ariaLabel: string;
}
