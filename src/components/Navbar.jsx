import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useTheme } from '../hooks/useTheme';
import StaggeredMenu from './StaggeredMenu/StaggeredMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-lg'
          : 'bg-background/60 backdrop-blur-md'
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold transition-colors text-foreground hover:text-muted-foreground"
          >
            JFE
          </button>

          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm font-medium transition-colors cursor-target text-foreground hover:text-muted-foreground group"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={(e) => toggleTheme(e)}
              aria-label="Toggle dark mode"
              className="p-2 transition-colors border rounded-full border-border hover:bg-accent"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 transition-colors border rounded-full border-border hover:bg-accent"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 transition-colors text-foreground hover:text-muted-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

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
          className="md:hidden"
          colors={['hsl(var(--secondary))', 'hsl(var(--background))']}
          accentColor="hsl(var(--foreground))"
        />,
        document.body
      )}
    </nav>
  );
};

export default Navbar;