
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from '@/hooks/use-toast';
import { Send, Loader2 } from "lucide-react";
import { sendContactEmail, type ContactFormData } from './contactUtils';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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
      await sendContactEmail(formData);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message! I will get back to you soon.",
      });
      
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

  return (
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
  );
};

export default ContactForm;
