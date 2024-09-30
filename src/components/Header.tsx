'use client';

import React from 'react';
import { SquareIconButton } from './Button';
import { UserIcon, BriefcaseIcon, LinkIcon } from './icons';

interface SocialLink {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	label: string;
}

const socialLinks: SocialLink[] = [
	{ icon: UserIcon, url: 'https://github.com/yourusername', label: 'GitHub' },
	{
		icon: BriefcaseIcon,
		url: 'https://linkedin.com/in/yourusername',
		label: 'LinkedIn',
	},
	{
		icon: LinkIcon,
		url: 'https://twitter.com/yourusername',
		label: 'Twitter',
	},
	// Add more social links as needed
];

const Header: React.FC = () => (
	<header className='flex flex-col items-center py-8' id='header'>
		<h1 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
			Your Name
		</h1>
		<p className='text-lg text-slate-700 dark:text-slate-300 text-center'>
			A brief introduction or tagline goes here.
		</p>
		<div className='flex space-x-4 mt-6' id='social-links'>
			{socialLinks.map((link, index) => (
				<a
					href={link.url}
					target='_blank'
					rel='noopener noreferrer'
					key={index}
					aria-label={link.label}
				>
					<SquareIconButton Icon={link.icon} />
				</a>
			))}
		</div>
	</header>
);

export default Header;
