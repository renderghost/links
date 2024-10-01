import './globals.css';
// import { dmSans, dmSerifDisplay } from '@/utils/fonts';

import { Metadata } from 'next';
import Banner from '@/components/atom/Banner';

export const metadata: Metadata = {
	title: 'My Profile',
	description: 'Welcome to my profile page.',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.yourwebsite.com/',
		siteName: 'My Profile',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='bg-brand-50 dark:bg-brand-950 text-brand-950 dark:text-neutral-100'>
				<Banner />
				{children}
			</body>
		</html>
	);
}
