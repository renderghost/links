'use client';

import React from 'react';
import { FilledButton } from '../atom/Button';
import Section from '../atom/Section';
import {
	Radius,
	ExternalLink,
	Github,
	Shuffle,
	PersonStanding,
	BookType,
	Ghost,
	SwatchBook,
	FlaskConical,
	BotMessageSquare,
} from 'lucide-react';

interface Project {
	title: string;
	ariaLabel: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	sourceUrl?: string;
}

const projectsList: Project[] = [
	{
		title: 'A11y Pixel',
		ariaLabel:
			'Invisible Figma component to help document Accessibility attributes in design files at any level of specificity.',
		icon: PersonStanding,
		url: 'https://www.figma.com/community/file/1392296486879607254/the-a11y-pixel',
	},
	{
		title: 'ChattyFile',
		ariaLabel: 'Chrome Extension to upload larger text files to ChatGPT!',
		icon: BotMessageSquare,
		url: 'https://chromewebstore.google.com/detail/chatty-file-uploader/hkaeghidfjhncjnajpbmdhpcpfhkacmp',
		sourceUrl: 'https://github.com/renderghost/chattyfile',
	},
	{
		title: 'Fictional Data',
		ariaLabel:
			'Fake science data that looks real. Perfect for making your science app mockups look legit!',
		icon: BookType,
		url: 'https://github.com/Morressier/fictional-design-data',
	},
	{
		title: 'LinkGhost',
		ariaLabel:
			'My digital pinboard - all my important links in one tidy place. No spooks, just handy! ',
		icon: Ghost,
		url: 'https://linkghost.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/linkghost',
	},
	{
		title: 'Ramps',
		ariaLabel:
			'My quirky gradient generator. Because we all want more color.',
		icon: Radius,
		url: 'https://ramps.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/ramps',
	},
	{
		title: 'Science UX',
		ariaLabel:
			'A journal looking into the science behind designing for scientific products.',
		icon: FlaskConical,
		url: 'https://scienceux.org/',
	},
	{
		title: 'Spectra',
		ariaLabel:
			'Color palette magic for design systems. A little color helper elf for interfaces.',
		icon: SwatchBook,
		url: 'https://spectra.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/spectra',
	},
	{
		title: 'Strategy Schmategy',
		ariaLabel:
			'A random design strategy generator. For when you want to leave success to chance!',
		icon: Shuffle,
		url: 'https://strategyschmategy.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/strategy-schmategy',
	},
];

const ProjectCard: React.FC<Project> = ({
	title,
	ariaLabel,
	icon: Icon,
	url,
	sourceUrl,
}) => (
	<div className='bg-brand-white dark:bg-brand-900 flex flex-col justify-between gap-8 p-8'>
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<Icon className='w-7 h-' />
				<h3 className='font-medium text-xl'>{title}</h3>
			</div>
			<p className=' text-brand-900 dark:text-brand-100'>{ariaLabel}</p>
		</div>
		<div className='block'>
			<div className='flex flex-wrap gap-3'>
				<FilledButton
					variant='secondary'
					RightIcon={ExternalLink}
					onClick={() => window.open(url, '_blank')}
					ariaLabel={`View ${title} project`}
					tooltip={`View ${title} project`}
				>
					View Project
				</FilledButton>
				{sourceUrl && (
					<FilledButton
						variant='transparent'
						RightIcon={Github}
						onClick={() => window.open(sourceUrl, '_blank')}
						ariaLabel={`View source code for ${title}`}
						tooltip={`View source code for ${title}`}
					>
						View Source
					</FilledButton>
				)}
			</div>
		</div>
	</div>
);

const Projects: React.FC = () => (
	<Section id='my-projects' title='The Lab' description='Projects & Platyime'>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
			{projectsList.map((project, index) => (
				<ProjectCard key={index} {...project} />
			))}
		</div>
	</Section>
);

export default Projects;
