import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CustomCursor = () => {
	const reduced = useReducedMotion();
	const [pos, setPos] = useState({ x: -100, y: -100 });
	const [hovering, setHovering] = useState(false);
	const [visible, setVisible] = useState(false);
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const finePointer = window.matchMedia('(pointer: fine)').matches;
		if (!finePointer || reduced) return;

		setEnabled(true);
		document.body.classList.add('has-custom-cursor');

		const onMove = (e: MouseEvent) => {
			setPos({ x: e.clientX, y: e.clientY });
			setVisible(true);
		};

		const onLeave = () => setVisible(false);

		const onOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			const interactive = target?.closest(
				'a, button, [role="button"], input, textarea, select, label'
			);
			setHovering(Boolean(interactive));
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		window.addEventListener('mouseover', onOver, { passive: true });
		document.documentElement.addEventListener('mouseleave', onLeave);

		return () => {
			document.body.classList.remove('has-custom-cursor');
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mouseover', onOver);
			document.documentElement.removeEventListener('mouseleave', onLeave);
		};
	}, [reduced]);

	if (!enabled) return null;

	return (
		<div
			aria-hidden
			className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
			<motion.div
				className="absolute top-0 left-0"
				animate={{
					x: pos.x,
					y: pos.y,
					opacity: visible ? 1 : 0,
				}}
				transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.3 }}>
				{/* Outer ring */}
				<motion.div
					className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
					animate={{
						width: hovering ? 44 : 28,
						height: hovering ? 44 : 28,
					}}
					transition={{ type: 'spring', stiffness: 300, damping: 22 }}
				/>
				{/* Code caret core */}
				<div className="absolute -translate-x-1/2 -translate-y-1/2 h-4 w-[2px] bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
			</motion.div>
		</div>
	);
};

export default CustomCursor;
