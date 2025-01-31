import React from 'react';
import SocialLinks from './atom/SocialLinks';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const Hero: React.FC = () => (
	<section className='bg-white dark:bg-blue-900'>
		<div className='container flex flex-col mx-auto py-16 gap-2'>
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
					<div className='text-gray-600 flex flex-row gap-1 items-center'>
						<p className=''>
							<span itemProp='jobTitle'>
								Product & Service Designer
							</span>
						</p>
						<p className='mr-1.5 ml-1.5'>|</p>
						<address
							className='flex items-center gap-px not-italic'
							itemProp='address'
							itemScope
							itemType='http://schema.org/PostalAddress'
						>
							<MapPin
								size={16}
								className='mr-0.5'
								aria-hidden='true'
							/>
							<span itemProp='addressLocality'>Berlin</span>
							<span className='mr-0.5'>,</span>
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
