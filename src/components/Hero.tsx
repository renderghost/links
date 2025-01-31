import React from 'react';
import SocialLinks from './atom/SocialLinks';
import Image from 'next/image';

const Hero: React.FC = () => (
	<section className='flex flex-col py-16 px-4 sm:px-0  bg-white dark:bg-blue-900'>
		<div className='container mx-auto flex flex-col gap-4'>
			<div className='flex flex-row flex-auto gap-4 items-center'>
				<div className='size-16 overflow-hidden rounded-full flex-shrink-0'>
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
					<h2 className='text-2xl font-semibold' itemProp='name'>
						Barry Prendergast
					</h2>
					<div className='flex flex-col sm:flex-row gap-px sm:gap-2'>
						<p itemProp='jobTitle'>Product Designer</p>
						<p className='hidden sm:inline'>|</p>
						<address
							className='flex items-center not-italic gap-1'
							itemProp='address'
							itemScope
							itemType='http://schema.org/PostalAddress'
						>
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
