'use client';

import React from 'react';
import Section from '../../Section/Section';
import Card from '../../Card/Card';
import {
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
	url?: string;
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

const Projects: React.FC = () => (
	<Section
		id='my-lab'
		title='Design Tools'
		description='Links to things I made for work.'>
		<div className='Rack' itemScope itemType='http://schema.org/ItemList'>
			{projectsList.map((project, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
					className='flex flex-col flex-grow'>
					<Card
						title={project.title}
						description={project.ariaLabel}
						icon={project.icon}
						schemaType='SoftwareApplication'
						url={project.url}
						sourceUrl={project.sourceUrl}
					/>
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Projects;
