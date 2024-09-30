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
	{ id, children }, //Add 'title' to ({ id, title, children }) to restore
) => (
	<section id={id} className=''>
		{/* <h2 className='text-3xl font-medium text-brand-900 dark:text-neutral-100 mb-6'>
			{title}
		</h2> */}
		{children}
	</section>
);

export default Section;
