import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ href: '#about', label: 'About' },
		{ href: '#work', label: 'Experience' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#contact', label: 'Contact' },
	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'glass border-b border-border' : 'bg-transparent'
			}`}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<button
						onClick={scrollToTop}
						className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
						Afsoon Aslani
					</button>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-muted-foreground hover:text-foreground transition-colors">
								{link.label}
							</a>
						))}
						<Button
							variant="outline"
							size="sm"
							className="glass border-primary/50 hover:bg-primary/100"
							asChild>
							<a href="#contact">Hire Me</a>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden py-4 glass border-t border-border">
						<div className="flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-muted-foreground hover:text-foreground transition-colors px-2"
									onClick={() => setIsMobileMenuOpen(false)}>
									{link.label}
								</a>
							))}
							<Button
								variant="outline"
								size="sm"
								className="glass border-primary/50 hover:bg-primary/10"
								asChild>
								<a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
									Hire Me
								</a>
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
