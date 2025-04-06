'use client';

import React from 'react';
import Image from 'next/image';
import SocialLinks from '../SocialLinks/SocialLinks';
import Headline from '../Headline/Headline';
import type { HeroProps } from './Hero.types';
import styles from './Hero.module.css';

const Hero: React.FC<HeroProps> = () => (
	<section className={styles.heroSection} id='hero'>
		<div className={styles.heroContainer}>
			<div className={'flex flex-col gap-32'}>
				<div className={styles.heroHeader}>
					<div className={styles.heroAvatar}>
						<Image
							src='/avatar-me.jpg'
							alt='Barry Prendergast'
							width={64}
							height={64}
							className='object-cover'
							itemProp='image'
						/>
					</div>
					<div className='flex flex-col flex-auto'>
						<p className={styles.heroName} itemProp='name'>
							Barry Prendergast
						</p>
						<p className={styles.heroDetails} itemProp='jobTitle'>
							<span>Design Leader</span> <span>|</span>{' '}
							<span>Product Designer</span> <span>|</span>{' '}
							<span>DesignOps</span>
						</p>
						{/* <address
							className={heroAddress}
							itemProp='address'
							itemScope
							itemType='http://schema.org/PostalAddress'>
							<span itemProp='addressLocality'>Berlin</span>,{' '}
							<span itemProp='addressCountry'>Germany</span>
						</address> */}
					</div>
				</div>

				<Headline level={1} className={styles.heroHeadline}>
					Good things I&apos;ve made, for you to click on.
				</Headline>

				<SocialLinks />
			</div>
		</div>
	</section>
);

export default Hero;
