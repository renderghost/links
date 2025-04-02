'use client';

import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import Image from 'next/image';
import type { HeroProps } from './Hero.types';
import {
	heroSection,
	heroContainer,
	heroHeader,
	heroAvatar,
	heroName,
	heroDetails,
	heroAddress,
} from './Hero.styles';

const Hero: React.FC<HeroProps> = () => (
	<section className={heroSection}>
		<div className={heroContainer}>
			<div className={heroHeader}>
				<div className={heroAvatar}>
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
					<h2 className={heroName} itemProp='name'>
						Barry Prendergast
					</h2>
					<div className={heroDetails}>
						<p itemProp='jobTitle'>Product Designer</p>
						<p className='hidden sm:inline'>|</p>
						<address
							className={heroAddress}
							itemProp='address'
							itemScope
							itemType='http://schema.org/PostalAddress'>
							<span itemProp='addressLocality'>Berlin</span>
							<span>,</span>
							<span itemProp='addressCountry'>Germany</span>
						</address>
					</div>
				</div>
			</div>
			<SocialLinks />
		</div>
	</section>
);

export default Hero;
