'use client';

import React from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import OtherLinks from '@/components/OtherLinks';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
	return (
		<main className='container mx-auto px-0 py-16 gap-16 flex flex-col'>
			<Header />
			<Projects />
			<OtherLinks />
			<Footer />
		</main>
	);
};

export default HomePage;
