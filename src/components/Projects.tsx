'use client';

import React from 'react';
import { CardButton } from './Button';
import Section from './Section';

const projectsList = [
	{
		title: 'AI-Powered Analytics Dashboard',
		description:
			'A real-time analytics platform using machine learning algorithms.',
		url: 'https://ai-analytics-dashboard.com',
	},
	{
		title: 'Eco-Friendly Smart Home System',
		description: 'IoT-based home automation focused on energy efficiency.',
		url: 'https://eco-smart-home.com',
	},
	{
		title: 'Blockchain Voting Application',
		description:
			'Secure and transparent voting system using blockchain technology.',
		url: 'https://blockchain-voting-app.com',
	},
	{
		title: 'AR-Enhanced Learning Platform',
		description:
			'Educational app integrating augmented reality for interactive learning.',
		url: 'https://ar-learning-platform.com',
	},
	{
		title: 'Quantum Computing Simulator',
		description:
			'Web-based quantum circuit designer and simulator for researchers.',
		url: 'https://quantum-simulator.com',
	},
	{
		title: 'Sustainable Supply Chain Tracker',
		description:
			'Blockchain-based system for tracking ethical and sustainable product sourcing.',
		url: 'https://sustainable-supply-chain.com',
	},
];

const Projects: React.FC = () => (
	<Section id='my-projects' title='My Projects'>
		<div className='flex flex-wrap -m-2'>
			{projectsList.map((project, index) => (
				<div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
					<CardButton
						onClick={() => window.open(project.url, '_blank')}
						aria-label={project.title}
						className='h-full'
					>
						<h3 className='text-xl font-bold mb-2'>
							{project.title}
						</h3>
						<p className='text-slate-700 dark:text-slate-300'>
							{project.description}
						</p>
					</CardButton>
				</div>
			))}
		</div>
	</Section>
);

export default Projects;
