import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { experience } from '../data/mock';
import SectionHeading from './SectionHeading';

const startYear = (duration) => duration.match(/\d{4}/)?.[0] ?? '';

const Experience = () => {
  const [openId, setOpenId] = useState(experience[0]?.id ?? null);

  return (
    <section id="experience" className="border-t py-14 border-border scroll-mt-14 lg:scroll-mt-0">
      <SectionHeading index="02" title="experience">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {experience.length} roles
        </span>
      </SectionHeading>

      <div className="border-y divide-y divide-border border-border">
        {experience.map((exp) => {
          const isOpen = openId === exp.id;
          return (
            <div key={exp.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : exp.id)}
                aria-expanded={isOpen}
                className="grid items-baseline w-full grid-cols-12 gap-3 text-left transition-colors cursor-target py-2.5 hover:bg-muted/50"
              >
                <span className="col-span-2 font-mono text-[11px] text-muted-foreground/70">
                  {startYear(exp.duration)}
                </span>
                <span className="col-span-9 sm:col-span-5 text-[14px] font-medium text-foreground">
                  {exp.position}
                </span>
                <Plus
                  size={13}
                  className={`col-span-1 sm:order-last justify-self-end self-center text-muted-foreground transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
                <span className="col-span-10 col-start-3 sm:col-start-auto sm:col-span-4 text-[13px] text-muted-foreground sm:text-right">
                  {exp.company}
                </span>
              </button>

              {isOpen && (
                <div className="grid grid-cols-12 gap-3 pb-5">
                  <div className="col-span-12 sm:col-span-10 sm:col-start-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {exp.duration} · {exp.type}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted-foreground">
                          <span aria-hidden="true" className="text-muted-foreground/50">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
