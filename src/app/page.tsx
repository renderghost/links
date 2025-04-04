'use client';

import React from 'react';
import Creations from '@/components/Section/Sections/Creations';
import Projects from '@/components/Section/Sections/Projects';
import Articles from '@/components/Section/Sections/Articles';
// import OtherLinks from '@/components/Section/Sections/OtherLinks';

const HomePage: React.FC = () => {
	return (
		<main className='container mx-auto px-0 py-16 gap-16 flex flex-col'>
			<Creations />
			<Projects />
			<Articles />
			{/* <OtherLinks /> */}
		</main>
	);
};

export default HomePage;
