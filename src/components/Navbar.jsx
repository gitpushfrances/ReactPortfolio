import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useTheme } from '../hooks/useTheme';
import { personalInfo } from '../data/mock';
import StaggeredMenu from './StaggeredMenu/StaggeredMenu';

const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Stack' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const { theme, toggleTheme } = useTheme();

  // Highlight the sidebar link for whichever section sits mid-viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const themeOptions = ['light', 'dark'].map((option) => (
    <button
      key={option}
      type="button"
      onClick={(e) => option !== theme && toggleTheme(e)}
      aria-pressed={option === theme}
      className={`cursor-target px-2 py-1 rounded transition-colors ${
        option === theme ? 'bg-foreground text-background' : 'hover:text-foreground'
      }`}
    >
      {option}
    </button>
  ));

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed inset-y-0 left-0 z-50 flex-col hidden px-7 py-8 border-r w-56 lg:flex bg-background border-border">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left cursor-target"
        >
          <span className="block text-lg leading-none font-pixel text-foreground">JFE</span>
          <span className="block mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {personalInfo.title}
          </span>
        </button>

        <ul className="flex flex-col gap-3 mt-12">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`cursor-target group flex items-center gap-3 font-mono text-[12px] transition-colors ${
                  activeId === link.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="text-[10px] text-muted-foreground/60">0{i + 1}</span>
                <span className="lowercase">{link.label}</span>
                {activeId === link.id && <span className="w-1.5 h-1.5 rounded-full bg-foreground" />}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4">
          <div className="inline-flex gap-1 p-1 font-mono text-[10px] uppercase tracking-wider border rounded-md border-border text-muted-foreground">
            {themeOptions}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
            {personalInfo.location}
          </p>
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="sticky top-0 z-50 border-b lg:hidden bg-background/80 backdrop-blur-md border-border">
        <div className="flex items-center justify-between h-14 px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-base leading-none font-pixel text-foreground cursor-target"
          >
            JFE
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={(e) => toggleTheme(e)}
              aria-label="Toggle dark mode"
              className="p-2 transition-colors rounded-md cursor-target text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 transition-colors rounded-md cursor-target text-foreground"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {createPortal(
        <StaggeredMenu
          position="right"
          open={isMobileMenuOpen}
          onRequestClose={() => setIsMobileMenuOpen(false)}
          items={navLinks.map((link) => ({
            label: link.label,
            ariaLabel: `Go to ${link.label}`,
            onClick: () => scrollToSection(link.id)
          }))}
          displaySocials={false}
          displayItemNumbering
          isFixed
          className="lg:hidden"
          colors={['hsl(var(--secondary))', 'hsl(var(--background))']}
          accentColor="hsl(var(--foreground))"
        />,
        document.body
      )}
    </>
  );
};

export default Navbar;
