'use client';

import React from 'react';
import { FilledButton } from './Button';
import Section from './Section';
import { Mail, Phone, Calendar, FileText, Download, Users } from 'lucide-react';

const CallsToAction: React.FC = () => (
	<Section id='calls-to-action' title='How can I help?'>
		<div className='flex flex-wrap gap-2'>
			<FilledButton
				variant='primary'
				LeftIcon={Mail}
				onClick={() =>
					(window.location.href = 'mailto:contact@example.com')
				}
				aria-label='Contact Us'
			>
				Contact Us
			</FilledButton>

			<FilledButton
				variant='secondary'
				LeftIcon={Phone}
				onClick={() => (window.location.href = 'tel:+1234567890')}
				aria-label='Schedule a Call'
			>
				Schedule a Call
			</FilledButton>

			<FilledButton
				variant='secondary'
				LeftIcon={Calendar}
				onClick={() =>
					window.open('https://calendly.com/example', '_blank')
				}
				aria-label='Book a Demo'
			>
				Book a Demo
			</FilledButton>

			<FilledButton
				variant='secondary'
				LeftIcon={FileText}
				onClick={() => window.open('/whitepaper.pdf', '_blank')}
				aria-label='Download Whitepaper'
			>
				Download Whitepaper
			</FilledButton>

			<FilledButton
				variant='secondary'
				LeftIcon={Download}
				onClick={() => window.open('/resources', '_blank')}
				aria-label='Access Resources'
			>
				Access Resources
			</FilledButton>

			<FilledButton
				variant='secondary'
				LeftIcon={Users}
				onClick={() => window.open('/join-community', '_blank')}
				aria-label='Join Our Community'
			>
				Join Our Community
			</FilledButton>
		</div>
	</Section>
);

export default CallsToAction;
