import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import {
	getRevealVariants,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from '@/lib/motion';

const highlights = [
	{
		title: '7+ years shipping UI',
		description:
			'Specializing in React and Next.js across fintech and AI-driven products.',
	},
	{
		title: 'Architecture & performance',
		description:
			'Scalable UI systems, design systems, and production performance wins (20MB → 30KB).',
	},
	{
		title: 'AI-augmented workflow',
		description:
			'Cursor & Claude to accelerate implementation — while owning quality and architecture.',
	},
];

const About = () => {
	const ref = useRef<HTMLElement>(null);
	const reduced = useReducedMotion();
	const reveal = getRevealVariants(!!reduced);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 24 });
	const accentX = useTransform(
		smooth,
		[0, 1],
		[reduced ? 0 : -80, reduced ? 0 : 80],
	);
	const accentY = useTransform(
		smooth,
		[0, 1],
		[reduced ? 0 : 40, reduced ? 0 : -60],
	);
	const accentRotate = useTransform(smooth, [0, 1], [0, reduced ? 0 : 18]);

	return (
		<section
			id="about"
			data-section="about"
			ref={ref}
			className="py-24 md:py-32 relative overflow-hidden snap-section">
			<motion.div
				aria-hidden
				className="absolute top-16 right-0 h-20 w-20 border border-primary/50"
				style={{ x: accentX, y: accentY, rotate: accentRotate }}
			/>
			<motion.div
				aria-hidden
				className="absolute bottom-20 left-4 font-mono text-6xl text-foreground/[0.04] select-none"
				style={{ y: accentY }}>
				{'{ }'}
			</motion.div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
					<motion.div
						variants={reveal}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}>
						<p className="font-mono text-sm text-primary mb-4">
							<span className="text-muted-foreground">//</span> about
						</p>
						<h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
							Frontend systems,
							<br />
							<span className="text-accent">production-minded</span>
						</h2>
					</motion.div>

					<div className="space-y-8">
						<motion.p
							variants={reveal}
							initial="hidden"
							whileInView="visible"
							viewport={viewportOnce}
							className="text-lg text-muted-foreground leading-relaxed">
							Senior Front-End Developer with 7+ years of experience
							specializing in React and Next.js, building fintech and AI-driven
							applications. Focused on frontend architecture, scalable UI
							systems, and performance optimization across production
							environments.
						</motion.p>

						<motion.ul
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={viewportOnce}
							className="space-y-6">
							{highlights.map((item) => (
								<motion.li
									key={item.title}
									variants={staggerItem}
									className="border-l-2 border-primary pl-5">
									<h3 className="font-display font-semibold text-lg">
										{item.title}
									</h3>
									<p className="text-muted-foreground mt-1">
										{item.description}
									</p>
								</motion.li>
							))}
						</motion.ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
