
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
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
            <ContactInfo />
          </div>
          
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
