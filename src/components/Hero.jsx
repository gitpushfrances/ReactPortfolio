import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full w-96 h-96 bg-black/5 -top-48 -left-48 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-6 py-20 mx-auto max-w-7xl lg:px-8">
        <div className="space-y-8 text-center">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-black md:text-7xl lg:text-8xl animate-fade-in">
              {personalInfo.name}
            </h1>
            <div className="w-24 h-1 mx-auto bg-black"></div>
            <h2 className="text-2xl font-light text-gray-700 md:text-3xl lg:text-4xl animate-fade-in-delay">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 md:text-xl animate-fade-in-delay-2">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 font-medium text-white transition-all duration-300 transform bg-black rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 font-medium text-black transition-all duration-300 transform bg-white border-2 border-black rounded-lg hover:bg-black hover:text-white hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-delay-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-xl hover:scale-110"
            >
              <Github size={24} className="text-black" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-xl hover:scale-110"
            >
              <Linkedin size={24} className="text-black" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-xl hover:scale-110"
            >
              <Mail size={24} className="text-black" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
          >
            <ChevronDown size={32} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;