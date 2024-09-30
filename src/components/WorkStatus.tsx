'use client';

import { FilledButton } from './Button';
import Image from 'next/image';
import { Briefcase, Linkedin, FileText } from 'lucide-react';
import Section from './Section';

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
			<div className='bg-white dark:bg-slate-800 rounded-lg overflow-hidden'>
				{isWorking ? (
					<>
						<div className='flex flex-col sm:flex-row items-start sm:items-center pl-8 pt-8 pr-8 pb-0'>
							<div className='w-16 h-16 sm:mr-4 relative flex-shrink-0'>
								<Image
									src='/public/logo-work.jpeg'
									alt='Morressier logo'
									fill
									style={{ objectFit: 'contain' }}
								/>
							</div>
							<div>
								<h3 className='text-xl font-bold text-slate-900 dark:text-white'>
									Morressier
								</h3>
								<p className='text-slate-600 dark:text-slate-300'>
									Staff Product Designer
								</p>
								<p className='text-slate-600 dark:text-slate-300'>
									Berlin, Germany [2019]
								</p>
							</div>
						</div>

						<p className='pl-8 pt-4 pr-8 pb-0'>
							Leading product design for Morressier&apos;s
							scholarly publishing platform. Balancing strategic
							vision with hands-on execution, I drive innovation
							in research dissemination through user-centered
							design. Key focus: streamlining complex academic
							workflows and fostering team growth.
						</p>

						<div className='flex flex-wrap p-8 space-x-2'>
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
