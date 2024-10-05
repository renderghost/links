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
			'My amatuer snaps gallery where I pretend to be a pro photographer.',
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
	</div>
);

const Creations: React.FC = () => (
	<Section
		id='my-creations'
		title='Creations'
		description='Artistic works here and there.'
	>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
			{creationsList.map((creation, index) => (
				<CreationCard key={index} {...creation} />
			))}
		</div>
	</Section>
);

export default Creations;
