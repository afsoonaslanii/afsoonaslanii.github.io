import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative border-t border-border py-12">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="text-center md:text-left">
							<h3 className="text-xl font-bold gradient-text mb-2">
								Afsoon Aslani
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
								className="text-muted-foreground hover:text-accent transition-colors"
								aria-label="LinkedIn">
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="mailto:afsoonaslanii@gmail.com"
								className="text-muted-foreground hover:text-accent transition-colors"
								aria-label="Email">
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>

					<div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
						<p>© {currentYear} Afsoon Aslani. Ideas turned into pixels.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
