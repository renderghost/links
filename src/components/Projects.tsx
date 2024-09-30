'use client';

import React from 'react';
import { FilledButton } from './atom/Button';
import Section from './atom/Section';
import { Radius, Aperture, ExternalLink, Github, Shuffle } from 'lucide-react';

interface Project {
	title: string;
	description: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	sourceUrl?: string;
}

const projectsList: Project[] = [
	{
		title: 'Aperture',
		description:
			'Something about my own personal instagram for my amatuer photos.',
		icon: Aperture,
		url: 'https://frame.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/frame',
	},
	{
		title: 'Ramps',
		description: 'Something about an experimental gradient generator.',
		icon: Radius,
		url: 'https://ramps.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/ramps',
	},
	{
		title: 'Spectra',
		description:
			'Something about generating hue palettes for design systems.',
		icon: Aperture,
		url: 'https://spectra.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/spectra',
	},
	{
		title: 'Strategy Schmategy',
		description: 'Something about Generative design strategies.',
		icon: Shuffle,
		url: 'https://strategyschmategy.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/strategy-schmategy',
	},
];

const ProjectCard: React.FC<Project> = ({
	title,
	description,
	icon: Icon,
	url,
	sourceUrl,
}) => (
	<div className='bg-neutral-100 dark:bg-brand-950 overflow-hidden p-8 flex flex-col justify-between gap-4'>
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-1 text-xl'>
				<Icon className='w-5 h-5 mr-2' />
				<h3 className='font-semibold'>{title}</h3>
			</div>
			<p className=''>{description}</p>
		</div>
		<div className='flex flex-wrap gap-3'>
			<FilledButton
				variant='primary'
				LeftIcon={ExternalLink}
				onClick={() => window.open(url, '_blank')}
				aria-label={`View ${title} project`}
			>
				View Project
			</FilledButton>
			{sourceUrl && (
				<FilledButton
					variant='secondary'
					LeftIcon={Github}
					onClick={() => window.open(sourceUrl, '_blank')}
					aria-label={`View source code for ${title}`}
				>
					View Source
				</FilledButton>
			)}
		</div>
	</div>
);

const Projects: React.FC = () => (
	<Section id='my-projects' title='Recent Projects'>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
			{projectsList.map((project, index) => (
				<ProjectCard key={index} {...project} />
			))}
		</div>
	</Section>
);

export default Projects;
