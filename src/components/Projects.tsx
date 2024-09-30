'use client';

import React from 'react';
import { FilledButton } from './atom/Button';
import Section from './atom/Section';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
	title: string;
	description: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	sourceUrl?: string;
}

const projectsList: Project[] = [
	{
		title: 'AI-Powered Analytics Dashboard',
		description:
			'A real-time analytics platform using machine learning algorithms.',
		icon: ExternalLink,
		url: 'https://ai-analytics-dashboard.com',
		sourceUrl: 'https://github.com/yourusername/ai-analytics-dashboard',
	},
	{
		title: 'Eco-Friendly Smart Home System',
		description: 'IoT-based home automation focused on energy efficiency.',
		icon: ExternalLink,
		url: 'https://eco-smart-home.com',
	},
	{
		title: 'Blockchain Voting Application',
		description:
			'Secure and transparent voting system using blockchain technology.',
		icon: ExternalLink,
		url: 'https://blockchain-voting-app.com',
		sourceUrl: 'https://github.com/yourusername/blockchain-voting',
	},
	{
		title: 'AR-Enhanced Learning Platform',
		description:
			'Educational app integrating augmented reality for interactive learning.',
		icon: ExternalLink,
		url: 'https://ar-learning-platform.com',
	},
	{
		title: 'Quantum Computing Simulator',
		description:
			'Web-based quantum circuit designer and simulator for researchers.',
		icon: ExternalLink,
		url: 'https://quantum-simulator.com',
		sourceUrl: 'https://github.com/yourusername/quantum-simulator',
	},
	{
		title: 'Sustainable Supply Chain Tracker',
		description:
			'Blockchain-based system for tracking ethical and sustainable product sourcing.',
		icon: ExternalLink,
		url: 'https://sustainable-supply-chain.com',
	},
];

const ProjectCard: React.FC<Project> = ({
	title,
	description,
	icon: Icon,
	url,
	sourceUrl,
}) => (
	<div className='bg-white dark:bg-slate-800 overflow-hidden p-8 flex flex-col justify-between gap-4'>
		<div className='flex flex-col gap-2'>
			<div className='flex items-center gap-1'>
				<Icon className='w-5 h-5 mr-2 text-slate-600 dark:text-slate-300' />
				<h3 className='font-bold text-slate-900 dark:text-white'>
					{title}
				</h3>
			</div>
			<p className='text-slate-600 dark:text-slate-300'>{description}</p>
		</div>
		<div className='flex flex-wrap gap-3'>
			<FilledButton
				variant='primary'
				LeftIcon={ExternalLink}
				onClick={() => window.open(url, '_blank')}
				aria-label={`View ${title} project`}
			>
				View Project
			</FilledButton>
			{sourceUrl && (
				<FilledButton
					variant='secondary'
					LeftIcon={Github}
					onClick={() => window.open(sourceUrl, '_blank')}
					aria-label={`View source code for ${title}`}
				>
					View Source
				</FilledButton>
			)}
		</div>
	</div>
);

const Projects: React.FC = () => (
	<Section id='my-projects' title='Recent Projects'>
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px'>
			{projectsList.map((project, index) => (
				<ProjectCard key={index} {...project} />
			))}
		</div>
	</Section>
);

export default Projects;
