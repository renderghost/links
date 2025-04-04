// Rack.tsx
'use client';

import React from 'react';
import type { RackProps } from './CardRack.types';
import type { CardProps } from '../Card/Card.types';
import styles from './CardRack.styles';
import Card from '../Card/Card';

const Rack: React.FC<RackProps> = ({ items, className = '' }) => (
	<div className={`${styles.Rack} ${className}`}>
		{items.map((item: CardProps, index: number) => (
			<Card key={index} {...item} />
		))}
	</div>
);

export default Rack;
