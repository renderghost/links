'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { FilledButton } from '../Button/Button';
import type { CardProps } from './Card.types';
import {
	cardBase,
	cardHeader,
	cardTitleRow,
	cardTitle,
	cardDescription,
	cardActions,
} from './Card.styles';

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
			className={`${cardBase} ${className}`}
			itemScope
			itemType={`http://schema.org/${schemaType}`}>
			<div className={cardHeader}>
				<div className={cardTitleRow}>
					<Icon className='w-7 h-7' />
					<h3 className={cardTitle} itemProp='name'>
						{title}
					</h3>
				</div>
				<p className={cardDescription} itemProp='description'>
					{description}
				</p>
			</div>

			{(url || sourceUrl) && (
				<div className={cardActions}>
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
							RightIcon={Github}
							onClick={() => window.open(sourceUrl, '_blank')}
							ariaLabel={`View source code for ${title}`}
							tooltip={`View source code for ${title}`}>
							View Source
						</FilledButton>
					)}
				</div>
			)}

			{url && <link itemProp='url' href={url} />}
			{sourceUrl && <link itemProp='codeRepository' href={sourceUrl} />}
		</div>
	);
};

export default Card;
