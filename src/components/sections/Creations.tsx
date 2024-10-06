'use client';

import React from 'react';
import { FilledButton } from '../atom/Button';
import Section from '../atom/Section';
import { Aperture, ExternalLink, Github, ListMusic } from 'lucide-react';

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
		title: 'Selections',
		ariaLabel:
			'A fancy discovery app for my many many Spotify playlists. Warning: May contain questionable music choices!',
		icon: ListMusic,
		url: 'https://selections.renderg.host/',
		sourceUrl: 'https://github.com/renderghost/selections',
	},
];

const CreationCard: React.FC<Creation> = ({
	title,
	ariaLabel,
	icon: Icon,
	url,
	sourceUrl,
}) => (
	<div
		className='bg-blue-0 dark:bg-blue-900 flex flex-col justify-between gap-8 p-8'
		itemScope
		itemType='http://schema.org/CreativeWork'
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
					variant='primary'
					RightIcon={ExternalLink}
					onClick={() => window.open(url, '_blank')}
					ariaLabel={`View ${title} creation`}
					tooltip={`View ${title} creation`}
				>
					View Creation
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

const Creations: React.FC = () => (
	<Section
		id='my-creations'
		title='Creations'
		description='Artistic works here and there.'
	>
		<div
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'
			itemScope
			itemType='http://schema.org/ItemList'
		>
			{creationsList.map((creation, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
				>
					<CreationCard {...creation} />
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Creations;
