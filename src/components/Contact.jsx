import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, XCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { toast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './ui/dialog';

const EMAILJS_SERVICE_ID = 'service_ykdntgu';
const EMAILJS_TEMPLATE_ID = 'template_8dfflii';
const EMAILJS_PUBLIC_KEY = 'pQeI8Lfn3a2P2CiWi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogStatus, setDialogStatus] = useState('success'); // 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'New message from your portfolio',
        },
        EMAILJS_PUBLIC_KEY
      );

      setDialogStatus('success');
      setDialogOpen(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setDialogStatus('error');
      setDialogOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const handleRetry = () => {
    sendEmail();
  };

  React.useEffect(() => {
    if (dialogOpen && dialogStatus === 'success') {
      const timer = setTimeout(() => setDialogOpen(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [dialogOpen, dialogStatus]);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-foreground"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 p-3 transition-transform duration-300 rounded-lg bg-accent group-hover:scale-110">
                      <info.icon size={24} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium transition-colors text-foreground hover:text-muted-foreground">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">Connect With Me</h3>
              <div className="flex gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="p-4 transition-all duration-300 rounded-lg shadow-md bg-accent hover:scale-110 hover:shadow-xl">
                  <Github size={28} className="text-foreground" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-4 transition-all duration-300 rounded-lg shadow-md bg-accent hover:scale-110 hover:shadow-xl">
                  <Linkedin size={28} className="text-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 border shadow-lg bg-card rounded-2xl border-border">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-muted-foreground">Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 transition-all border rounded-lg bg-background border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 transition-all border rounded-lg bg-background border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 transition-all border rounded-lg resize-none bg-background border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium transition-all duration-300 transform rounded-lg shadow-lg bg-primary text-primary-foreground hover:opacity-90 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          hideClose={dialogStatus === 'success'}
          className={dialogStatus === 'success' ? 'sm:max-w-sm' : 'sm:max-w-md'}
        >
          {dialogStatus === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <div className="flex items-center justify-center rounded-full w-14 h-14 bg-green-500/10">
                <CheckCircle2 className="text-green-500" size={30} />
              </div>
              <DialogTitle className="text-lg">Message Sent</DialogTitle>
              <DialogDescription className="text-sm">
                Thanks for reaching out — I'll get back to you soon.
              </DialogDescription>
            </div>
          ) : (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-full w-9 h-9 bg-destructive/10">
                    <XCircle className="text-destructive" size={20} />
                  </div>
                  <DialogTitle>Something went wrong</DialogTitle>
                </div>
                <DialogDescription>
                  Your message couldn't be sent. Please try again or email me directly.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <button
                  type="button"
                  onClick={() => setDialogOpen(false)}
                  className="px-4 py-2 font-medium transition-all border rounded-lg border-border hover:bg-accent"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleRetry}
                  disabled={isSubmitting}
                  className="px-4 py-2 font-medium transition-all rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? 'Retrying...' : 'Retry'}
                </button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
