'use client';

import React from 'react';
import { SquareIconButton } from './Button';
import { Figma, Github, BookOpen, Briefcase, LucideIcon } from 'lucide-react';

interface SocialLink {
	title: string;
	url: string;
	icon: LucideIcon;
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
	<nav className='flex gap-2' id='social-links'>
		{socialLinks.map(link => (
			<SocialLink key={link.title} {...link} />
		))}
	</nav>
));

SocialLinks.displayName = 'SocialLinks';

const Header: React.FC = () => (
	<header className='flex flex-col items-center py-8' id='header'>
		<h1 className='text-4xl font-bold text-slate-900 dark:text-white'>
			Your Name
		</h1>
		<p className='text-lg text-slate-700 dark:text-slate-300 text-center max-w-2xl'>
			Hello there.
		</p>
		<SocialLinks />
	</header>
);

export default Header;
