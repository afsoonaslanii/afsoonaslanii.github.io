import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-glow"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Floating orbs with parallax */}
      <div 
        className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" 
        style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * -0.2}px)` }}
      />
      <div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" 
        style={{ transform: `translate(${scrollY * -0.4}px, ${scrollY * -0.3}px)`, animationDelay: '2s' }}
      />
      
      {/* Additional floating particles */}
      <div 
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-float"
        style={{ transform: `translateY(${scrollY * -0.15}px)`, animationDelay: '1s' }}
      />
      <div 
        className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-accent/15 rounded-full blur-2xl animate-float"
        style={{ transform: `translateY(${scrollY * -0.25}px)`, animationDelay: '3s' }}
      />
      
      <div 
        className="container mx-auto px-4 relative z-10"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <div className="inline-block animate-scale-in">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight hover-float">
                Hi, I'm{" "}
                <span className="gradient-text animate-gradient">Afsoon Aslani</span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Senior Front-End Developer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with 7+ years of expertise in React, Vue, and modern web technologies. 
            Passionate about clean code, performance optimization, and innovative solutions.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button 
              size="lg" 
              variant="glass"
              asChild
            >
              <a href="#work">View My Work</a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-8">
            <a 
              href="https://github.com/afsoonaslanii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/afsoonaslanii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:afsoonaslanii@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
