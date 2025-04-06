import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import Banner from '@/components/Banner/Banner';
import Hero from '@/components/Hero/Hero';

import { dmSans, dmSerifDisplay, dmMono } from '@/utils/fonts';

export const metadata: Metadata = {
	// same as before...
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${dmSans.variable} ${dmSerifDisplay.variable} ${dmMono.variable}`}>
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
