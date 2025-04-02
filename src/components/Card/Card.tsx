'use client';

import React from 'react';
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
	actions,
	schemaType = 'CreativeWork',
	url,
	sourceUrl,
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
			{actions && <div className={cardActions}>{actions}</div>}
			{url && <link itemProp='url' href={url} />}
			{sourceUrl && <link itemProp='codeRepository' href={sourceUrl} />}
		</div>
	);
};

export default Card;
