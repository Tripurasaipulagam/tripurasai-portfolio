import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const certifications = [
    "AWS Cloud Architecting",
    "Cisco Programming Essentials in C",
    "Introduction to Cybersecurity in Cisco",
    "NPTEL in Introduction to Industry 4.0 and Industrial Internet of Things",
    "C# (Basic) in Hacker Rank",
    "Fundamentals of Network Security, Cyber Security, Cloud Security via AICTE"
  ];

  const education = {
    degree: "B. Tech in Computer Science and Engineering",
    institution: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute",
    period: "2020–2024"
  };

  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/30 opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 backdrop-blur-sm bg-background/30 p-8 rounded-2xl border border-border/50 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">
              Passionate About Creating Solutions Through Code
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a passionate .NET Developer with a strong foundation in C# and ASP.NET. Despite being a fresher, 
              I bring enthusiasm, a solid educational background, and practical project experience to the table.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey in software development started during my undergraduate years where I developed a deep interest 
              in building robust applications using Microsoft technologies. I'm constantly learning and challenging myself 
              to grow both technically and professionally.
            </p>
            
            <div className="mt-8 space-y-6">
              <Tabs defaultValue="education" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="education" className="mt-0">
                  <Card className="border border-border/50">
                    <CardContent className="pt-6">
                      <div className="space-y-1">
                        <h5 className="font-semibold text-lg">{education.degree}</h5>
                        <p className="text-muted-foreground">{education.institution}</p>
                        <p className="text-sm text-muted-foreground/70">{education.period}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="certifications" className="mt-0">
                  <Card className="border border-border/50">
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-3 mt-1 text-accent">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-secondary/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-xl">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-accent/20 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </span>
                Professional Skills
              </h4>
              
              <div className="space-y-6">
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">C#.NET</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-accent to-accent/70 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">ASP.NET (Core, MVC)</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-accent to-accent/70 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MS SQL Server</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-accent to-accent/70 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HTML/CSS</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-accent to-accent/70 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Entity Framework</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-accent to-accent/70 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {['C#', 'ASP.NET', 'SQL', 'Entity Framework', 'MVC', 'RESTful APIs', 'HTML/CSS', 'GitHub'].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-secondary/80 hover:bg-accent/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
