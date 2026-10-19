import React from 'react';
import { skills } from '../data/mock';
import { getTechIcon } from '../lib/techIcons';
import SectionHeading from './SectionHeading';

const groups = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'tools', label: 'Tools & IoT' }
];

const Skills = () => {
  return (
    <section id="skills" className="border-t py-14 border-border scroll-mt-14 lg:scroll-mt-0">
      <SectionHeading index="03" title="stack" />

      <div className="space-y-6">
        {groups.map(({ key, label }) => (
          <div key={key} className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:items-baseline">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
              {label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skills[key].map(({ name }) => {
                const Icon = getTechIcon(name);
                return (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/40"
                  >
                    <Icon size={12} />
                    {name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
