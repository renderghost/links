'use client';

import React from 'react';
import Creations from '@/components/sections/Creations';
import Projects from '@/components/sections/Projects';
import Articles from '@/components/Section/Articles';
import OtherLinks from '@/components/sections/OtherLinks';

const HomePage: React.FC = () => {
	return (
		<main className='container mx-auto px-0 py-16 gap-16 flex flex-col'>
			<Creations />
			<Projects />
			<Articles />
			<OtherLinks />
		</main>
	);
};

export default HomePage;
