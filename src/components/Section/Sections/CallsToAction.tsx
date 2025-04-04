'use client';

import React from 'react';
import FilledButton from '../../Button/Button';
import Headline from '../../Headline/Headline';
import {
	CalendarPlus,
	// Cable,
	LucideIcon,
	BookmarkCheck,
	UsersRound,
	MessageSquareDot,
} from 'lucide-react';

interface CallToAction {
	title: string;
	icon: LucideIcon;
	onClick: () => void;
	ariaLabel: string;
}

const callsToActionList: CallToAction[] = [
	{
		title: 'Say Hello',
		icon: MessageSquareDot,
		onClick: () => (window.location.href = 'mailto:contact@example.com'),
		ariaLabel: 'Say Hello',
	},
	{
		title: 'Schedule a Call',
		icon: CalendarPlus,
		onClick: () =>
			window.open('https://calendly.com/barry-prendergast', '_blank'),
		ariaLabel: 'Schedule a Call',
	},
	{
		title: 'Read on Medium',
		icon: BookmarkCheck,
		onClick: () =>
			window.open('https://medium.com/@render_ghost', '_blank'),
		ariaLabel: 'Read on Medium',
	},
	{
		title: 'Connect on LinkedIn',
		icon: UsersRound,
		onClick: () =>
			window.open(
				'https://www.linkedin.com/in/barrymprendergast',
				'_blank',
			),
		ariaLabel: 'Connect on LinkedIn',
	},
	// {
	// 	title: 'Download Whitepaper',
	// 	icon: FileText,
	// 	onClick: () => window.open('/whitepaper.pdf', '_blank'),
	// 	ariaLabel: 'Download Whitepaper',
	// },
	// {
	// 	title: 'Access Resources',
	// 	icon: Download,
	// 	onClick: () => window.open('/resources', '_blank'),
	// 	ariaLabel: 'Access Resources',
	// },
	// {
	// 	title: 'Join Our Community',
	// 	icon: Users,
	// 	onClick: () => window.open('/join-community', '_blank'),
	// 	ariaLabel: 'Join Our Community',
	// },
];

const CallToActionButton: React.FC<CallToAction & { isPrimary: boolean }> =
	React.memo(({ title, icon: Icon, onClick, ariaLabel, isPrimary }) => (
		<FilledButton
			variant={isPrimary ? 'primary' : 'secondary'}
			LeftIcon={Icon}
			onClick={onClick}
			aria-label={ariaLabel}>
			{title}
		</FilledButton>
	));

CallToActionButton.displayName = 'CallToActionButton';

const CallsToAction: React.FC = () => (
	<div className='flex flex-col items-start gap-16 overflow-hidden'>
		{/* <div className='text-lg font-normal items-center gap-2 flex'>
			<Cable size={16} />
			<span>All my key links and details</span>
		</div> */}

		<Headline />

		<div className='flex flex-col items-start gap-4'>
			{/* <h2 className='text-lg font-semibold text-bones-black dark:text-bones-white'>
					How can I help?
				</h2> */}
			<div className='flex flex-wrap gap-4'>
				{callsToActionList.map((cta, index) => (
					<CallToActionButton
						key={cta.title}
						{...cta}
						isPrimary={index === 0}
					/>
				))}
			</div>
		</div>
	</div>
);

export default CallsToAction;
