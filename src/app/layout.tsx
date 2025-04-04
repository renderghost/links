import './globals.css';
// import { dmSans, dmSerifDisplay } from '@/utils/fonts';

import { Metadata } from 'next';
import Script from 'next/script';
import Banner from '@/components/Banner/Banner';
import Hero from '@/components/Hero/Hero';

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
		title: 'LinksGhost - Link in Bio for Barry Prendergast, Designer, Berlin, Germany',
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
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-MEJT73VLVW'
					strategy='afterInteractive'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEJT73VLVW');
          `}
				</Script>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
			</head>

			<body className='transition-colors duration-300 bg-bones-ghostwhite dark:bg-bones-black text-bones-black dark:text-bones-white'>
				<Banner />
				<Hero />
				{children}
			</body>
		</html>
	);
}
