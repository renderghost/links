'use client';

import React from 'react';

interface SectionProps {
	id: string;
	title: string;
	children: React.ReactNode;
	className?: string;
}

// Section component, reusable for different parts of the page
const Section: React.FC<SectionProps> = (
	{ id, title, children }, //Add 'title' to ({ id, title, children }) to restore
) => (
	<section id={id} className='flex flex-col gap-4'>
		<h2 className='text-3xl font-semibold text-brand-950 dark:text-neutral-100'>
			{title}
		</h2>
		{children}
	</section>
);

export default Section;
