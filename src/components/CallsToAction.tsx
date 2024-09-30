'use client';

import React from 'react';
import { FilledButton } from './Button';
import Section from './Section';
import { Mail, Phone, Calendar, FileText, Download, Users } from 'lucide-react';

const CallsToAction: React.FC = () => (
	<Section id='calls-to-action' title='How can I help?'>
		<div className='flex flex-wrap'>
			<div className='p-1.5'>
				<FilledButton
					LeftIcon={Mail}
					onClick={() =>
						(window.location.href = 'mailto:contact@example.com')
					}
					aria-label='Contact Us'
				>
					Contact Us
				</FilledButton>
			</div>
			<div className='p-1.5'>
				<FilledButton
					LeftIcon={Phone}
					onClick={() => (window.location.href = 'tel:+1234567890')}
					aria-label='Schedule a Call'
				>
					Schedule a Call
				</FilledButton>
			</div>
			<div className='p-1.5'>
				<FilledButton
					LeftIcon={Calendar}
					onClick={() =>
						window.open('https://calendly.com/example', '_blank')
					}
					aria-label='Book a Demo'
				>
					Book a Demo
				</FilledButton>
			</div>
			<div className='p-1.5'>
				<FilledButton
					LeftIcon={FileText}
					onClick={() => window.open('/whitepaper.pdf', '_blank')}
					aria-label='Download Whitepaper'
				>
					Download Whitepaper
				</FilledButton>
			</div>
			<div className='p-1.5'>
				<FilledButton
					LeftIcon={Download}
					onClick={() => window.open('/resources', '_blank')}
					aria-label='Access Resources'
				>
					Access Resources
				</FilledButton>
			</div>
			<div className='p-1.5'>
				<FilledButton
					LeftIcon={Users}
					onClick={() => window.open('/join-community', '_blank')}
					aria-label='Join Our Community'
				>
					Join Our Community
				</FilledButton>
			</div>
		</div>
	</Section>
);

export default CallsToAction;
