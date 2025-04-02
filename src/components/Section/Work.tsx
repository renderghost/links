'use client';

import React from 'react';
import Section from '../Section/Section';
import Card from '../Card/Card';
import { Aperture, ListMusic } from 'lucide-react';

interface Work {
	title: string;
	ariaLabel: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	sourceUrl?: string;
}

const worksList: Work[] = [
	{
		title: 'Brandwatch VIZIA',
		ariaLabel:
			'My amateur snaps gallery where I pretend to be a pro photographer.',
		icon: Aperture,
		url: 'https://www.brandwatch.com/products/vizia/',
	},
	{
		title: 'Morressier Publishing Engine',
		ariaLabel:
			'A fancy discovery app for my many many Spotify playlists. Warning: May contain questionable music choices!',
		icon: ListMusic,
		url: 'https://selections.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/selections',
	},
];

const Works: React.FC = () => (
	<Section
		id='my-works'
		title='Professional Work'
		description='Things made for money.'>
		<div
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
			itemScope
			itemType='http://schema.org/ItemList'>
			{worksList.map((work, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
					className='cardRack'>
					<Card
						title={work.title}
						description={work.ariaLabel}
						icon={work.icon}
						schemaType='CreativeWork'
						url={work.url}
						sourceUrl={work.sourceUrl}
					/>
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Works;
