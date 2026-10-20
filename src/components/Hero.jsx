import React from 'react';
import { MapPin } from 'lucide-react';
import { personalInfo, experience, projects, skills } from '../data/mock';
import DecryptedText from './ui/DecryptedText';
import GazeHead from './GazeHead';

const techCount = Object.values(skills).reduce((sum, group) => sum + group.length, 0);

const stats = [
  { value: `${experience.length}`, label: 'roles', target: 'experience' },
  { value: `${projects.length}`, label: 'projects', target: 'projects' },
  { value: `${techCount}+`, label: 'technologies', target: 'skills' }
];

const socials = [
  { label: 'github', href: personalInfo.github },
  { label: 'linkedin', href: personalInfo.linkedin },
  { label: 'email', href: `mailto:${personalInfo.email}` }
];

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <div className="relative pt-14 pb-14 sm:pt-24">
        <div className="grid gap-8 sm:grid-cols-[12rem_1fr] sm:items-start sm:gap-10">
          <div className="w-36 sm:w-full reveal d1">
            <div className="relative overflow-hidden border aspect-square rounded-xl border-border">
              <GazeHead
                src={`${process.env.PUBLIC_URL}${personalInfo.avatarSprite}`}
                alt={personalInfo.name}
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            <h1 className="reveal d2 font-pixel text-3xl leading-none sm:text-[2.6rem] text-foreground">
              <DecryptedText
                text={personalInfo.name}
                animateOn="view"
                sequential
                revealDirection="start"
                speed={40}
                className="text-foreground"
                encryptedClassName="text-muted-foreground/60"
              />
            </h1>

            <p className="mt-4 reveal d2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>{personalInfo.title}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={11} />
                {personalInfo.location}
              </span>
            </p>

            <p className="reveal d3 mt-6 text-[15px] leading-relaxed text-foreground">
              {personalInfo.tagline}.
            </p>
            <p className="reveal d4 mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {personalInfo.bio}
            </p>

            <div className="reveal d5 mt-7 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[12px] text-muted-foreground">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="transition-colors cursor-target hover:text-foreground"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 border-t divide-x reveal d5 divide-border border-border">
        {stats.map((stat, i) => (
          <div key={stat.label} className={i === 0 ? 'py-6 pr-3 sm:pr-5' : i === 2 ? 'py-6 pl-3 sm:pl-5' : 'py-6 px-3 sm:px-5'}>
            <button onClick={() => scrollToSection(stat.target)} className="block text-left cursor-target group">
              <span className="text-lg leading-none font-pixel text-foreground">{stat.value}</span>
              <span className="block mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
