import { motion, useReducedMotion } from 'framer-motion';

const BITS = [
	{ text: '{ }', x: '8%', y: '18%', delay: 0, color: 'text-primary/25' },
	{ text: '</>', x: '78%', y: '22%', delay: 0.4, color: 'text-accent/25' },
	{ text: '=>', x: '88%', y: '58%', delay: 0.8, color: 'text-primary/20' },
	{ text: 'fn()', x: '12%', y: '68%', delay: 1.1, color: 'text-accent/20' },
	{ text: '[];', x: '70%', y: '78%', delay: 0.2, color: 'text-primary/15' },
	{ text: '&&', x: '42%', y: '12%', delay: 0.6, color: 'text-accent/15' },
];

const FloatingCode = () => {
	const reduced = useReducedMotion();
	if (reduced) return null;

	return (
		<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-[1]">
			{BITS.map((bit) => (
				<motion.span
					key={`${bit.text}-${bit.x}`}
					className={`absolute font-mono text-sm md:text-base select-none ${bit.color}`}
					style={{ left: bit.x, top: bit.y }}
					animate={{
						y: [0, -14, 0],
						opacity: [0.35, 0.75, 0.35],
					}}
					transition={{
						duration: 5.5 + bit.delay,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: bit.delay,
					}}>
					{bit.text}
				</motion.span>
			))}
		</div>
	);
};

export default FloatingCode;
