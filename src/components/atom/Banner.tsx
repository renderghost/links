import React from 'react';
import { ExternalLinkIcon, Ghost } from 'lucide-react';

const Banner: React.FC = () => {
	return (
		<div className='bg-attention-500 text-neutral-0 px-4 py-3'>
			<div className='mx-auto flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Ghost size={16} />
					<span className='font-semibold'>LinkGhost</span>
					<span className=''>|</span>
					<span className=''>link.renderg.host</span>
				</div>
				<div className='flex items-center gap-2'>
					<span className=''>This site is for my bio links.</span>

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
