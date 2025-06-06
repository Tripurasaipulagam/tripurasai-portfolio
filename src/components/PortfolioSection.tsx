import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Code, Database, Brain, Github } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'dotnet', name: '.NET' },
    { id: 'ml', name: 'ML/AI' },
    { id: 'web', name: 'Web Dev' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Credit Card Fraud Detection",
      category: ["ml"],
      image: "bg-[url('https://images.unsplash.com/photo-1556742049-0a8e1b76d389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]",
      icon: <Brain className="h-12 w-12 text-accent/70" />,
      description: "A machine learning system using Python and XGBoost to detect fraudulent credit card transactions with high accuracy.",
      technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
      pdfUrl: "https://drive.google.com/file/d/1km4phRrIqhzBYGQBSR3TCaOoKjRrJa2W/view?usp=sharing"
    },
    {
      id: 2,
      title: "Pulmonary Lung Disease Detection",
      category: ["ml"],
      image: "bg-[url('https://images.unsplash.com/photo-1576671414121-aa0c81c869e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')]",
      icon: <Brain className="h-12 w-12 text-accent/70" />,
      description: "Early detection system for pulmonary diseases using Deep Learning, Capsule Networks and CNN.",
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning"],
      pdfUrl: "https://drive.google.com/file/d/1MiwWaV2mvkqOftGI13RDo3Lwxl-8Zfov/view?usp=sharing"
    },
    {
      id: 3,
      title: "My Virtual Class Room",
      category: ["dotnet", "web"],
      image: "bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')]",
      icon: <Database className="h-12 w-12 text-accent/70" />,
      description: "My Virtual Class Room Project built with ASP.NET, Featuring the students and Staff records, give FeedBack and admin having all sections access to control.",
      technologies: ["C#", "ASP.NET", "SQL Server", "Entity Framework"],
      pdfUrl: "https://drive.google.com/file/d/1Kl8KvNnXkZ0-UK-pk2r36wb1ET3JQZ1y/view?usp=sharing",
      githubUrl: "https://github.com/Tripurasaipulagam/My-Virtual-Classroom.git"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const handleViewDetails = (project: typeof projects[0]) => {
    if (project.pdfUrl) {
      window.open(project.pdfUrl, '_blank');
    }
  };

  const handleViewCode = (project: typeof projects[0]) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/80 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/50 opacity-90"></div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my latest projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <ToggleGroup type="single" value={activeFilter} onValueChange={(value) => value && setActiveFilter(value)}>
            {filters.map((filter) => (
              <ToggleGroupItem key={filter.id} value={filter.id} aria-label={filter.name} className="px-5 py-2">
                {filter.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-border/50 backdrop-blur-sm bg-background/70 hover:bg-background/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`h-48 ${project.image} bg-cover bg-center relative p-4 flex items-end`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">
                      {project.category.includes('dotnet') && '.NET Project'}
                      {project.category.includes('ml') && !project.category.includes('dotnet') && 'Machine Learning'}
                      {project.category.includes('web') && !project.category.includes('dotnet') && 'Web Development'}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group"
                    onClick={() => handleViewDetails(project)}
                    disabled={!project.pdfUrl}
                  >
                    <span className="mr-2">View Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="px-3"
                      onClick={() => handleViewCode(project)}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Tripurasaipulagam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <span>See more projects on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
