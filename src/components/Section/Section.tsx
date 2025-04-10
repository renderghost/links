'use client';

import React from 'react';
import type { SectionProps } from './Section.types';
import styles from './Section.module.css';

const Section: React.FC<SectionProps> = ({
	id,
	title,
	description,
	children,
	className = '',
}) => (
	<section id={id} className={`${styles.section} ${className}`}>
		<div className={styles.header}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
		</div>
		{children}
	</section>
);

export default Section;
