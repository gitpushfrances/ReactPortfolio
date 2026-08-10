import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mock';
import DecryptedText from './ui/DecryptedText';

const NAME_SPEED = 40;
const TITLE_SPEED = 30;
const GAP_AFTER_NAME = 300;
const GAP_AFTER_TITLE = 250;

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const nameDuration = personalInfo.name.length * NAME_SPEED + GAP_AFTER_NAME;
    const titleDuration = personalInfo.title.length * TITLE_SPEED + GAP_AFTER_TITLE;

    const titleTimer = setTimeout(() => setShowTitle(true), nameDuration);
    const doneTimer = setTimeout(() => setIsDone(true), nameDuration + titleDuration);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full w-96 h-96 bg-foreground/5 -top-48 -left-48 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-6 py-20 mx-auto max-w-7xl lg:px-8">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-emerald-600 dark:text-emerald-400">guest@portfolio</span>
              <span className="text-muted-foreground">:~$</span> whoami
            </p>
            <h1 className="font-mono text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl min-h-[1.2em]">
              <DecryptedText
                text={personalInfo.name}
                animateOn="view"
                sequential
                revealDirection="start"
                speed={NAME_SPEED}
                className="text-foreground"
                encryptedClassName="text-muted-foreground/70"
              />
            </h1>
            <div className="w-24 h-1 mx-auto bg-foreground"></div>
            <h2 className="font-mono text-2xl font-light text-muted-foreground md:text-3xl lg:text-4xl min-h-[1.2em]">
              {showTitle && (
                <DecryptedText
                  text={personalInfo.title}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={TITLE_SPEED}
                  className="text-muted-foreground"
                  encryptedClassName="text-muted-foreground/50"
                />
              )}
            </h2>
          </div>

          <p
            className={`max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl transition-opacity duration-700 ${
              isDone ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {personalInfo.tagline}
          </p>

          <div
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-opacity duration-700 delay-150 ${
              isDone ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 font-medium transition-all duration-300 transform rounded-lg shadow-lg text-primary-foreground bg-primary hover:opacity-90 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 font-medium transition-all duration-300 transform bg-transparent border-2 rounded-lg text-foreground border-foreground hover:bg-foreground hover:text-background hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div
            className={`flex items-center justify-center gap-6 transition-opacity duration-700 delay-300 ${
              isDone ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="p-3 transition-all duration-300 border rounded-full shadow-md bg-card border-border hover:shadow-xl hover:scale-110">
              <Github size={24} className="text-foreground" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-3 transition-all duration-300 border rounded-full shadow-md bg-card border-border hover:shadow-xl hover:scale-110">
              <Linkedin size={24} className="text-foreground" />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="p-3 transition-all duration-300 border rounded-full shadow-md bg-card border-border hover:shadow-xl hover:scale-110">
              <Mail size={24} className="text-foreground" />
            </a>
          </div>

          {isDone && (
            <button
              onClick={() => scrollToSection('about')}
              className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
            >
              <ChevronDown size={32} className="text-muted-foreground" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;