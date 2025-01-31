import './globals.css';
// import { dmSans, dmSerifDisplay } from '@/utils/fonts';

import { Metadata } from 'next';
import Banner from '@/components/atom/Banner';
import Hero from '@/components/Hero';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
	title: 'Barry Prendergast | LinksGhost - Product & Service Designer Links',
	description:
		"Explore Barry Prendergast's curated collection of links to creative and professional projects, public speaking engagements, social profiles, and contact information. Your one-stop hub for connecting with this experienced Product & Service Designer.",
	keywords: [
		'Barry Prendergast',
		'product design',
		'service design',
		'public speaking',
		'social profiles',
		'contact information',
		'designer links',
		'professional portfolio',
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://links.renderg.host/',
		siteName: 'Barry Prendergast | LinksGhost',
		title: 'Barry Prendergast | LinksGhost - Product & Service Designer Links',
		description:
			"Discover Barry Prendergast's curated links to projects, talks, social profiles, and more. Connect with this experienced Product & Service Designer through this comprehensive link hub.",
		images: [
			{
				url: 'https://links.renderg.host/avatar-linksghost-og.jpg',
				width: 1200,
				height: 630,
				alt: 'Barry Prendergast | LinksGhost - Product & Service Designer',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@YourTwitterHandle',
		creator: '@YourTwitterHandle',
		title: 'Barry Prendergast | LinksGhost - Product & Service Designer Links',
		description:
			"Explore Barry Prendergast's curated links to projects, talks, and profiles. Connect with this experienced Product & Service Designer.",
		images: ['https://links.renderg.host/avatar-linksghost-og.jpg'],
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
			<head>
				<GoogleAnalytics gaId='G-ZH7DCE3DV3' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
			</head>

			<body className='bg-blue-25 dark:bg-blue-950 text-blue-950 dark:text-blue-25 transition-colors duration-300'>
				<Banner />
				<Hero />
				{children}
			</body>
		</html>
	);
}
