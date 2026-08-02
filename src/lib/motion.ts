import type { Transition, Variants } from 'framer-motion';

export const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1];

export const viewportOnce = {
	once: true,
	margin: '-10% 0px' as const,
	amount: 0.25 as const,
};

export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 36 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: easeOut },
	},
};

export const fadeUpReduced: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.3 },
	},
};

export const staggerContainer: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.09,
			delayChildren: 0.06,
		},
	},
};

export const staggerItem: Variants = {
	hidden: { opacity: 0, y: 22 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: easeOut },
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.94 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: easeOut },
	},
};

export const underlineDraw: Variants = {
	hidden: { scaleX: 0 },
	visible: {
		scaleX: 1,
		transition: { duration: 0.75, ease: easeOut, delay: 0.3 },
	},
};

export const clipReveal: Variants = {
	hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
	visible: {
		opacity: 1,
		clipPath: 'inset(0 0 0% 0)',
		transition: { duration: 0.7, ease: easeOut },
	},
};

export const chipItem: Variants = {
	hidden: { opacity: 0, y: 12, scale: 0.92 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.35, ease: easeOut },
	},
};

export function getRevealVariants(reduced: boolean): Variants {
	return reduced ? fadeUpReduced : fadeUp;
}
