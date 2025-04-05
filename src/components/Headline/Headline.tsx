'use client';

import React from 'react';
import type { HeadlineProps } from './Headline.types';
import { headlineText } from './Headline.styles';

const Headline: React.FC<HeadlineProps> = ({
	level,
	children,
	className = '',
	itemProp,
}) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements;

	return (
		<Tag className={`${headlineText} ${className}`} itemProp={itemProp}>
			{children}
		</Tag>
	);
};

export default Headline;
