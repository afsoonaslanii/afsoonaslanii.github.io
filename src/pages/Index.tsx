import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useSectionSnap } from '@/hooks/useSectionSnap';

const Index = () => {
	useSectionSnap(true);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navigation />
			<main>
				<Hero />
				<About />
				<Experience />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
