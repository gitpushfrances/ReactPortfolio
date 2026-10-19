import React from 'react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-3 py-10 border-t sm:flex-row sm:items-center sm:justify-between border-border font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <p>© {currentYear} {personalInfo.name}</p>
      <p className="text-muted-foreground/70">Built with React + Tailwind</p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="self-start text-left transition-colors cursor-target sm:self-auto hover:text-foreground"
      >
        back to top ↑
      </button>
    </footer>
  );
};

export default Footer;
