import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, FileDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
	getRevealVariants,
	staggerContainer,
	staggerItem,
	viewportOnce,
} from '@/lib/motion';

const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'afsoonaslanii@gmail.com',
		href: 'mailto:afsoonaslanii@gmail.com',
	},
	{
		icon: Github,
		label: 'GitHub',
		value: 'afsoonaslanii',
		href: 'https://github.com/afsoonaslanii',
	},
	{
		icon: Linkedin,
		label: 'LinkedIn',
		value: 'afsoonaslanii',
		href: 'https://linkedin.com/in/afsoonaslanii',
	},
];

const Contact = () => {
	const reduced = useReducedMotion();
	const reveal = getRevealVariants(!!reduced);

	return (
		<section
			id="contact"
			data-section="contact"
			className="py-24 md:py-32 relative overflow-hidden snap-section">
			<div className="absolute inset-x-0 top-0 h-px bg-border" />
			{!reduced && (
				<motion.div
					aria-hidden
					className="pointer-events-none absolute -right-8 top-24 font-mono text-[12vw] font-semibold text-foreground/[0.03] select-none"
					animate={{ y: [0, -20, 0] }}
					transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
					contact()
				</motion.div>
			)}
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto space-y-12">
					<motion.div
						variants={reveal}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="max-w-2xl">
						<p className="font-mono text-sm text-primary mb-4">
							<span className="text-muted-foreground">//</span> contact
						</p>
						<h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
							Let&apos;s ship something
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							Open to remote opportunities worldwide.
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{contactInfo.map((item) => (
							<motion.a
								key={item.label}
								href={item.href}
								target={item.href.startsWith('http') ? '_blank' : undefined}
								rel={
									item.href.startsWith('http')
										? 'noopener noreferrer'
										: undefined
								}
								variants={staggerItem}
								whileHover={reduced ? undefined : { y: -4 }}
								whileTap={reduced ? undefined : { scale: 0.98 }}
								className="group flex flex-col gap-3 p-5 border border-border bg-card hover:border-primary/50 transition-colors">
								<item.icon className="w-5 h-5 text-primary" />
								<div>
									<p className="font-mono text-xs text-muted-foreground">
										{item.label}
									</p>
									<p className="font-medium break-all">{item.value}</p>
								</div>
							</motion.a>
						))}
					</motion.div>

					<motion.div
						variants={reveal}
						initial="hidden"
						whileInView="visible"
						viewport={viewportOnce}
						className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
						<div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
							<MapPin className="w-4 h-4 text-accent" />
							<span>Based in Iran · working globally</span>
						</div>
						<Button size="lg" asChild>
							<a href="mailto:afsoonaslanii@gmail.com">
								<Mail className="w-5 h-5" />
								Send email
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-border bg-transparent"
							asChild>
							<a
								href="/afsoon-aslanii-2026.pdf"
								target="_blank"
								rel="noopener noreferrer">
								<FileDown className="w-4 h-4" />
								Download CV
							</a>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
