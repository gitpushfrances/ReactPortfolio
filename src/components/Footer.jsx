import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-emerald-600 dark:text-emerald-400">guest@portfolio</span>
            <span className="text-muted-foreground">:~$</span> echo "thanks for stopping by"
          </p>

          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={"mailto:" + personalInfo.email} className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Mail size={18} />
            </a>
          </div>

          <div className="text-center space-y-1">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Built with React, Tailwind and a bit too much coffee
            </p>
          </div>
        </div>

        <button onClick={scrollToTop} aria-label="Back to top" className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-accent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1 shadow-md">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
