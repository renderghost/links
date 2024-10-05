import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
	children: React.ReactElement;
	content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
	const [isVisible, setIsVisible] = useState(false);
	const triggerRef = useRef<HTMLElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const trigger = triggerRef.current;
		if (trigger) {
			trigger.setAttribute('aria-describedby', 'tooltip');
		}
		console.log('Tooltip component mounted');
	}, []);

	const showTooltip = () => {
		console.log('showTooltip called');
		setIsVisible(true);
	};
	const hideTooltip = () => {
		console.log('hideTooltip called');
		setIsVisible(false);
	};

	useEffect(() => {
		console.log('isVisible changed:', isVisible);
	}, [isVisible]);

	return (
		<div className='relative inline-block'>
			{React.cloneElement(children, {
				ref: triggerRef,
				onMouseEnter: showTooltip,
				onMouseLeave: hideTooltip,
				onFocus: showTooltip,
				onBlur: hideTooltip,
			})}
			{isVisible && (
				<div
					ref={tooltipRef}
					id='tooltip'
					role='tooltip'
					className='absolute z-10 px-2 py-1 text-xs rounded 
                     bg-neutral-0 text-brand-white 
                     dark:bg-brand-white dark:text-neutral-0 
                     transition-opacity duration-150
                     -translate-x-1/2 left-1/2 bottom-full mb-1
                     whitespace-nowrap'
				>
					{content}
					<div
						className='absolute w-2 h-2 bg-neutral-0 dark:bg-brand-white rotate-45 
                          -bottom-1 left-1/2 -translate-x-1/2'
					/>
				</div>
			)}
		</div>
	);
};

export default Tooltip;
