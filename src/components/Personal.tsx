'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Personal: React.FC = () => {
	return (
		<div className='flex items-start pl-8 pt-8 pr-8 pb-0'>
			<p className='mb-2 text-gray-600 font-medium tracking-wide text-center lg:text-left uppercase'>
				OVERLINE HERE
			</p>
			<div className='mb-4 lg:mb-8 lg:gap-y-0 lg:flex-row lg:justify-between justify-center items-center flex flex-col gap-x-0 gap-y-6 max-md:max-w-lg max-md:mx-auto'>
				<div className='w-full text-center lg:text-left lg:w-2/4'>
					<div className='w-8 h-8 rounded-2xl overflow-hidden'>
						<Image
							src='/logo-work.jpeg' // Replace with your actual profile image path
							alt='Barry Prendergast'
							width={32}
							height={32}
							className='object-cover'
						/>
					</div>
					<p className='text-4xl lg:text-6xl lg:mb-6 lg:max-w-2xl lg:mx-0 font-bold tracking-tight leading-[3.25rem] mx-auto max-w-max'>
						Barry Prendergast
					</p>
				</div>
				<div className='w-full text-center lg:text-left lg:w-2/4'>
					<p className='text-lg font-normal text-gray-600 mb-5'>
						<span>
							Product & Service Designer &sdot; Berlin, Germany
						</span>
						<MapPin size={16} />
					</p>
					<SocialLinks />
				</div>
			</div>
		</div>
	);
};

export default Personal;
