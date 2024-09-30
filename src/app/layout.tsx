import './globals.css';
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
		<html lang='en' className='dark'>
			<body className='bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100'>
				{children}
			</body>
		</html>
	);
}
