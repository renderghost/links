'use client';

import React from 'react';
import { FilledButton } from './Button';
import Section from './Section';
import { Book, Github, Linkedin, Twitter, Youtube, Rss } from 'lucide-react';

const linksList = [
	{
		title: 'My Blog',
		url: 'https://yourblog.com',
		icon: Book,
		ariaLabel: 'Visit My Blog',
	},
	{
		title: 'GitHub',
		url: 'https://github.com/yourusername',
		icon: Github,
		ariaLabel: 'Check My GitHub',
	},
	{
		title: 'LinkedIn',
		url: 'https://linkedin.com/in/yourusername',
		icon: Linkedin,
		ariaLabel: 'Connect on LinkedIn',
	},
	{
		title: 'Twitter',
		url: 'https://twitter.com/yourusername',
		icon: Twitter,
		ariaLabel: 'Follow on Twitter',
	},
	{
		title: 'YouTube',
		url: 'https://youtube.com/yourchannel',
		icon: Youtube,
		ariaLabel: 'Subscribe to My YouTube Channel',
	},
	{
		title: 'RSS Feed',
		url: 'https://yourblog.com/rss',
		icon: Rss,
		ariaLabel: 'Subscribe to RSS Feed',
	},
];

const OtherLinks: React.FC = () => (
	<Section id='other-links' title='Other Links'>
		<div className='flex flex-wrap -m-1.5'>
			{linksList.map((link, index) => (
				<div key={index} className='p-1.5'>
					<FilledButton
						LeftIcon={link.icon}
						onClick={() => window.open(link.url, '_blank')}
						aria-label={link.ariaLabel}
					>
						{link.title}
					</FilledButton>
				</div>
			))}
		</div>
	</Section>
);

export default OtherLinks;
