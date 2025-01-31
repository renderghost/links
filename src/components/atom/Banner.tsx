import React from 'react';
import { Ghost } from 'lucide-react';

const Banner: React.FC = () => {
	return (
		<div className='bg-yellow-400 text-black px-6 py-4 '>
			<div className='container mx-auto flex flex-col sm:flex-row gap-1 sm:gap-2'>
				<a
					href='https://links.renderg.host'
					className='
							flex
							items-center
							gap-1
							hover:underline
							rounded-sm
							font-semibold
							duration-200
							ease-in-out
							focus:outline-none
							focus:ring-2
							focus:ring-black
							focus:ring-offset-4
							focus:ring-offset-yellow-400
							'
				>
					<Ghost size={16} />
					<h1 className='font-semibold'>LinksGhost</h1>
				</a>
				<p className='flex flex-auto'>
					Links to my projects, articles and tools.
				</p>
			</div>
		</div>
	);
};

export default Banner;
