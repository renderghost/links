'use client';

import { FilledButton } from './atom/Button';
import Image from 'next/image';
import {
	Briefcase,
	Linkedin,
	FileText,
	Sparkles,
	BookOpenCheck,
	GalleryHorizontalEnd,
	Cable,
} from 'lucide-react';
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
			<div className='bg-brand-white dark:bg-brand-800 overflow-hidden flex flex-col gap-8 p-16'>
				{isWorking ? (
					<>
						<div className='text-lg font-normal items-center gap-1 flex'>
							<span>All my key links and details</span>
							<Cable size={16} />
						</div>
						<div className='flex gap-4'>
							<div className='w-16 h-16 relative flex-shrink-0'>
								<Image
									src='/avatar-work.svg'
									alt='Morressier logo'
									fill
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div>
								<h3 className='text-xl font-semibold'>
									Staff Product Designer
								</h3>
								<p className=''>
									Morressier, Berlin since 2019
								</p>
							</div>
						</div>

						<p className='max-w-screen-lg'>
							Leading product design for Morressier&apos;s
							scholarly publishing platform. Balancing strategic
							vision with hands-on execution, I drive innovation
							in research dissemination through user-centered
							design. Key focus: streamlining complex academic
							workflows and fostering team growth.
						</p>

						<div className='flex flex-wrap gap-3'>
							<FilledButton
								variant='primary'
								LeftIcon={BookOpenCheck}
								onClick={() =>
									window.open(
										'https://www.morressier.com/products/journal-manager',
										'_blank',
									)
								}
								aria-label='Learn about Journal Manager'
							>
								Learn about Journal Manager
							</FilledButton>
							<FilledButton
								variant='secondary'
								LeftIcon={Sparkles}
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
								LeftIcon={GalleryHorizontalEnd}
								onClick={() =>
									window.open(
										'https://www.linkedin.com/in/barrymprendergast',
										'_blank',
									)
								}
								aria-label='View my Resume'
							>
								View my Resume
							</FilledButton>
						</div>
					</>
				) : (
					<>
						<p className='text-brand-700 dark:text-brand-300 mb-6 p-6'>
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
								aria-label='Learn about Journal Manager'
							>
								Learn about Journal Manager
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
