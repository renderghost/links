import React from 'react';
import { ExternalLinkIcon, Ghost } from 'lucide-react';

const Banner: React.FC = () => {
	return (
		<div
			className='
				bg-yellow-400
				text-black
				px-6
				py-4
				'
		>
			<div
				className='
					mx-auto
					flex
					items-center
					justify-between
					'
			>
				<div
					className='
						flex
						items-center
						gap-4
						'
				>
					<a
						href='https://link.renderg.host'
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
						<span>LinkGhost</span>
					</a>
					<span className=''>My most important links</span>
				</div>
				<div
					className='
						flex
						items-center
						gap-2
						'
				>
					<span className=''>Looking for my design portfolio?</span>
					<a
						href='#'
						className='
						flex
						items-center
						gap-1
						hover:underline
						focus:outline-none
						rounded-sm
						focus:ring-2
						focus:ring-black
						focus:ring-offset-4
						focus:ring-offset-yellow-400'
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
