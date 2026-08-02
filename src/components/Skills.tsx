import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import {
	chipItem,
	getRevealVariants,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from '@/lib/motion';

const skillCategories = [
	{
		title: 'Languages',
		skills: ['JavaScript (ES6+)', 'TypeScript'],
	},
	{
		title: 'Frontend Development',
		skills: ['React', 'Next.js', 'Vue', 'Nuxt.js'],
	},
	{
		title: 'Motion',
		skills: [
			'Framer Motion',
			'Scroll-driven UI',
			'Parallax',
			'Micro-interactions',
		],
	},
	{
		title: 'AI & tooling',
		skills: ['Cursor', 'Claude', 'GitHub Copilot', 'AI-assisted delivery'],
	},
	{
		title: 'State & Data Layer',
		skills: ['Redux', 'React Query', 'Zustand', 'Recoil', 'Pinia'],
	},
	{
		title: 'UI Engineering',
		skills: [
			'Tailwind CSS',
			'CSS Modules',
			'styled-components',
			'SCSS',
			'Material UI',
			'Ant Design',
			'ShadCN/UI',
		],
	},
	{
		title: 'Networking & APIs',
		skills: ['REST APIs', 'GraphQL', 'WebSocket', 'API/SDK Integration'],
	},
	{
		title: 'Frontend Architecture',
		skills: [
			'Component architecture',
			'Design systems',
			'Reusable UI libraries',
			'Performance optimization',
			'State & data architecture',
		],
	},
	{
		title: 'Build & Tooling',
		skills: ['Vite', 'Webpack', 'Git', 'GitHub', 'GitLab'],
	},
	{
		title: 'Workflow',
		skills: ['Jira', 'Linear', 'Monday', 'Scrum'],
	},
];

const Skills = () => {
	const ref = useRef<HTMLElement>(null);
	const reduced = useReducedMotion();
	const reveal = getRevealVariants(!!reduced);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 22 });
	const watermarkX = useTransform(
		smooth,
		[0, 1],
		[reduced ? 0 : 100, reduced ? 0 : -140],
	);
	const watermarkY = useTransform(
		smooth,
		[0, 1],
		[reduced ? 0 : 40, reduced ? 0 : -40],
	);

	return (
		<section
			id="skills"
			data-section="skills"
			ref={ref}
			className="py-24 md:py-32 relative overflow-hidden snap-section">
			<motion.p
				aria-hidden
				className="pointer-events-none absolute right-0 top-1/3 font-mono text-[18vw] font-semibold leading-none text-foreground/[0.03] select-none"
				style={{ x: watermarkX, y: watermarkY }}>
				skills[]
			</motion.p>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-5xl mx-auto space-y-14">
					<motion.div
						variants={reveal}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="max-w-2xl">
						<p className="font-mono text-sm text-primary mb-4">
							<span className="text-muted-foreground">//</span> skills
						</p>
						<h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
							Stack & systems
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Aligned with my CV — plus motion and AI tooling as first-class
							strengths.
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
						{skillCategories.map((category) => (
							<motion.div key={category.title} variants={staggerItem}>
								<h3 className="font-mono text-sm font-medium text-accent mb-3">
									<span className="text-primary">▸</span> {category.title}
								</h3>
								<motion.div
									className="flex flex-wrap gap-2"
									variants={staggerContainer}
									initial="hidden"
									whileInView="visible"
									viewport={viewportOnce}>
									{category.skills.map((skill) => (
										<motion.span
											key={skill}
											variants={chipItem}
											whileHover={
												reduced
													? undefined
													: { y: -2, borderColor: 'hsl(var(--primary))' }
											}
											className="font-mono text-xs px-2.5 py-1.5 bg-secondary text-foreground/85 border border-border">
											{skill}
										</motion.span>
									))}
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
