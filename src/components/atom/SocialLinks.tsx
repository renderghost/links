'use client';

import React from 'react';
import { SquareIconButton } from './Button';
import {
	Figma,
	Github,
	Newspaper,
	Briefcase,
	ListMusic,
	Linkedin,
} from 'lucide-react';

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
		icon: Newspaper,
		description: 'Read my Articles on Medium',
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/renderghost/',
		icon: Linkedin,
		description: 'Connect with me on LinkedIn',
	},
	{
		title: 'Spotify',
		url: 'https://open.spotify.com/user/111112791',
		icon: ListMusic,
		description: 'Listem to my Spotify Playlists',
	},
];

const SocialLink: React.FC<SocialLink> = React.memo(
	({ title, url, icon: Icon, description }) => (
		<SquareIconButton
			Icon={Icon}
			variant='secondary'
			onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
			aria-label={description || title}
			className='px-3 py-3'
		/>
	),
);

SocialLink.displayName = 'SocialLink';

const SocialLinks: React.FC = React.memo(() => (
	<nav className='flex flex-row-reverse flex-wrap gap-3' id='social-links'>
		{socialLinks.map(link => (
			<SocialLink key={link.title} {...link} />
		))}
	</nav>
));

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
