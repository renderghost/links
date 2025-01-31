'use client';

import React from 'react';
import { SquareIconButton } from './Button';
import { Figma, Github, CalendarPlus, Newspaper, Linkedin } from 'lucide-react';

interface SocialLink {
	title: string;
	url: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	ariaLabel: string;
}

const socialLinks: SocialLink[] = [
	{
		title: 'Calendly',
		url: 'https://calendly.com/barry-prendergast',
		icon: CalendarPlus,
		ariaLabel: 'Schedule a Call',
	},
	{
		title: 'LinkedIn',
		url: 'https://linkedin.com/in/barrymprendergast',
		icon: Linkedin,
		ariaLabel: 'Connect on LinkedIn',
	},
	{
		title: 'Github',
		url: 'https://github.com/renderghost',
		icon: Github,
		ariaLabel: 'Collaborate on GitHub',
	},
	{
		title: 'Medium',
		url: 'https://medium.com/@render_ghost',
		icon: Newspaper,
		ariaLabel: 'Read Articles on Medium',
	},
	{
		title: 'Figma',
		url: 'https://figma.com/@renderghost',
		icon: Figma,
		ariaLabel: 'Import my Figma Assets',
	},
];

const SocialLink: React.FC<SocialLink> = React.memo(
	({ title, url, icon: Icon, ariaLabel }) => (
		<SquareIconButton
			Icon={Icon}
			variant='transparent'
			onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
			ariaLabel={ariaLabel || title}
			tooltip={ariaLabel || title} // Add this line
			className=''
		/>
	),
);

SocialLink.displayName = 'SocialLink';

const SocialLinks: React.FC = React.memo(() => (
	<nav className='flex flex-row flex-wrap gap-3' id='social-links'>
		{socialLinks.map(link => (
			<SocialLink key={link.title} {...link} />
		))}
	</nav>
));

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
