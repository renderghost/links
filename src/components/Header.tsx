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
	},
	{
		title: 'Github',
		url: 'https://github.com/renderghost',
		icon: Github,
	},
	{
		title: 'Medium',
		url: 'https://medium.com/@render_ghost',
		icon: BookOpen,
		description: 'Read my articles on Medium',
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/renderghost/',
		icon: Briefcase,
		description: 'Connect with me on LinkedIn',
	},
];

const SocialLink: React.FC<SocialLink> = React.memo(
	({ title, url, icon: Icon, description }) => {
		return React.createElement(
			'a',
			{
				href: url,
				target: '_blank',
				rel: 'noopener noreferrer',
				'aria-label': title,
				title: description || title,
			},
			React.createElement(SquareIconButton, { Icon }),
		);
	},
);

SocialLink.displayName = 'SocialLink';

const SocialLinks: React.FC = React.memo(() => {
	return React.createElement(
		'nav',
		{ className: 'flex space-x-4 mt-6', id: 'social-links' },
		socialLinks.map(link =>
			React.createElement(SocialLink, { key: link.title, ...link }),
		),
	);
});

SocialLinks.displayName = 'SocialLinks';

const Header: React.FC = () => {
	return React.createElement(
		'header',
		{ className: 'flex flex-col items-center py-8', id: 'header' },
		React.createElement(
			'h1',
			{
				className:
					'text-4xl font-bold text-slate-900 dark:text-white mb-4',
			},
			'Your Name',
		),
		React.createElement(
			'p',
			{
				className:
					'text-lg text-slate-700 dark:text-slate-300 text-center max-w-2xl',
			},
			'A brief introduction or tagline goes here. Make it concise and impactful.',
		),
		React.createElement(SocialLinks),
	);
};

export default Header;
