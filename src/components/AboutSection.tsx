
import React from 'react';

const AboutSection = () => {
  const certifications = [
    "AWS Cloud Architecting",
    "Cisco Programming Essentials in C",
    "NPTEL courses in Cloud Computing and Security"
  ];

  const education = {
    degree: "B.Tech in Technology",
    institution: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute",
    period: "2020–2024"
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Passionate About Creating Solutions Through Code
            </h3>
            <p className="text-muted-foreground mb-4">
              I am a passionate .NET Developer with a strong foundation in C# and ASP.NET. Despite being a fresher, 
              I bring enthusiasm, a solid educational background, and practical project experience to the table.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in software development started during my undergraduate years where I developed a deep interest 
              in building robust applications using Microsoft technologies. I'm constantly learning and challenging myself 
              to grow both technically and professionally.
            </p>
            <p className="text-muted-foreground mb-4">
              Beyond coding, I have actively participated in leadership roles and technical webinars, 
              which has helped me develop well-rounded professional skills.
            </p>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">Education</h4>
              <div className="bg-secondary rounded-lg p-4 mb-6">
                <h5 className="font-medium">{education.degree}</h5>
                <p className="text-muted-foreground">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-secondary rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Professional Skills</h4>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">C#.NET</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">ASP.NET (Core, MVC)</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">MS SQL Server</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">HTML/CSS</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Entity Framework</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-3 mt-8">Certifications</h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
