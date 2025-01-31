'use client';

import React from 'react';
import Projects from '@/components/sections/Projects';
import Articles from '@/components/sections/Articles';
import Creations from '@/components/sections/Creations';
import OtherLinks from '@/components/sections/OtherLinks';
// import CallsToAction from '@/components/sections/CallsToAction';
// import WorkStatus from '@/components/sections/WorkStatus';

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
