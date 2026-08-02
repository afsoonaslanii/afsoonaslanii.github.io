import { ExternalLink, MapPin } from 'lucide-react';
import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { getRevealVariants, staggerItem, viewportOnce } from '@/lib/motion';

const experiences = [
	{
		company: 'Technance',
		role: 'Senior Front-End Developer',
		location: 'Dubai (Remote)',
		period: 'Nov 2025 – Mar 2026',
		summary:
			'Fintech company providing infrastructure for building and scaling cryptocurrency trading platforms.',
		href: 'https://technance.io',
		highlights: [
			'Owned frontend architecture of fintech backoffice system for payment operations and provider workflows using Next.js.',
			'Integrated frontend systems with internal SDKs and payment APIs, ensuring reliable financial data flow in transaction-critical workflows.',
			'Contributed to shared frontend libraries and enforced code quality standards (Biome, documentation), improving maintainability across repositories.',
			'Used AI-assisted development tools (Cursor, Claude) to accelerate implementation of spec-driven frontend features across internal tools.',
		],
	},
	{
		company: 'Zebracat AI',
		role: 'Senior Front-End Developer',
		location: 'Berlin, Germany (Remote)',
		period: 'Jul 2024 – Oct 2025',
		summary:
			'AI-powered video generation platform with customizable editing workflows.',
		href: 'https://www.zebracat.ai',
		highlights: [
			'Led frontend architecture of video editor and dashboard in React, supporting complex media workflows.',
			'Reduced bundle size from 20MB to 30KB by redesigning dependency structure and replacing heavy runtime libraries with API-driven alternatives.',
			'Implemented performance optimizations including code splitting, lazy loading, and rendering improvements for media-heavy UI.',
			'Introduced offline resilience using Service Workers to maintain functionality during deployment downtime.',
			'Built and shipped AI-driven features such as custom avatar creation and video generation workflows, defining UI/UX behavior in absence of formal product designs.',
		],
	},
	{
		company: 'Cloudzy',
		role: 'Senior Front-End Developer',
		location: 'Tehran, Iran (Hybrid)',
		period: 'Aug 2023 – Aug 2024',
		summary: 'VPS and cloud infrastructure provider serving global clients.',
		href: 'https://cloudzy.com',
		highlights: [
			'Led migration of core frontend from Gatsby to Nuxt.js, improving architecture scalability.',
			'Designed reusable UI structure for cloud platform modules, improving consistency across products.',
			'Optimized bundle and runtime performance by removing dead code and reducing dependency overhead.',
		],
	},
	{
		company: 'Digikala-Group / Smartech',
		role: 'Front-End Developer',
		location: 'Tehran, Iran (On-site)',
		period: 'Nov 2022 – Aug 2023',
		summary: 'Marketing technology service provider for Digikala.',
		href: 'https://smartech.ir',
		highlights: [
			'Improved frontend performance and reduced load time through optimized components and rendering strategies.',
			'Decoupled frontend architecture from Redux-heavy structure, improving responsiveness and maintainability.',
			'Delivered business-critical frontend features for marketing and customer engagement workflows.',
		],
	},
	{
		company: 'Rental Tracker',
		role: 'Senior Front-End Developer',
		location: 'Tehran, Iran (On-site)',
		period: 'Apr 2020 – Nov 2022',
		summary:
			'Inventory and warehouse management software for the film industry.',
		href: '',
		highlights: [
			'Designed scalable frontend architecture for inventory and warehouse management system used in production operations.',
			'Reduced UI development time by ~50% by creating reusable component patterns and modular UI structures.',
			'Standardized frontend architecture through consistent design patterns and component reuse across modules.',
			'Collaborated with backend and product teams to streamline feature delivery for operational workflows.',
		],
	},
	{
		company: 'Pezeshkekhoob',
		role: 'Front-End Developer',
		location: 'Tehran, Iran (On-site)',
		period: 'Aug 2018 – Mar 2020',
		summary:
			'An online system for reservations and consultations with doctors and psychologists.',
		href: 'https://pezeshkekhoob.com',
		highlights: [
			'Migrated legacy frontend architecture to React/Next.js, improving maintainability and long-term scalability.',
			'Designed and implemented a role-based admin system for internal operations and workflow management.',
			'Built data-driven dashboard architecture to support business intelligence and operational decision-making.',
			'Improved frontend structure and component reusability across core platform modules.',
		],
	},
];

const Experience = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const reduced = useReducedMotion();
	const reveal = getRevealVariants(!!reduced);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start center', 'end end'],
	});
	const progress = useSpring(scrollYProgress, {
		stiffness: 60,
		damping: 24,
		restDelta: 0.001,
	});
	const scaleY = useTransform(progress, [0, 1], [0, 1]);
	const watermarkY = useTransform(
		progress,
		[0, 1],
		[reduced ? 0 : 60, reduced ? 0 : -120],
	);
	const watermarkX = useTransform(
		progress,
		[0, 1],
		[reduced ? 0 : -30, reduced ? 0 : 40],
	);

	return (
		<section
			id="work"
			data-section="work"
			ref={sectionRef}
			className="py-24 md:py-32 relative overflow-hidden bg-muted/50 snap-section">
			<motion.p
				aria-hidden
				className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 font-mono text-[16vw] font-semibold leading-none text-foreground/[0.035] select-none whitespace-nowrap"
				style={{ y: watermarkY, x: watermarkX }}>
				{'</work>'}
			</motion.p>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto">
					<motion.div
						variants={reveal}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="mb-16 md:mb-20">
						<p className="font-mono text-sm text-primary mb-4">
							<span className="text-muted-foreground">//</span> experience
						</p>
						<h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
							Work history
						</h2>
						<p className="mt-4 text-lg text-muted-foreground max-w-xl">
							Same track as my CV — fintech, AI, cloud, and product frontends
							with architecture and performance ownership.
						</p>
						<a
							href="/afsoon-aslanii-2026.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 mt-5 font-mono text-sm text-accent hover:text-primary transition-colors">
							download_cv.pdf
							<ExternalLink className="w-3.5 h-3.5" />
						</a>
					</motion.div>

					{/* Timeline: line + dots share the same x-center at 6px */}
					<div className="relative">
						<div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-border" />
						<motion.div
							className="absolute left-[5px] top-0 w-[2px] origin-top bg-primary"
							style={{
								scaleY: reduced ? 1 : scaleY,
								height: '100%',
							}}
						/>

						<div className="space-y-14 md:space-y-16">
							{experiences.map((exp, index) => (
								<motion.article
									key={`${exp.company}-${exp.period}`}
									variants={staggerItem}
									initial="hidden"
									whileInView="visible"
									viewport={viewportOnce}
									className="relative pl-10 md:pl-12">
									{/* Dot centered on the 2px rail at x=6px */}
									<motion.span
										className="absolute left-[6px] top-[0.7rem] z-10 h-3 w-3 -translate-x-1/2 rounded-sm bg-primary ring-4 ring-background"
										initial={reduced ? false : { scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={viewportOnce}
										transition={{ type: 'spring', stiffness: 320, damping: 18 }}
									/>

									<div className="space-y-3">
										<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
											<span className="font-mono text-xs text-muted-foreground">
												{String(index + 1).padStart(2, '0')}
											</span>
											{exp.href ? (
												<a
													href={exp.href}
													target="_blank"
													rel="noopener noreferrer"
													className="font-display text-2xl font-bold hover:text-primary transition-colors inline-flex items-center gap-2">
													{exp.company}
													<ExternalLink className="w-4 h-4 text-muted-foreground" />
												</a>
											) : (
												<h3 className="font-display text-2xl font-bold">
													{exp.company}
												</h3>
											)}
											<span className="font-mono text-sm text-accent">
												{exp.period}
											</span>
										</div>
										<p className="font-medium text-foreground/90">{exp.role}</p>
										<p className="text-sm text-muted-foreground italic">
											{exp.summary}
										</p>
										<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
											<span className="inline-flex items-center gap-1.5 font-mono text-xs">
												<MapPin className="w-3.5 h-3.5 text-primary" />
												{exp.location}
											</span>
										</div>
										<ul className="mt-4 space-y-2.5">
											{exp.highlights.map((highlight, i) => (
												<motion.li
													key={highlight}
													initial={reduced ? false : { opacity: 0, x: -8 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={viewportOnce}
													transition={{ delay: i * 0.05, duration: 0.35 }}
													className="text-muted-foreground flex gap-3 text-[0.95rem] leading-relaxed">
													<span className="font-mono text-primary shrink-0 mt-0.5">
														›
													</span>
													<span>{highlight}</span>
												</motion.li>
											))}
										</ul>
									</div>
								</motion.article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
