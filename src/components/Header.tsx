import React from 'react';
import SocialLinks from './atom/SocialLinks';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const Header: React.FC = () => (
	<header
		className='flex flex-col md:flex-row items-center gap-8'
		id='header'
	>
		{/* First Column */}
		<div className='flex flex-row flex-auto gap-4 items-center'>
			<div className='size-16 overflow-hidden rounded-full flex-shrink-0'>
				<Image
					src='/avatar-me.jpg'
					alt='Barry Prendergast'
					width={64}
					height={64}
					className='object-cover'
				/>
			</div>
			<div className='flex flex-col flex-auto'>
				<h1 className='text-xl font-semibold' itemProp='name'>
					Barry Prendergast
				</h1>
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
		{/* Second Column */}
		<div className='block'>
			<SocialLinks />
		</div>
	</header>
);

export default Header;
