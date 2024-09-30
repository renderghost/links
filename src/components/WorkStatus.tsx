'use client';

import { FilledButton } from './atom/Button';
import Image from 'next/image';
import { Briefcase, Linkedin, FileText } from 'lucide-react';
import Section from './atom/Section';

interface WorkStatusProps {
	isWorking: boolean;
	className?: string;
}

const WorkStatus: React.FC<WorkStatusProps> = ({
	isWorking,
	className = '',
}) => {
	return (
		<Section
			id='work-status'
			className={className}
			title={isWorking ? 'Current Role' : 'Work Status'}
		>
			<div className='bg-white dark:bg-slate-800 overflow-hidden'>
				{isWorking ? (
					<>
						<div className='flex flex-col sm:flex-row items-start sm:items-center pl-16 pt-16 pr-16 pb-0'>
							<div className='w-16 h-16 sm:mr-4 relative flex-shrink-0'>
								<Image
									src='/logo-work.jpeg'
									alt='Morressier logo'
									fill
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div>
								<h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
									Staff Product Designer
								</h3>
								<p className='text-slate-600 dark:text-slate-300'>
									Morressier, Berlin since 2019
								</p>
							</div>
						</div>

						<p className='pl-16 pt-8 pr-16 pb-0 max-w-screen-lg'>
							Leading product design for Morressier&apos;s
							scholarly publishing platform. Balancing strategic
							vision with hands-on execution, I drive innovation
							in research dissemination through user-centered
							design. Key focus: streamlining complex academic
							workflows and fostering team growth.
						</p>

						<div className='flex flex-wrap pl-16 pt-12 pr-16 pb-16 gap-3'>
							<FilledButton
								variant='primary'
								LeftIcon={Briefcase}
								onClick={() =>
									window.open(
										'https://www.morressier.com',
										'_blank',
									)
								}
								aria-label='Learn about Morressier'
							>
								Learn about Morressier
							</FilledButton>
							<FilledButton
								variant='secondary'
								LeftIcon={Linkedin}
								onClick={() =>
									window.open(
										'https://www.linkedin.com/company/morressier',
										'_blank',
									)
								}
								aria-label='View my LinkedIn'
							>
								View my LinkedIn
							</FilledButton>
						</div>
					</>
				) : (
					<>
						<p className='text-slate-700 dark:text-slate-300 mb-6 p-6'>
							I&apos;m actively seeking new opportunities in
							product design and strategy. Let&apos;s connect!
						</p>
						<div className='flex flex-wrap p-8 space-x-2'>
							<FilledButton
								variant='primary'
								LeftIcon={Briefcase}
								onClick={() =>
									window.open('/portfolio', '_blank')
								}
								aria-label='View Portfolio'
							>
								View Portfolio
							</FilledButton>
							<FilledButton
								variant='secondary'
								LeftIcon={Linkedin}
								onClick={() =>
									window.open(
										'https://www.linkedin.com/in/yourprofile',
										'_blank',
									)
								}
								aria-label='View my LinkedIn'
							>
								View my LinkedIn
							</FilledButton>
							<FilledButton
								variant='secondary'
								LeftIcon={FileText}
								onClick={() => window.open('/cv.pdf', '_blank')}
								aria-label='Download CV'
							>
								Download CV
							</FilledButton>
						</div>
					</>
				)}
			</div>
		</Section>
	);
};

export default WorkStatus;
