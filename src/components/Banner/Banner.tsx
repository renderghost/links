import React from 'react';
import { Ghost } from 'lucide-react';
import type { BannerProps } from './Banner.types';
import {
	bannerWrapper,
	bannerContainer,
	bannerLink,
	bannerTitle,
	bannerDescription,
} from './Banner.styles';

const Banner: React.FC<BannerProps> = () => {
	return (
		<div className={bannerWrapper}>
			<div className={bannerContainer}>
				<a href='https://links.renderg.host' className={bannerLink}>
					<Ghost size={16} />
					<h1 className={bannerTitle}>LinksGhost</h1>
				</a>
				<p className={bannerDescription}>
					Links to my projects, articles and tools.
				</p>
			</div>
		</div>
	);
};

export default Banner;
