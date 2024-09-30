'use client';

import React from 'react';

interface SectionProps {
	id: string;
	title: string;
	children: React.ReactNode;
	className?: string;
}

// Section component, reusable for different parts of the page
const Section: React.FC<SectionProps> = ({ id, title, children }) => (
	<section id={id} className='mt-12'>
		<h2 className='text-3xl font-semibold text-slate-900 dark:text-white mb-6'>
			{title}
		</h2>
		{children}
	</section>
);

export default Section;
