import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem, underlineDraw } from '@/lib/motion';
import FloatingCode from '@/components/FloatingCode';

const Hero = () => {
	const ref = useRef<HTMLElement>(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const smooth = useSpring(scrollYProgress, {
		stiffness: 70,
		damping: 22,
		restDelta: 0.001,
	});

	const gridY = useTransform(smooth, [0, 1], [0, reduced ? 0 : 140]);
	const gridScale = useTransform(smooth, [0, 1], [1, reduced ? 1 : 1.12]);
	const frameA = useTransform(smooth, [0, 1], [0, reduced ? 0 : 220]);
	const frameB = useTransform(smooth, [0, 1], [0, reduced ? 0 : 140]);
	const frameRotate = useTransform(smooth, [0, 1], [0, reduced ? 0 : -8]);
	const contentY = useTransform(smooth, [0, 1], [0, reduced ? 0 : 90]);
	// Opacity from raw progress (avoids spring overshoot to 0 on load)
	const contentOpacity = useTransform(
		scrollYProgress,
		[0, 0.65, 1],
		[1, 1, reduced ? 1 : 0],
	);
	const bitsY = useTransform(smooth, [0, 1], [0, reduced ? 0 : 80]);

	return (
		<section
			ref={ref}
			id="hero"
			data-section="hero"
			className="relative min-h-[100svh] flex items-center overflow-hidden code-canvas snap-section">
			<motion.div
				aria-hidden
				className="absolute inset-0 ide-grid will-change-transform"
				style={{ y: gridY, scale: gridScale }}
			/>
			{!reduced && (
				<div
					aria-hidden
					className="absolute inset-0 scanline opacity-60 pointer-events-none"
				/>
			)}

			<motion.div style={{ y: bitsY }} className="absolute inset-0">
				<FloatingCode />
			</motion.div>

			{/* Decorative code frames — layered parallax */}
			<motion.div
				aria-hidden
				className="absolute right-0 top-24 md:right-8 md:top-28 w-40 h-40 md:w-64 md:h-64 border border-primary/40 rounded-sm will-change-transform"
				style={{ y: frameA, rotate: frameRotate }}
			/>
			<motion.div
				aria-hidden
				className="absolute right-6 top-32 md:right-20 md:top-40 w-40 h-40 md:w-64 md:h-64 border border-accent/30 rounded-sm will-change-transform"
				style={{ y: frameB }}
			/>
			<motion.div
				aria-hidden
				className="absolute right-16 bottom-28 hidden md:block w-24 h-24 border border-primary/20 rounded-sm"
				style={{ y: frameB }}
				animate={
					reduced
						? undefined
						: {
								borderColor: [
									'hsla(38,96%,55%,0.2)',
									'hsla(168,76%,48%,0.35)',
									'hsla(38,96%,55%,0.2)',
								],
							}
				}
				transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
			/>

			<motion.div
				className="container mx-auto px-4 relative z-10 py-28 will-change-transform"
				style={{ y: contentY, opacity: contentOpacity }}>
				<motion.div
					className="max-w-4xl"
					variants={staggerContainer}
					initial={reduced ? false : 'hidden'}
					animate="visible">
					<motion.p
						variants={staggerItem}
						className="font-mono text-sm text-muted-foreground mb-6 inline-flex items-center">
						<span className="text-accent">const</span>&nbsp;
						<span className="text-primary">role</span>&nbsp;
						<span className="text-muted-foreground">=</span>&nbsp;
						<span className="syntax-string">&quot;senior-frontend&quot;</span>
						<span className="text-muted-foreground">;</span>
						<span className="ml-0.5 inline-block h-4 w-[2px] bg-primary caret-blink align-middle" />
					</motion.p>

					<motion.h1
						variants={staggerItem}
						className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
						Afsoon Aslani
					</motion.h1>

					<motion.div
						variants={underlineDraw}
						className="mt-4 h-1.5 w-28 origin-left bg-primary md:w-40"
					/>

					<motion.h2
						variants={staggerItem}
						className="mt-8 font-display text-2xl md:text-3xl font-semibold">
						Senior Front-End Developer
					</motion.h2>

					<motion.p
						variants={staggerItem}
						className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
						7+ years specializing in React & Next.js — fintech and AI-driven
						apps, frontend architecture, scalable UI systems, and performance. I
						ship with AI tools and motion that proves the craft.
					</motion.p>

					<motion.div
						variants={staggerItem}
						className="mt-10 flex flex-wrap items-center gap-3">
						<Button size="lg" asChild>
							<a href="#contact">Get in touch</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-border bg-transparent hover:bg-secondary hover:text-foreground"
							asChild>
							<a href="#work">View experience</a>
						</Button>
						<Button
							size="lg"
							variant="ghost"
							className="text-accent hover:text-primary hover:bg-secondary"
							asChild>
							<a
								href="/afsoon-aslanii-2026.pdf"
								target="_blank"
								rel="noopener noreferrer">
								<FileDown className="w-4 h-4" />
								CV
							</a>
						</Button>
					</motion.div>

					<motion.div
						variants={staggerItem}
						className="mt-10 flex items-center gap-5">
						<a
							href="https://github.com/afsoonaslanii"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="GitHub Profile">
							<Github className="w-5 h-5" />
						</a>
						<a
							href="https://linkedin.com/in/afsoonaslanii"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="LinkedIn Profile">
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="mailto:afsoonaslanii@gmail.com"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="Email">
							<Mail className="w-5 h-5" />
						</a>
					</motion.div>
				</motion.div>
			</motion.div>

			<motion.div
				className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: reduced ? 0 : [0, 6, 0] }}
				transition={
					reduced
						? { delay: 1.1, duration: 0.5 }
						: { delay: 1.1, duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
				}>
				<span className="font-mono text-xs tracking-widest uppercase text-primary/80">
					scroll
				</span>
				<span className="block h-8 w-px bg-primary/40" />
			</motion.div>
		</section>
	);
};

export default Hero;
