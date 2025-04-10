'use client';

import React from 'react';
import Section from '../../Section/Section';
import Rack from '../../CardRack/CardRack';
import {
	Aperture,
	Shuffle,
	KeyboardMusic,
	Radius,
	Sparkles,
	LibraryBig,
	ListMusic,
} from 'lucide-react';

const creationsList = [
	{
		title: 'A Brilliant Noise',
		description:
			'Playing with text and image generating LLMs to create an ever evolving science fiction storyline.',
		icon: Sparkles,
		url: 'https://strategyschmategy.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/strategy-schmategy',
	},
	{
		title: 'Aperture',
		description:
			'My amateur snaps gallery where I pretend to be a pro photographer.',
		icon: Aperture,
		url: 'https://frame.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/frame',
	},
	{
		title: 'Endlesss Studio OSC',
		description:
			'Fully-featured TOUCH OSC controller for Endlesss Studio, the multiplayer music app for MacOS.',
		icon: KeyboardMusic,
		url: 'https://github.com/renderghost/endlesss-studio-osc',
	},
	{
		title: 'Ramps',
		description:
			'My quirky gradient generator. Because we all want more color.',
		icon: Radius,
		url: 'https://ramps.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/ramps',
	},
	{
		title: 'Read',
		description: 'A list of my all-time favourite books.',
		icon: LibraryBig,
		url: 'https://read.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/read',
	},
	{
		title: 'Strategy Schmategy',
		description:
			'A random design strategy generator. For when you want to leave success to chance!',
		icon: Shuffle,
		url: 'https://strategyschmategy.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/strategy-schmategy',
	},
	{
		title: 'Selections',
		description:
			'A fancy discovery app for my many many Spotify playlists. Warning: May contain questionable music choices!',
		icon: ListMusic,
		url: 'https://selections.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/selections',
	},
];

const Creations: React.FC = () => (
	<Section
		id='my-creations'
		title='Creations'
		description='Links to things I made for fun.'>
		<Rack items={creationsList} />
	</Section>
);

export default Creations;
