
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Github, Linkedin } from "lucide-react";
import { getContactInfo } from './contactUtils';

const iconMap = {
  Phone,
  Mail,
  Github,
  Linkedin
};

const ContactInfo = () => {
  const contactInfo = getContactInfo();

  return (
    <Card className="glass-card h-full border-accent/20">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold mb-8 flex items-center text-foreground">
          <span className="p-2 bg-accent/20 rounded-lg mr-3 inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </span>
          Contact Information
        </h3>
        
        <div className="space-y-8">
          {contactInfo.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={index} className="flex items-center group">
                <div className="w-12 h-12 bg-accent/20 flex items-center justify-center rounded-xl mr-4 text-accent group-hover:bg-accent/30 transition-colors">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-foreground/70">{item.title}</h4>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Connect with me</h4>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/pulagam-tripurasai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Tripurasaipulagam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:pulagamtripurasai@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
