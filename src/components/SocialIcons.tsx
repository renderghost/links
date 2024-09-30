'use client';

// Define the `Link` interface
import { IconType } from 'react-icons';

interface Link {
	title: string;
	url: string;
	icon: IconType;
}

// Define the props with `links` having the type `Link[]`
interface SocialIconsProps {
	links: Link[];
}

export default function SocialIcons({ links }: SocialIconsProps) {
	if (!links.length) return null;

	return (
		<div className='flex justify-center mb-6 space-x-4'>
			{links.map((link: Link) => (
				<a
					key={link.title}
					href={link.url}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={link.title} // Accessibility
					className='flex items-center justify-center px-4 py-3 text-lg font-medium text-slate-900 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition'
				>
					<link.icon className='w-6 h-6' /> {/* Use link.icon */}
				</a>
			))}
		</div>
	);
}
