'use client';

import React from 'react';
import { FilledButton } from '../../Button/Button';
import Image from 'next/image';
import {
	Briefcase,
	Linkedin,
	FileText,
	Sparkles,
	BookOpenCheck,
	GalleryHorizontalEnd,
} from 'lucide-react';
import type { StatusProps } from './Status.types';
import {
	statusWrapper,
	avatarWrapper,
	jobTitle,
	seekingMessage,
	buttonGroup,
	buttonGroupSeeking,
	paragraph,
} from './Status.styles';

const Status: React.FC<StatusProps> = ({ isWorking }) => {
	return (
		<div className={statusWrapper}>
			{isWorking ? (
				<>
					<div className='flex gap-4'>
						<div className={avatarWrapper}>
							<Image
								src='/avatar-work.svg'
								alt='Morressier logo'
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<div>
							<h3 className={jobTitle}>Staff Product Designer</h3>
							<p>Morressier, Berlin since 2019</p>
						</div>
					</div>

					<p className={paragraph}>
						Leading product design for Morressier&apos;s scholarly
						publishing platform. Balancing strategic vision with
						hands-on execution, I drive innovation in research
						dissemination through user-centered design. Key focus:
						streamlining complex academic workflows and fostering
						team growth.
					</p>

					<div className={buttonGroup}>
						<FilledButton
							variant='primary'
							LeftIcon={BookOpenCheck}
							onClick={() =>
								window.open(
									'https://www.morressier.com/products/journal-manager',
									'_blank',
								)
							}
							aria-label='Learn about Journal Manager'>
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
							aria-label='Learn about Morressier'>
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
							aria-label='View my Resume'>
							View my Resume
						</FilledButton>
					</div>
				</>
			) : (
				<>
					<p className={seekingMessage}>
						I&apos;m actively seeking new opportunities in product
						design and strategy. Let&apos;s connect!
					</p>
					<div className={buttonGroupSeeking}>
						<FilledButton
							variant='primary'
							LeftIcon={Briefcase}
							onClick={() => window.open('/portfolio', '_blank')}
							aria-label='View Portfolio'>
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
							aria-label='Learn about Journal Manager'>
							Learn about Journal Manager
						</FilledButton>
						<FilledButton
							variant='secondary'
							LeftIcon={FileText}
							onClick={() => window.open('/cv.pdf', '_blank')}
							aria-label='Download CV'>
							Download CV
						</FilledButton>
					</div>
				</>
			)}
		</div>
	);
};

export default Status;
