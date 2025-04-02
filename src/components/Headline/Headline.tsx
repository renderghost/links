'use client';

import React from 'react';
import type { HeadlineProps } from './Headline.types';
import { headlineText } from './Headline.styles';

const Headline: React.FC<HeadlineProps> = () => {
	return (
		<p className={headlineText}>
			I help shape winning design strategies and user experiences for
			early-stage startups.
		</p>
	);
};

export default Headline;
