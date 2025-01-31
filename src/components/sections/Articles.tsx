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
		title: 'Addressing Bugbears in Peer Review',
		ariaLabel:
			'Industry panel examining AI in academic peer review, discussing the potential benefits and challenges for scholarly publishing.',
		icon: Youtube,
		url: 'https://www.youtube.com/watch?v=msdC5Mi1ZC0',
	},
	{
		title: 'Letting the country be its own map.',
		ariaLabel:
			'Discusses how traditional design tools produce unnecessary deliverables and suggests a future where "pattern studios" support working directly with web materials.',
		icon: Newspaper,
		url: 'https://medium.com/framer-prototyping/letting-the-country-be-its-own-map-d723b47b5ecc',
	},
	{
		title: 'Mastering the art of AI collaboration',
		ariaLabel:
			'Provides tips for effective AI collaboration, emphasising clear communication, specific instructions, and treating AI tools as human colleagues to achieve better results.',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/mastering-the-art-of-ai-collaboration-8eb422bb05ea',
	},
	{
		title: 'The best Portfolio is one that gets you hired',
		ariaLabel:
			'Guides designers to create effective portfolios through storytelling, focussing on authentic narratives about metrics, challenges and impact rather than just showing outputs.',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/the-best-portfolio-is-one-that-gets-you-hired-part-1-storytelling-e139d2fd0f12',
	},
	{
		title: "The Prophetic Lens of Pixar's Wall-E",
		ariaLabel:
			'WALL-E depicts our likely future: a world of technological dependence, environmental ruin, and corporate control of humanity.',
		icon: Newspaper,
		url: 'https://medium.com/@render_ghost/the-prophetic-lens-of-pixars-wall-e-1be009f5f11f',
	},
	{
		title: 'Traditional citations are bad for Science.',
		ariaLabel:
			'Explains why traditional academic citations are inferior to standard web links, harming SEO, readability, accessibility and machine processing.',
		icon: Newspaper,
		url: 'https://www.linkedin.com/pulse/traditional-academic-citation-links-bad-science-barry-prendergast-ls4ef/',
	},
	{
		title: 'Will AI Destroy Designer Jobs?',
		ariaLabel:
			'A deep dive into the impact of AI on design and creativity, exploring how designers can adapt an maintain human elements like vision, taste, and curiosity.',
		icon: Youtube,
		url: 'https://www.youtube.com/watch?v=84DCE1wqWOc',
	},
	{
		title: 'Your boss was right not to support your design',
		ariaLabel:
			'Designers must frame their work around business metrics —costs, acquisition, retention— rather than design theory to gain stakeholder support.',
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
		className='bg-white dark:bg-blue-900 flex flex-col flex-grow justify-between gap-8 p-8'
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
					variant='secondary'
					RightIcon={ExternalLink}
					onClick={() => window.open(url, '_blank')}
					ariaLabel={`View article`}
					// tooltip={`View article`}
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
		title='Discussions'
		description='A selection of my favourite articles, podcasts & public speaking.'
	>
		<div
			className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1'
			itemScope
			itemType='http://schema.org/ItemList'
		>
			{articlesList.map((article, index) => (
				<div
					key={index}
					itemProp='itemListElement'
					itemScope
					itemType='http://schema.org/ListItem'
					className='flex flex-col flex-grow'
				>
					<ArticleCard {...article} />
					<meta itemProp='position' content={`${index + 1}`} />
				</div>
			))}
		</div>
	</Section>
);

export default Articles;
