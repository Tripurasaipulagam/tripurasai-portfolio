
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Abstract background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute h-[40rem] w-[40rem] rounded-full blur-[10rem] bg-brand-blue/10 -top-[15rem] -left-[20rem]" />
        <div className="absolute h-[30rem] w-[30rem] rounded-full blur-[10rem] bg-brand-purple/10 -bottom-[10rem] -right-[15rem]" />
      </div>

      <div className="container mx-auto px-4 z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left content column */}
          <div className="lg:w-1/2 animate-fade-in space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-2 border border-accent/20 shadow-sm shadow-accent/5">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                  .NET Developer
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 text-primary border border-brand-blue/10 shadow-sm">
                  Available for Work
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Hello, I'm{' '}
                <span className="inline-block">
                  <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                    Pulagam Tripura Sai
                  </span>
                  <svg className="w-full h-2 mt-1" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path 
                      d="M0,0 Q50,10 100,0" 
                      stroke="url(#gradient)" 
                      strokeWidth="2" 
                      fill="none" 
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                A passionate fresher .NET Developer with a strong foundation in C#, ASP.NET, and web development technologies.
                Creating elegant solutions through clean code.
              </p>
              
              <div className="flex flex-wrap gap-5 pt-4">
                <Button asChild size="lg" className="gap-2 group rounded-full shadow-lg shadow-brand-blue/10">
                  <a href="/#contact">
                    Let's Connect
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg" className="rounded-full gap-2 group">
                  <a href="/#portfolio">
                    View My Work
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full gap-2 group">
                  <a href="#" download>
                    Resume
                    <Download className="w-4 h-4 transition-transform group-hover:translate-y-[2px]" />
                  </a>
                </Button>
              </div>
              
              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["C#", "ASP.NET", "SQL Server", "Entity Framework", "HTML/CSS"].map((tech) => (
                  <div 
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium border border-border/50"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-5 pt-2">
                <a 
                  href="https://github.com/Tripurasaipulagam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-brand-blue/10 transition-all"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pulagam-tripurasai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-brand-blue/10 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                <a 
                  href="mailto:pulagamtripurasai@gmail.com" 
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-brand-blue/10 transition-all"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
                
                <div className="h-6 w-px bg-border mx-1"></div>
                
                <div className="text-sm text-muted-foreground">
                  <a href="mailto:pulagamtripurasai@gmail.com" className="hover:text-foreground transition-colors hover:underline">
                    pulagamtripurasai@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right profile image column with floating card design - MODIFIED */}
          <div className="lg:w-1/2 flex justify-center items-center lg:items-start lg:mt-24 mt-8">
            <div className="relative">
              {/* Main circular profile image with gradient border - MODIFIED */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-accent [animation:spin_8s_linear_infinite] opacity-70 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue via-brand-purple to-accent rounded-full p-1">
                  <div className="w-full h-full bg-background flex items-center justify-center overflow-hidden rounded-full">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="https://i.postimg.cc/fWdvh7xK/resume-pic-1.jpg" alt="Pulagam Tripura Sai" className="object-cover" />
                      <AvatarFallback className="text-3xl">PTS</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              
              {/* Floating "Available for hire" card */}
              <Card className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-sm shadow-xl p-3 rounded-xl animate-slide-in z-20 border border-border/50">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium">Open to opportunities</span>
                </div>
              </Card>
              
              {/* Floating experience card */}
              <Card className="absolute -top-4 -left-4 bg-card/80 backdrop-blur-sm shadow-xl p-3 rounded-xl animate-fade-in z-20 border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Passionate about</div>
                    <div className="text-sm font-medium">.NET Development</div>
                  </div>
                </div>
              </Card>
              
              {/* Subtle background elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-purple/5 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground animate-bounce">
          <span className="text-xs font-medium mb-1">Scroll Down</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
