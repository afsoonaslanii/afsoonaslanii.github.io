import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative border-t border-border py-10 bg-card">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="text-center md:text-left">
						<h3 className="font-mono text-sm font-semibold mb-1">
							<span className="text-primary">&lt;</span>
							afsoon
							<span className="text-primary">/&gt;</span>
						</h3>
						<p className="text-sm text-muted-foreground">
							Senior Front-End Developer
						</p>
					</div>

					<div className="flex items-center gap-6">
						<a
							href="https://github.com/afsoonaslanii"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="GitHub">
							<Github className="w-5 h-5" />
						</a>
						<a
							href="https://linkedin.com/in/afsoonaslanii"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="LinkedIn">
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="mailto:afsoonaslanii@gmail.com"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label="Email">
							<Mail className="w-5 h-5" />
						</a>
					</div>
				</div>

				<div className="mt-8 pt-6 border-t border-border text-center font-mono text-xs text-muted-foreground">
					<p>
						© {currentYear} Afsoon Aslani ·{' '}
						<span className="text-accent">ideas → pixels</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
