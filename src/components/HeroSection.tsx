
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-in">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-6 inline-block">
              .NET Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                Pulagam Tripura Sai
              </span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              A passionate fresher .NET Developer with a strong foundation in C#, ASP.NET, and web development technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="bg-accent hover:bg-accent/90 text-white font-medium rounded-md px-6 py-3 transition-colors"
              >
                Let's Connect
              </a>
              <a
                href="/#portfolio"
                className="bg-secondary hover:bg-secondary/80 font-medium rounded-md px-6 py-3 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full overflow-hidden border-4 border-background shadow-xl animate-fade-in">
                {/* Replace with actual profile picture */}
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-3 animate-slide-in">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
