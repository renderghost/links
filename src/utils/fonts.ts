import { DM_Sans, DM_Serif_Display, DM_Mono } from 'next/font/google';

export const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: [
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'1000',
	],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-dm-sans',
});

export const dmSerifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
	style: 'normal',
	display: 'swap',
	variable: '--font-dm-serif',
});

export const dmMono = DM_Mono({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	style: 'normal',
	display: 'swap',
	variable: '--font-dm-mono',
});
