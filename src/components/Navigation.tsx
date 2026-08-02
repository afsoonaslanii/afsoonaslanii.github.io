import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '@/lib/motion';

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const reduced = useReducedMotion();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 40);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ href: '#work', label: 'Work' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' },
	];

	const scrollToTop = () => {
		const hero = document.querySelector<HTMLElement>('[data-section="hero"]');
		if (hero) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollToSection = (href: string) => {
		const id = href.replace('#', '');
		const el = document.querySelector<HTMLElement>(`[data-section="${id}"]`);
		if (!el) return;
		const top = el.offsetTop - 64;
		window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
	};

	return (
		<motion.nav
			initial={reduced ? false : { y: -16, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: easeOut }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/90 backdrop-blur-md border-b border-border'
					: 'bg-transparent'
			}`}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<button
						onClick={scrollToTop}
						className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
						<span className="text-primary">&lt;</span>
						afsoon
						<span className="text-primary">/&gt;</span>
					</button>

					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(link.href);
								}}
								className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
								{link.label}
							</a>
						))}
						<Button size="sm" onClick={() => scrollToSection('#contact')}>
							Hire Me
						</Button>
					</div>

					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</Button>
				</div>

				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.25, ease: easeOut }}
							className="md:hidden overflow-hidden border-t border-border bg-background/95">
							<div className="flex flex-col gap-4 py-4">
								{navLinks.map((link) => (
									<a
										key={link.href}
										href={link.href}
										className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors px-1"
										onClick={(e) => {
											e.preventDefault();
											setIsMobileMenuOpen(false);
											scrollToSection(link.href);
										}}>
										{link.label}
									</a>
								))}
								<Button
									size="sm"
									onClick={() => {
										setIsMobileMenuOpen(false);
										scrollToSection('#contact');
									}}>
									Hire Me
								</Button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
};

export default Navigation;
