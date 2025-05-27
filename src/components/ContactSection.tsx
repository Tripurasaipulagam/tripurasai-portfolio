import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from '@/hooks/use-toast';
import { Phone, Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_yodonrh';
      const templateId = 'template_bmw1c4r';
      const publicKey = 'lEPR3fLzWO_4Z6rmh';
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Pulagam Tripura Sai',
      };
      
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message! I will get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 93466 23288",
      link: "tel:+919346623288"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "pulagamtripurasai@gmail.com",
      link: "mailto:pulagamtripurasai@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/pulagam-tripurasai",
      link: "https://www.linkedin.com/in/pulagam-tripurasai/"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "github.com/Tripurasaipulagam",
      link: "https://github.com/Tripurasaipulagam"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-secondary/10 opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-40 -right-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            Have a project in mind or want to explore collaboration opportunities? Let's connect.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 lg:pr-8">
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
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-12 h-12 bg-accent/20 flex items-center justify-center rounded-xl mr-4 text-accent group-hover:bg-accent/30 transition-colors">
                        {item.icon}
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
                  ))}
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
          </div>
          
          <div className="lg:w-1/2">
            <Card className="glass-card h-full border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 flex items-center text-foreground">
                  <span className="p-2 bg-accent/20 rounded-lg mr-3 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </span>
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/80 border-border text-foreground placeholder:text-foreground/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/80 border-border text-foreground placeholder:text-foreground/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary/80 border-border text-foreground placeholder:text-foreground/50"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-secondary/80 border-border resize-none min-h-[150px] text-foreground placeholder:text-foreground/50"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-medium text-base"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
