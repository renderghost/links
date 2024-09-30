'use client';

import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import { FilledButton, CardButton } from '../components/Button';
import { EnvelopeIcon, PhoneIcon } from '../components/icons';

const HomePage: React.FC = () => {
	return (
		<main className='container mx-auto px-4 py-8'>
			{/* Header Section */}
			<Header />

			{/* Contact Details Section */}
			<Section id='contact-details' title='Contact Details'>
				<div className='space-y-4'>
					<FilledButton
						LeftIcon={EnvelopeIcon}
						onClick={() =>
							(window.location.href =
								'mailto:youremail@example.com')
						}
						aria-label='Email Me'
					>
						Email Me
					</FilledButton>
					<FilledButton
						LeftIcon={PhoneIcon}
						onClick={() =>
							(window.location.href = 'tel:+1234567890')
						}
						aria-label='Call Me'
					>
						Call Me
					</FilledButton>
				</div>
			</Section>

			{/* Projects Section */}
			<Section id='my-projects' title='My Projects'>
				<div className='space-y-4'>
					<CardButton
						onClick={() =>
							window.open('https://project-one-url.com', '_blank')
						}
						aria-label='Project One'
					>
						<h3 className='text-xl font-bold'>Project One</h3>
						<p className='text-slate-700 dark:text-slate-300'>
							Description of project one.
						</p>
					</CardButton>
					{/* Add more CardButtons for other projects */}
				</div>
			</Section>

			{/* Other Links Section */}
			<Section id='other-links' title='Other Links'>
				<div className='space-y-4'>
					<FilledButton
						onClick={() =>
							window.open('https://yourblog.com', '_blank')
						}
						aria-label='Visit My Blog'
					>
						Visit My Blog
					</FilledButton>
					{/* Add more FilledButtons for other links */}
				</div>
			</Section>

			{/* Footer */}
			<footer
				id='footer'
				className='mt-12 text-center text-slate-700 dark:text-slate-300'
			>
				&copy; {new Date().getFullYear()} Your Name. All rights
				reserved.
			</footer>
		</main>
	);
};

export default HomePage;
