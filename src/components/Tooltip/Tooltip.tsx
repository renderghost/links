'use client';

import React, { useState, useRef, useEffect } from 'react';
import type { TooltipProps } from './Tooltip.types';
import styles from './Tooltip.module.css';

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
	const [isVisible, setIsVisible] = useState(false);
	const triggerRef = useRef<HTMLElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (triggerRef.current) {
			triggerRef.current.setAttribute('aria-describedby', 'tooltip');
		}
	}, []);

	const showTooltip = () => setIsVisible(true);
	const hideTooltip = () => setIsVisible(false);

	let childWithProps = children;
	if (React.isValidElement(children)) {
		childWithProps = React.cloneElement(children, {
			ref: triggerRef,
			onMouseEnter: showTooltip,
			onMouseLeave: hideTooltip,
			onFocus: showTooltip,
			onBlur: hideTooltip,
		} as React.Attributes);
	}

	return (
		<div className={styles.tooltipWrapper}>
			{childWithProps}
			{isVisible && (
				<div
					ref={tooltipRef}
					id='tooltip'
					role='tooltip'
					className={styles.tooltipContent}>
					{content}
					<div className={styles.tooltipArrow} />
				</div>
			)}
		</div>
	);
};

export default Tooltip;
