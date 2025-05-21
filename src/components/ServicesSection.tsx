
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications using ASP.NET Core, MVC, C#, HTML5, and CSS3.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="8.5"></line>
        </svg>
      )
    },
    {
      title: 'Database Management',
      description: 'Designing and optimizing SQL Server databases, creating efficient queries, and implementing proper data structures.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    {
      title: 'API Development',
      description: 'Building RESTful APIs using ASP.NET Core Web API to connect your applications to external services and data sources.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Developing AI/ML solutions for data analysis, prediction models, and intelligent automation systems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="M18.7 8.7c-.4-1.2-1-2-1.7-2-1.5 0-2.7 3.2-2.7 7s1.2 7 2.7 7c.7 0 1.3-.8 1.7-2"></path>
          <path d="M7 14.3c1 .5 2 .7 3 .7 3 0 6-2 6-4.5S13 6 10 6c-1 0-2 .2-3 .7"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Specialized development services utilizing .NET technologies to create robust and efficient solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-background p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-lg mb-4 text-accent">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-secondary rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'C#.NET', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework',
              'MS SQL Server', 'Visual Studio', 'SSMS', 'HTML5/CSS3',
              'Python', 'Git/GitHub', 'RESTful APIs', 'Web Services'
            ].map((tech, index) => (
              <div key={index} className="bg-background rounded-lg p-3 text-center">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
