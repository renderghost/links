'use client';

import React from 'react';
import { FilledButton } from '../atom/Button';
import Section from '../atom/Section';
import { ExternalLink, Newspaper, Youtube } from 'lucide-react';

interface Article {
	title: string;
	ariaLabel: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
}

const articlesList: Article[] = [
	{
		title: 'Addressing Bugbears with Innovations in Peer Review',
		ariaLabel: 'About Tech Opportunities, for Peer Review Week',
		icon: Youtube,
		url: 'https://www.youtube.com/watch?v=msdC5Mi1ZC0',
	},
	{
		title: 'Letting the country be its own map.',
		ariaLabel: 'About Design Systems for Prototyper',
		icon: Newspaper,
		url: 'https://medium.com/framer-prototyping/letting-the-country-be-its-own-map-d723b47b5ecc',
	},
	{
		title: 'Mastering the art of AI collaboration',
		ariaLabel: 'About Prompting, on Medium',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/mastering-the-art-of-ai-collaboration-8eb422bb05ea',
	},
	{
		title: 'The best Portfolio is one that gets you hired',
		ariaLabel: 'About Storytelling, on Bootcamp',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/the-best-portfolio-is-one-that-gets-you-hired-part-1-storytelling-e139d2fd0f12',
	},
	{
		title: "The Prophetic Lens of Pixar's Wall-E",
		ariaLabel: 'About the Future, on Medium',
		icon: Newspaper,
		url: 'https://medium.com/@render_ghost/the-prophetic-lens-of-pixars-wall-e-1be009f5f11f',
	},
	{
		title: 'Will AI Destroy Designer Jobs?',
		ariaLabel: 'About Human Experience, on Lost in Semantics',
		icon: Youtube,
		url: 'https://www.youtube.com/watch?v=84DCE1wqWOc',
	},
	{
		title: 'Your boss was right not to support your designs',
		ariaLabel: 'About Design Communication, on Bootcamp',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/your-boss-was-right-to-not-support-your-design-project-ffc6bb956893',
	},
];

const ArticleCard: React.FC<Article> = ({
	title,
	ariaLabel,
	icon: Icon,
	url,
}) => (
	<div
		className='bg-blue-0 dark:bg-blue-900 flex flex-col justify-between gap-8 p-8'
		itemScope
		itemType='http://schema.org/Article'
	>
		<div className='flex flex-col gap-2 '>
			<div className='flex items-center gap-2'>
				<Icon className='w-7 h-7' />
				<h3 className='font-medium text-xl' itemProp='headline'>
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
					ariaLabel={`View ${title} article`}
					tooltip={`View ${title} article`}
				>
					View Article
				</FilledButton>
			</div>
		</div>
		<link itemProp='url' href={url} />
	</div>
);

const Articles: React.FC = () => (
	<Section
		id='my-articles'
		title='Communications'
		description='Articles, Podcasts & Public Speaking'
	>
		<div
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'
			itemScope
			itemType='http://schema.org/ItemList'
		>
			{articlesList.map((article, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
				>
					<ArticleCard {...article} />
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Articles;
