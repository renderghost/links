'use client';

import React from 'react';

interface SectionProps {
	id: string;
	title: string;
	description: string;
	children: React.ReactNode;
	className?: string;
}

// Section component, reusable for different parts of the page
const Section: React.FC<SectionProps> = ({
	id,
	title,
	description,
	children,
}) => (
	<section id={id} className='flex flex-col px-4 sm:px-0 gap-6'>
		<div className='flex flex-col gap-1'>
			<h2 className='text-2xl font-semibold'>{title}</h2>
			<p className='text-bones-black dark:text-bones-white'>
				{description}
			</p>
		</div>
		{children}
	</section>
);

export default Section;
