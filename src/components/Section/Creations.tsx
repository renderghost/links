'use client';

import React from 'react';
import { FilledButton } from '../Button/Button';
import Section from '../Section/Section';
import {
	Aperture,
	Shuffle,
	ExternalLink,
	KeyboardMusic,
	Github,
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

const CreationCard: React.FC<Creation> = ({
	title,
	ariaLabel,
	icon: Icon,
	url,
	sourceUrl,
}) => (
	<div className='card' itemScope itemType='http://schema.org/CreativeWork'>
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<Icon className='w-7 h-7' />
				<h3 className='font-medium text-xl' itemProp='name'>
					{title}
				</h3>
			</div>
			<p
				className='text-bones-black dark:text-bones-white'
				itemProp='description'>
				{ariaLabel}
			</p>
		</div>
		<div className='block'>
			<div className='flex flex-wrap gap-4'>
				<FilledButton
					variant='secondary'
					RightIcon={ExternalLink}
					onClick={() => window.open(url, '_blank')}
					ariaLabel={`View ${title} creation`}
					tooltip={`View ${title} creation`}>
					View Creation
				</FilledButton>
				{sourceUrl && (
					<FilledButton
						variant='transparent'
						RightIcon={Github}
						onClick={() => window.open(sourceUrl, '_blank')}
						ariaLabel={`View source code for ${title}`}
						tooltip={`View source code for ${title}`}>
						View Source
					</FilledButton>
				)}
			</div>
		</div>
		<link itemProp='url' href={url} />
		{sourceUrl && <link itemProp='codeRepository' href={sourceUrl} />}
	</div>
);

const Creations: React.FC = () => (
	<Section
		id='my-creations'
		title='Creations'
		description='Links to things I made for fun.'>
		<div
			className='cardRack'
			itemScope
			itemType='http://schema.org/ItemList'>
			{creationsList.map((creation, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
					className='flex flex-col flex-grow'>
					<CreationCard {...creation} />
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Creations;
