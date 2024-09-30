'use client';

import React from 'react';
import { SquareIconButton } from './Button';
import { Figma, Github, BookOpen, Briefcase } from 'lucide-react';

interface SocialLink {
	title: string;
	url: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	description?: string;
}

const socialLinks: SocialLink[] = [
	{
		title: 'Figma',
		url: 'https://figma.com/@renderghost',
		icon: Figma,
		description: 'Use my Shared Resources on Figma',
	},
	{
		title: 'Github',
		url: 'https://github.com/renderghost',
		icon: Github,
		description: 'Contribute to Projects on GitHub',
	},
	{
		title: 'Medium',
		url: 'https://medium.com/@render_ghost',
		icon: BookOpen,
		description: 'Read my Articles on Medium',
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/renderghost/',
		icon: Briefcase,
		description: 'Connect with me on LinkedIn',
	},
];

const SocialLink: React.FC<SocialLink> = React.memo(
	({ title, url, icon: Icon, description }) => (
		<SquareIconButton
			Icon={Icon}
			variant='secondary'
			onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
			aria-label={description || title}
		/>
	),
);

SocialLink.displayName = 'SocialLink';

const SocialLinks: React.FC = React.memo(() => (
	<nav className='flex flex-wrap gap-3' id='social-links'>
		{socialLinks.map(link => (
			<SocialLink key={link.title} {...link} />
		))}
	</nav>
));

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
