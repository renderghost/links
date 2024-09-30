'use client';

import React from 'react';
import Header from '../components/Header';
import CallsToAction from '../components/CallsToAction';
import WorkStatus from '../components/WorkStatus';
import Projects from '../components/Projects';
import OtherLinks from '../components/OtherLinks';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
	const isCurrentlyWorking = true;
	return (
		<main className='container mx-auto px-4 py-8'>
			<Header />
			<CallsToAction />
			<WorkStatus isWorking={isCurrentlyWorking} />
			<Projects />
			<OtherLinks />
			<Footer />
		</main>
	);
};

export default HomePage;
