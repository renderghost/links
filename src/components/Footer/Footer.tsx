'use client';

import React from 'react';
import type { FooterProps } from './Footer.types';
import { footerWrapper } from './Footer.styles';

const Footer: React.FC<FooterProps> = () => (
	<footer id='footer' className={footerWrapper}>
		&copy; {new Date().getFullYear()} Your Name. All rights reserved.
	</footer>
);

export default Footer;
