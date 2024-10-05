import React from 'react';
import { ExternalLinkIcon, Ghost } from 'lucide-react';

const Banner: React.FC = () => {
	return (
		<div className='bg-attention-500 text-brand-black px-6 py-4'>
			<div className='mx-auto flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<a
						href='https://link.renderg.host'
						className='flex items-center gap-1 hover:underline font-semibold'
					>
						<Ghost size={16} />
						<span>LinkGhost</span>
					</a>
					{/* <span className=''>|</span> */}
					<span className=''>Links for you to things I do.</span>
				</div>
				<div className='flex items-center gap-2'>
					<span className=''>Looking for my design work?</span>
					<a
						href='#'
						className='flex items-center gap-1 hover:underline'
					>
						<span className='font-semibold'>View my Portfolio</span>
						<ExternalLinkIcon size={16} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;
