'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

type ButtonIconProps = Omit<ButtonProps, 'children'> & {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
	Icon,
	className = '',
	...rest
}) => {
	const [inHero, setInHero] = useState(false);

	useEffect(() => {
		const insideHero = document
			.getElementById('hero')
			?.contains(document.body);
		setInHero(insideHero ?? false);
	}, []);

	return (
		<Button
			{...rest}
			variant='icon'
			className={`${styles.squareButton} ${
				inHero ? styles.squareButtonHero : ''
			} ${className}`}>
			<Icon />
		</Button>
	);
};

export default ButtonIcon;
