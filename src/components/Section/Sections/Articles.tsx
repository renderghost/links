'use client';

import React from 'react';
import Section from '../Section';
import CardRack from '../../CardRack/CardRack';

import { Newspaper, Youtube } from 'lucide-react';

const articlesList = [
	{
		title: 'Addressing Bugbears in Peer Review',
		description:
			'Industry panel examining AI in academic peer review, discussing the potential benefits and challenges for scholarly publishing.',
		icon: Youtube,
		url: 'https://www.youtube.com/watch?v=msdC5Mi1ZC0',
	},
	{
		title: 'Letting the country be its own map.',
		description:
			'Discusses how traditional design tools produce unnecessary deliverables and suggests a future where "pattern studios" support working directly with web materials.',
		icon: Newspaper,
		url: 'https://medium.com/framer-prototyping/letting-the-country-be-its-own-map-d723b47b5ecc',
	},
	{
		title: 'Mastering the art of AI collaboration',
		description:
			'Provides tips for effective AI collaboration, emphasising clear communication, specific instructions, and treating AI tools as human colleagues to achieve better results.',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/mastering-the-art-of-ai-collaboration-8eb422bb05ea',
	},
	{
		title: 'The best Portfolio is one that gets you hired',
		description:
			'Guides designers to create effective portfolios through storytelling, focussing on authentic narratives about metrics, challenges and impact rather than just showing outputs.',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/the-best-portfolio-is-one-that-gets-you-hired-part-1-storytelling-e139d2fd0f12',
	},
	{
		title: "The Prophetic Lens of Pixar's Wall-E",
		description:
			'WALL-E depicts our likely future: a world of technological dependence, environmental ruin, and corporate control of humanity.',
		icon: Newspaper,
		url: 'https://medium.com/@render_ghost/the-prophetic-lens-of-pixars-wall-e-1be009f5f11f',
	},
	{
		title: 'Traditional citations are bad for Science.',
		description:
			'Explains why traditional academic citations are inferior to standard web links, harming SEO, readability, accessibility and machine processing.',
		icon: Newspaper,
		url: 'https://www.linkedin.com/pulse/traditional-academic-citation-links-bad-science-barry-prendergast-ls4ef/',
	},
	{
		title: 'Will AI Destroy Designer Jobs?',
		description:
			'A deep dive into the impact of AI on design and creativity, exploring how designers can adapt an maintain human elements like vision, taste, and curiosity.',
		icon: Youtube,
		url: 'https://www.youtube.com/watch?v=84DCE1wqWOc',
	},
	{
		title: 'Your boss was right not to support your design',
		description:
			'Designers must frame their work around business metrics —costs, acquisition, retention— rather than design theory to gain stakeholder support.',
		icon: Newspaper,
		url: 'https://medium.com/design-bootcamp/your-boss-was-right-to-not-support-your-design-project-ffc6bb956893',
	},
];

const Articles: React.FC = () => (
	<Section
		id='my-articles'
		title='Discussions'
		description='Links to my favourite articles, podcasts & public speaking.'>
		<CardRack items={articlesList} />
	</Section>
);

export default Articles;
