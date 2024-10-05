import './globals.css';
// import { dmSans, dmSerifDisplay } from '@/utils/fonts';

import { Metadata } from 'next';
import Banner from '@/components/atom/Banner';

export const metadata: Metadata = {
	title: 'Barry Prendergast | LinksGhost',
	description:
		"A roll of links for Barry Prendergast's creative and professional projects, public speaking, social profiles, and contact info. Find all relevant links for this Product & Service Designer in one place.",
	keywords: [
		'Barry Prendergast',
		'product design',
		'service design',
		'public speaking',
		'social profiles',
		'contact information',
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://links.renderg.host/',
		siteName: 'Barry Prendergast | LinksGhost',
		title: 'Barry Prendergast | LinksGhost',
		description:
			'Access all relevant links for Barry Prendergast - projects, talks, social profiles, and more. Your one-stop hub for connecting with this experienced Product & Service Designer.',
		images: [
			{
				url: 'https://links.renderg.host/avatar-linksghost-og.jpg',
				width: 1200,
				height: 630,
				alt: 'Barry Prendergast | LinksGhost',
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='bg-brand-50 dark:bg-brand-950 text-brand-950 dark:text-brand-white'>
				<Banner />
				{children}
			</body>
		</html>
	);
}
