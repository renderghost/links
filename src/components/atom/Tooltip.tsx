import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
	content: string;
	children: React.ReactNode;
}

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
		<div className='relative inline-block'>
			{childWithProps}
			{isVisible && (
				<div
					ref={tooltipRef}
					id='tooltip'
					role='tooltip'
					className='
					absolute left-1/2 bottom-full mb-1 z-10
					w-auto translate-x-[-50%] px-2 py-1 text-s
					rounded transition-opacity duration-150 whitespace-nowrap
					bg-bones-black dark:bg-bones-white text-bones-white dark:text-bones-black
				'>
					{content}
					<div
						className='
						absolute w-2 h-2
						bg-bones-black dark:bg-bones-white text-bones-white dark:text-bones-black
						rotate-45
						-bottom-1 left-1/2 translate-x-[-50%]
						'
					/>
				</div>
			)}
		</div>
	);
};

export default Tooltip;
