'use client';

import React from 'react';
import Header from '@/components/Header';
// import CallsToAction from '@/components/CallsToAction';
// import WorkStatus from '@/components/WorkStatus';
import Projects from '@/components/Projects';
import OtherLinks from '@/components/OtherLinks';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
	const isCurrentlyWorking = true;
	return (
		<main className='container mx-auto px-0 py-16 gap-16 flex flex-col'>
			<Header />
			{/* <CallsToAction /> */}
			<Projects />
			{/* <WorkStatus isWorking={isCurrentlyWorking} /> */}
			<OtherLinks />
			<Footer />
		</main>
	);
};

export default HomePage;
