'use client';

import React from 'react';
import Section from '../../Section/Section';
import Card from '../../Card/Card';
import {
	Aperture,
	Shuffle,
	KeyboardMusic,
	Radius,
	ListMusic,
} from 'lucide-react';

interface Creation {
	title: string;
	ariaLabel: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	sourceUrl?: string;
}

const creationsList: Creation[] = [
	{
		title: 'Aperture',
		ariaLabel:
			'My amateur snaps gallery where I pretend to be a pro photographer.',
		icon: Aperture,
		url: 'https://frame.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/frame',
	},
	{
		title: 'Endlesss Studio OSC',
		ariaLabel:
			'Fully-featured TOUCH OSC controller for Endlesss Studio, the multiplayer music app for MacOS.',
		icon: KeyboardMusic,
		url: 'https://github.com/renderghost/endlesss-studio-osc',
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
		title: 'Selections',
		ariaLabel:
			'A fancy discovery app for my many many Spotify playlists. Warning: May contain questionable music choices!',
		icon: ListMusic,
		url: 'https://selections.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/selections',
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

const Creations: React.FC = () => (
	<Section
		id='my-creations'
		title='Creations'
		description='Links to things I made for fun.'>
		<div className='Rack' itemScope itemType='http://schema.org/ItemList'>
			{creationsList.map((creation, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
					className='flex flex-col flex-grow'>
					<Card
						title={creation.title}
						description={creation.ariaLabel}
						icon={creation.icon}
						schemaType='CreativeWork'
						url={creation.url}
						sourceUrl={creation.sourceUrl}
					/>
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Creations;
