import React from 'react';
import SocialLinks from './atom/SocialLinks';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const Header: React.FC = () => (
	<header className='flex flex-col md:flex-row gap-8' id='header'>
		{/* First Column */}
		<div className='flex flex-row flex-auto gap-4 items-center'>
			<div className='size-20 overflow-hidden flex-shrink-0'>
				<Image
					src='/logo-work.jpeg'
					alt='Barry Prendergast'
					width={80}
					height={80}
					className='object-cover'
				/>
			</div>
			<div className='flex flex-col flex-auto'>
				<h1 className='text-2xl font-semibold'>Barry Prendergast</h1>
				<p className='text-gray-600 flex flex-row items-center'>
					Product & Service Designer &sdot; Berlin, Germany
					<MapPin size={16} className='ml-1' />
				</p>
			</div>
		</div>
		{/* Second Column */}
		<div className='block'>
			<SocialLinks />
		</div>
	</header>
);

export default Header;
