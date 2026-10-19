import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, CheckCircle2, XCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
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
  const [copied, setCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  const inputClass =
    'w-full px-3 py-2.5 text-[14px] transition-colors border rounded-lg bg-background border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/50';
  const labelClass = 'block mb-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground';

  return (
    <section id="contact" className="border-t py-14 border-border scroll-mt-14 lg:scroll-mt-0">
      <SectionHeading index="05" title="contact" />

      <p className="text-[15px] leading-relaxed text-muted-foreground">
        Have a project in mind or want to collaborate? The fastest way to reach me is email.
      </p>

      <div className="flex flex-col gap-3 p-4 mt-6 border sm:flex-row sm:items-center sm:justify-between rounded-xl border-border">
        <span className="font-mono text-[13px] text-foreground break-all">{personalInfo.email}</span>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={copyEmail}
            className="cursor-target inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'copied' : 'copy'}
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="cursor-target inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-foreground text-background font-mono text-[11px] uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            open mail app <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 font-mono text-[12px] text-muted-foreground">
        <a href={`tel:${personalInfo.phone}`} className="transition-colors cursor-target hover:text-foreground">
          {personalInfo.phone}
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="transition-colors cursor-target hover:text-foreground">
          github ↗
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors cursor-target hover:text-foreground">
          linkedin ↗
        </a>
      </div>

      <h3 className="mt-10 mb-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
        or send a message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>Name</label>
            <input
              type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
              className={`cursor-target ${inputClass}`}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input
              type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
              className={`cursor-target ${inputClass}`}
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea
            id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
            className={`cursor-target resize-none ${inputClass}`}
            placeholder="Tell me about your project..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-target inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-foreground text-background font-mono text-[11px] uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'sending...' : 'send message'}
          <ArrowUpRight size={13} />
        </button>
      </form>

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
