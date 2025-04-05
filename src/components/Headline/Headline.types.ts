import type React from 'react';

export interface HeadlineProps {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	className?: string;
	children: React.ReactNode;
	itemProp?: string;
}
