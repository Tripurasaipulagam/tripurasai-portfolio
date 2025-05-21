
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="space-y-6">
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                .NET Developer
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                  Pulagam Tripura Sai
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                A passionate fresher .NET Developer with a strong foundation in C#, ASP.NET, and web development technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 group">
                  <a href="/#contact">
                    Let's Connect
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="/#portfolio">
                    View My Work
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://github.com/Tripurasaipulagam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pulagam-tripurasai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:pulagamtripurasai@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative z-10 overflow-hidden animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue via-brand-purple to-accent rounded-full p-1">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground rounded-full overflow-hidden border-4 border-background">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-background rounded-xl shadow-lg p-3 animate-slide-in z-20">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/5 rounded-full blur-xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-purple/5 rounded-full blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
