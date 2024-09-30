import { DM_Sans, DM_Serif_Display } from 'next/font/google';

export const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-dm-sans',
});

export const dmSerifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: ['400'],
	style: ['normal', 'italic'],
	variable: '--font-dm-serif-display',
});
