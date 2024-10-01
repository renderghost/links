'use client';

import React from 'react';
import { FilledButton } from './atom/Button';
import Section from './atom/Section';
import {
	Radius,
	Aperture,
	ExternalLink,
	Github,
	Shuffle,
	ListMusic,
	PersonStanding,
	BookType,
} from 'lucide-react';

interface Project {
	title: string;
	description: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	sourceUrl?: string;
}

const projectsList: Project[] = [
	{
		title: 'A11y Pixel',
		description:
			'Something about my own personal instagram for my amatuer photos.',
		icon: PersonStanding,
		url: 'https://www.figma.com/community/file/1392296486879607254/the-a11y-pixel',
	},
	{
		title: 'Aperture',
		description:
			'Something about my own personal instagram for my amatuer photos.',
		icon: Aperture,
		url: 'https://frame.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/frame',
	},
	{
		title: 'Fictional Data',
		description:
			'Something about Fictional sample data for use in design prototypes for Science products.',
		icon: BookType,
		url: 'https://github.com/Morressier/fictional-design-data',
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
		title: 'Selections',
		description: 'Something about Spotify playlists.',
		icon: ListMusic,
		url: 'https://selections.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/selections',
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
	<div className='bg-neutral-100 dark:bg-brand-950 flex flex-col justify-between gap-8 p-8'>
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<Icon className='w-8 h-8' />
				<h3 className='font-semibold text-2xl'>{title}</h3>
			</div>
			<p className=''>{description}</p>
		</div>
		<div className='block'>
			<div className='flex flex-wrap gap-3'>
				<FilledButton
					variant='primary'
					RightIcon={ExternalLink}
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
	</div>
);

const Projects: React.FC = () => (
	<Section id='my-projects' title='My Favourite Projects'>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
			{projectsList.map((project, index) => (
				<ProjectCard key={index} {...project} />
			))}
		</div>
	</Section>
);

export default Projects;
