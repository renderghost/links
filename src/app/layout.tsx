import './globals.css';
// import { dmSans, dmSerifDisplay } from '@/utils/fonts';

import { Metadata } from 'next';

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
			<body className='bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-white'>
				{children}
			</body>
		</html>
	);
}
