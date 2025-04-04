'use client';

import React from 'react';
import Section from '../../Section/Section';
import Rack from '../../CardRack/CardRack';
import {
	PersonStanding,
	BookType,
	SwatchBook,
	BotMessageSquare,
	Bone,
} from 'lucide-react';

const projectsList = [
	{
		title: 'A11y Pixel',
		description:
			'Invisible Figma component to help document Accessibility attributes in design files at any level of specificity.',
		icon: PersonStanding,
		url: 'https://www.figma.com/community/file/1392296486879607254/the-a11y-pixel',
	},
	{
		title: 'Bones',
		description: 'Experimenting with Design Systems on Storybook',
		icon: Bone,
		url: 'https://bones.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/bones',
	},
	{
		title: 'ChattyFile',
		description:
			'Chrome Extension to upload larger text files to ChatGPT, piece-by-piece.',
		icon: BotMessageSquare,
		url: 'https://chromewebstore.google.com/detail/chatty-file-uploader/hkaeghidfjhncjnajpbmdhpcpfhkacmp',
		sourceUrl: 'https://github.com/renderghost/chattyfile',
	},
	{
		title: 'Fictional Data',
		description:
			'Fake science data that looks real. Perfect for making your science app mockups look legit!',
		icon: BookType,
		url: 'https://github.com/Morressier/fictional-design-data',
	},
	{
		title: 'Spectra',
		description:
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
		<Rack items={projectsList} />
	</Section>
);

export default Projects;
