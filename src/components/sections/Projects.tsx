'use client';

import React from 'react';
import { FilledButton } from '../atom/Button';
import Section from '../atom/Section';
import {
	ExternalLink,
	Github,
	PersonStanding,
	BookType,
	SwatchBook,
	BotMessageSquare,
	Bone,
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
		title: 'Bones',
		ariaLabel: 'Experimenting with Design Systems on Storybook',
		icon: Bone,
		url: 'https://bones.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/bones',
	},
	{
		title: 'ChattyFile',
		ariaLabel:
			'Chrome Extension to upload larger text files to ChatGPT, piece-by-piece.',
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
		title: 'Spectra',
		ariaLabel:
			'Color palette magic for design systems. A little color helper elf for interfaces.',
		icon: SwatchBook,
		url: 'https://spectra.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/spectra',
	},
];

const ProjectCard: React.FC<Project> = ({
	title,
	ariaLabel,
	icon: Icon,
	url,
	sourceUrl,
}) => (
	<div
		className='bg-white dark:bg-blue-900 flex flex-col flex-grow justify-between gap-8 p-8'
		itemScope
		itemType='http://schema.org/SoftwareApplication'
	>
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<Icon className='w-7 h-7' />
				<h3 className='font-medium text-xl' itemProp='name'>
					{title}
				</h3>
			</div>
			<p
				className='text-blue-900 dark:text-blue-100'
				itemProp='description'
			>
				{ariaLabel}
			</p>
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
		<link itemProp='url' href={url} />
		{sourceUrl && <link itemProp='codeRepository' href={sourceUrl} />}
	</div>
);

const Projects: React.FC = () => (
	<Section
		id='my-lab'
		title='Design Tools'
		description='Links to things I made for work.'
	>
		<div
			className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1'
			itemScope
			itemType='http://schema.org/ItemList'
		>
			{projectsList.map((project, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
					className='flex flex-col flex-grow'
				>
					<ProjectCard {...project} />
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Projects;
