import React from 'react';

const Footer: React.FC = () => (
	<footer
		id='footer'
		className='mt-12 text-center text-bones-blue dark:text-bones-white'>
		&copy; {new Date().getFullYear()} Your Name. All rights reserved.
	</footer>
);

export default Footer;
