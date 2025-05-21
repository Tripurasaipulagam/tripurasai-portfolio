
import React, { useState } from 'react';

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
      image: "bg-muted",
      description: "A machine learning system using Python and XGBoost to detect fraudulent credit card transactions with high accuracy.",
      technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas"]
    },
    {
      id: 2,
      title: "Pulmonary Lung Disease Detection",
      category: ["ml"],
      image: "bg-muted",
      description: "Early detection system for pulmonary diseases using Deep Learning, Capsule Networks and CNN.",
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning"]
    },
    {
      id: 3,
      title: "Hospital Management System",
      category: ["dotnet", "web"],
      image: "bg-muted",
      description: "Complete hospital management solution built with ASP.NET Core, featuring patient records, appointment scheduling, and billing.",
      technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"]
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore my latest projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === filter.id 
                  ? 'bg-accent text-white' 
                  : 'bg-background hover:bg-accent/10'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card bg-background rounded-xl overflow-hidden shadow-md">
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-5xl opacity-30">
                  {project.category.includes('dotnet') && '# C#'}
                  {project.category.includes('ml') && '{ AI }'}
                  {project.category.includes('web') && '</> Web'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-secondary text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button className="text-accent hover:underline flex items-center gap-1 text-sm font-medium">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
