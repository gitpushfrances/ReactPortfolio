import React, { useMemo } from 'react';

import { skills } from '../data/mock';
import { getTechIcon } from '../lib/techIcons';
import LogoLoop from './LogoLoop/LogoLoop';

const Skills = () => {


  const buildLogos = (list) =>
    list.map(({ name }) => {
      const Icon = getTechIcon(name);
      return {
        node: (
          <span className="flex items-center gap-3 px-5 py-3 border rounded-full bg-card/60 border-border/40 text-foreground">
            <Icon size={44} />
            <span className="font-mono text-lg md:text-xl whitespace-nowrap">{name}</span>
          </span>
        ),
        title: name,
        ariaLabel: name
      };
    });

  const frontendLogos = useMemo(() => buildLogos(skills.frontend), []);
  const backendLogos = useMemo(() => buildLogos(skills.backend), []);
  const toolsLogos = useMemo(
    () => buildLogos([...skills.mobile, ...skills.tools]),
    []
  );

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 mx-auto bg-foreground"></div>
        </div>
      </div>

      <div className="relative w-screen py-10 mb-16 space-y-8 overflow-hidden -translate-x-1/2 left-1/2">
        <LogoLoop
          logos={frontendLogos}
          speed={70}
          direction="left"
          gap={64}
          logoHeight={44}
          pauseOnHover
          fadeOut={false}
          ariaLabel="Frontend stack"
        />
        <LogoLoop
          logos={backendLogos}
          speed={70}
          direction="left"
          gap={64}
          logoHeight={44}
          pauseOnHover
          fadeOut={false}
          ariaLabel="Backend stack"
        />
        <LogoLoop
          logos={toolsLogos}
          speed={70}
          direction="right"
          gap={64}
          logoHeight={44}
          pauseOnHover
          fadeOut={false}
          ariaLabel="Tools and mobile stack"
        />
      </div>

    </section>
  );
};

export default Skills;
