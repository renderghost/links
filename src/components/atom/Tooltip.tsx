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
					className='
						translate-x-1/2
						absolute
						bg-blue-950
						dark:bg-white
						text-blue-50
						dark:text-blue-950
						duration-150
						bottom-full
						left-1/2
						mb-1
						px-2 py-1
						rounded
						text-s
						transition-opacity
						whitespace-nowrap
						z-10
						'
				>
					{content}
					<div
						className='
						absolute
						w-2
						h-2
						bg-blue-950
						dark:bg-blue-50
						rotate-45
						bottom-1
						left-1/2
						translate-x-1/2'
					/>
				</div>
			)}
		</div>
	);
};

export default Tooltip;
