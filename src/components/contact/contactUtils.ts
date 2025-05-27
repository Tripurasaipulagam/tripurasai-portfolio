
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const serviceId = 'service_yodonrh';
  const templateId = 'template_bmw1c4r';
  const publicKey = 'lEPR3fLzWO_4Z6rmh';
  
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_name: 'Pulagam Tripura Sai',
  };
  
  await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey
  );
};

export const getContactInfo = () => [
  {
    icon: "Phone",
    title: "Phone",
    value: "+91 93466 23288",
    link: "tel:+919346623288"
  },
  {
    icon: "Mail",
    title: "Email",
    value: "pulagamtripurasai@gmail.com",
    link: "mailto:pulagamtripurasai@gmail.com"
  },
  {
    icon: "Linkedin",
    title: "LinkedIn",
    value: "linkedin.com/in/pulagam-tripurasai",
    link: "https://www.linkedin.com/in/pulagam-tripurasai/"
  },
  {
    icon: "Github",
    title: "GitHub",
    value: "github.com/Tripurasaipulagam",
    link: "https://github.com/Tripurasaipulagam"
  }
];
