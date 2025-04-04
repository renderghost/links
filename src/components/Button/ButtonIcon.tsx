// src/components/Button/ButtonIcon.tsx

'use client';

import React from 'react';
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
}) => (
	<Button
		{...rest}
		className={`${styles.squareButton} ${className}`}
		LeftIcon={Icon}
	/>
);

export default ButtonIcon;
