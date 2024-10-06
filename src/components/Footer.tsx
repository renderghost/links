import React from 'react';

const Footer: React.FC = () => (
	<footer
		id='footer'
		className='mt-12 text-center text-blue-700 dark:text-blue-300'
	>
		&copy; {new Date().getFullYear()} Your Name. All rights reserved.
	</footer>
);

export default Footer;
