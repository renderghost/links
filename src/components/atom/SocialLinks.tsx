'use client';

import React from 'react';
import { SquareIconButton } from './Button';
import {
	Figma,
	Sparkles,
	Github,
	Newspaper,
	ListMusic,
	Linkedin,
} from 'lucide-react';

interface SocialLink {
	title: string;
	url: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	ariaLabel: string;
}

const socialLinks: SocialLink[] = [
	{
		title: 'Figma',
		url: 'https://figma.com/@renderghost',
		icon: Figma,
		ariaLabel: 'Use my Shared Resources on Figma',
	},
	{
		title: 'Github',
		url: 'https://github.com/renderghost',
		icon: Github,
		ariaLabel: 'Contribute to Projects on GitHub',
	},
	{
		title: 'Medium',
		url: 'https://medium.com/@render_ghost',
		icon: Newspaper,
		ariaLabel: 'Read my Articles on Medium',
	},
	{
		title: 'Morressier',
		url: 'https://www.morressier.com',
		icon: Sparkles,
		ariaLabel: 'Check out where I work',
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/barrymprendergast/',
		icon: Linkedin,
		ariaLabel: 'Connect with me on LinkedIn',
	},
	{
		title: 'Spotify',
		url: 'https://open.spotify.com/user/111112791',
		icon: ListMusic,
		ariaLabel: 'Listen to my Spotify Playlists',
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
	<nav className='flex flex-row-reverse flex-wrap gap-3' id='social-links'>
		{socialLinks.map(link => (
			<SocialLink key={link.title} {...link} />
		))}
	</nav>
));

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
