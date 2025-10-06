import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [isClicking, setIsClicking] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [hoverType, setHoverType] = useState<
		'default' | 'button' | 'link' | 'text'
	>('default');
	const [shouldHideCursor, setShouldHideCursor] = useState(false);
	const cursorRef = useRef<HTMLDivElement>(null);
	const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
			if (!isVisible) setIsVisible(true);
		};

		const handleMouseDown = () => setIsClicking(true);
		const handleMouseUp = () => setIsClicking(false);

		const handleMouseEnter = () => setIsVisible(true);
		const handleMouseLeave = () => setIsVisible(false);

		// Enhanced hover detection for interactive elements
		const handleMouseOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const isButton = target.matches(
				'button, [role="button"], [data-cursor="button"]'
			);
			const isLink =
				target.matches('a, [data-cursor="link"]') ||
				target.closest('a') !== null;
			const isText = target.matches(
				'input[type="text"], input[type="email"], input[type="password"], input[type="tel"], input[type="url"], textarea, [contenteditable]'
			);
			const isInteractive = isButton || isLink || isText;
			setIsHovering(isInteractive);
			setShouldHideCursor(false);

			if (isButton) setHoverType('button');
			else if (isLink) setHoverType('link');
			else if (isText) setHoverType('text');
			else setHoverType('default');
		};

		const handleMouseOut = () => {
			setIsHovering(false);
			setHoverType('default');
			setShouldHideCursor(false);
		};

		document.addEventListener('mousemove', updateMousePosition);
		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mouseover', handleMouseOver);
		document.addEventListener('mouseout', handleMouseOut);
		document.addEventListener('mouseenter', handleMouseEnter);
		document.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			document.removeEventListener('mousemove', updateMousePosition);
			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mouseover', handleMouseOver);
			document.removeEventListener('mouseout', handleMouseOut);
			document.removeEventListener('mouseenter', handleMouseEnter);
			document.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [isVisible]);

	if (!isVisible || shouldHideCursor) return null;

	return (
		<>
			{/* Main cursor with enhanced styling */}
			<div
				ref={cursorRef}
				className="fixed pointer-events-none z-[9999]"
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					transform: 'translate(-50%, -50%)',
				}}>
				<div
					className={`cursor-main-enhanced transition-all duration-300 ease-out ${
						isHovering ? `scale-200 cursor-hover-${hoverType}` : 'scale-100'
					} ${isClicking ? 'scale-50' : ''}`}
				/>
			</div>

			{/* Enhanced cursor trail with multiple rings */}
			<div
				className="fixed pointer-events-none z-[9998]"
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					transform: 'translate(-50%, -50%)',
				}}>
				<div
					className={`cursor-trail-enhanced transition-all duration-500 ease-out ${
						isHovering ? 'scale-300 opacity-80' : 'scale-100 opacity-50'
					}`}
				/>
			</div>

			{/* Secondary trail ring */}
			<div
				className="fixed pointer-events-none z-[9997]"
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					transform: 'translate(-50%, -50%)',
				}}>
				<div
					className={`cursor-trail-secondary transition-all duration-700 ease-out ${
						isHovering ? 'scale-400 opacity-40' : 'scale-100 opacity-20'
					}`}
				/>
			</div>

			{/* Enhanced glow effect */}
			<div
				className="fixed pointer-events-none z-[9996]"
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					transform: 'translate(-50%, -50%)',
				}}>
				<div
					className={`cursor-glow-enhanced transition-all duration-800 ease-out ${
						isHovering ? 'scale-500 opacity-25' : 'scale-100 opacity-8'
					}`}
				/>
			</div>

			{/* Particle effects for hover */}
			{isHovering && (
				<div
					className="fixed pointer-events-none z-[9995]"
					style={{
						left: mousePosition.x,
						top: mousePosition.y,
						transform: 'translate(-50%, -50%)',
					}}>
					<div className="cursor-particles" />
				</div>
			)}
		</>
	);
};

export default CustomCursor;
