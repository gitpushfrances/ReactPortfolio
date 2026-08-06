import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 bg-accent rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={24} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-foreground hover:text-muted-foreground font-medium transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-accent rounded-lg hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Github size={28} className="text-foreground" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-accent rounded-lg hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl">
                  <Linkedin size={28} className="text-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none text-foreground"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
