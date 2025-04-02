'use client';

import React, { useState, useRef, useEffect } from 'react';
import type { TooltipProps } from './Tooltip.types';
import { tooltipWrapper, tooltipContent, tooltipArrow } from './Tooltip.styles';

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
		<div className={tooltipWrapper}>
			{childWithProps}
			{isVisible && (
				<div
					ref={tooltipRef}
					id='tooltip'
					role='tooltip'
					className={tooltipContent}>
					{content}
					<div className={tooltipArrow} />
				</div>
			)}
		</div>
	);
};

export default Tooltip;
