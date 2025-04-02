'use client';

import React from 'react';
import { FilledButton } from '../Button/Button';
import Section from '../Section/Section';
import { Figma, Github, Newspaper, Linkedin } from 'lucide-react';

const linksList = [
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
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/barrymprendergast/',
		icon: Linkedin,
		ariaLabel: 'Connect with me on LinkedIn',
	},
];

const OtherLinks: React.FC = () => (
	<Section
		id='other-links'
		title='Profiles'
		description='Links to my Social profiles'>
		<div className='flex flex-wrap -m-1.5'>
			{linksList.map((link, index) => (
				<div key={index} className='p-1.5'>
					<FilledButton
						variant='transparent'
						LeftIcon={link.icon}
						onClick={() => window.open(link.url, '_blank')}
						aria-label={link.ariaLabel}
						tooltip={link.ariaLabel}>
						{link.title}
					</FilledButton>
				</div>
			))}
		</div>
	</Section>
);

export default OtherLinks;
