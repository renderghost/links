'use client';

import React from 'react';
import Button from '../Button/Button';
import {
	Figma,
	Github,
	CalendarPlus,
	Newspaper,
	Linkedin,
	CloudSun,
} from 'lucide-react';
import type { SocialLink } from './SocialLinks.types';
import { socialLinksWrapper } from './SocialLinks.styles';

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
		title: 'BlueSky',
		url: 'https://bsky.app/profile/renderg.host',
		icon: CloudSun,
		ariaLabel: 'Follow on BlueSky',
	},
	{
		title: 'Github',
		url: 'https://github.com/renderghost',
		icon: Github,
		ariaLabel: 'Projects on GitHub',
	},
	{
		title: 'Medium',
		url: 'https://medium.com/@render_ghost',
		icon: Newspaper,
		ariaLabel: 'Articles on Medium',
	},
	{
		title: 'Figma',
		url: 'https://figma.com/@renderghost',
		icon: Figma,
		ariaLabel: 'Design Assets on Figma',
	},
];

const SocialLinkComponent: React.FC<SocialLink> = React.memo(
	({ title, url, icon: Icon, ariaLabel }) => (
		<Button
			variant='transparent'
			onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
			ariaLabel={ariaLabel || title}
			tooltip={ariaLabel || title}
			LeftIcon={Icon}
		/>
	),
);

SocialLinkComponent.displayName = 'SocialLink';

const SocialLinks: React.FC = React.memo(() => (
	<nav className={socialLinksWrapper} id='social-links'>
		{socialLinks.map(link => (
			<SocialLinkComponent key={link.title} {...link} />
		))}
	</nav>
));

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
