'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import FilledButton from '../Button/Button';
import type { CardProps } from './Card.types';
import styles from './Card.module.css';

// --- Actions helper ---
const renderActions = (title: string, url?: string, sourceUrl?: string) => {
	if (!url && !sourceUrl) return null;

	return (
		<div className={styles.actions}>
			{url && (
				<FilledButton
					variant='secondary'
					RightIcon={ExternalLink}
					onClick={() => window.open(url, '_blank')}
					ariaLabel={`View ${title}`}
					tooltip={`View ${title}`}>
					View
				</FilledButton>
			)}
			{sourceUrl && (
				<FilledButton
					variant='transparent'
					LeftIcon={Github}
					onClick={() => window.open(sourceUrl, '_blank')}
					ariaLabel={`View source code for ${title}`}
					tooltip={`View source code for ${title}`}>
					View Source
				</FilledButton>
			)}
		</div>
	);
};

// --- Schema helper ---
const renderSchemaMeta = (url?: string, sourceUrl?: string) => (
	<>
		{url && <link itemProp='url' href={url} />}
		{sourceUrl && <link itemProp='codeRepository' href={sourceUrl} />}
	</>
);

const Card: React.FC<CardProps> = ({
	title,
	description,
	icon: Icon,
	url,
	sourceUrl,
	schemaType = 'CreativeWork',
	className = '',
}) => {
	return (
		<div
			className={`${styles.card} ${className}`}
			itemScope
			itemType={`http://schema.org/${schemaType}`}>
			<div className={styles.header}>
				<div className={styles.titleRow}>
					<Icon className='w-7 h-7' />
					<h3 className={styles.title} itemProp='name'>
						{title}
					</h3>
				</div>
				<p className={styles.description} itemProp='description'>
					{description}
				</p>
			</div>

			{renderActions(title, url, sourceUrl)}
			{renderSchemaMeta(url, sourceUrl)}
		</div>
	);
};

export default Card;
