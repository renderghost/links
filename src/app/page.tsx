'use client';

import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Articles from '@/components/Articles';
import Creations from '@/components/Creations';
import OtherLinks from '@/components/OtherLinks';

const HomePage: React.FC = () => {
	return (
		<main className='container mx-auto px-0 py-16 gap-16 flex flex-col'>
			<Header />
			<Projects />
			<Articles />
			<Creations />
			<OtherLinks />
		</main>
	);
};

export default HomePage;
