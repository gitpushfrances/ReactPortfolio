import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/mock';
import SectionHeading from './SectionHeading';

const Card = ({ icon: Icon, title, meta, sub }) => (
  <div className="relative flex flex-col items-center px-4 py-5 text-center rounded-xl bg-gradient-to-b from-muted/60 to-background shadow-[0_8px_22px_-14px_rgba(0,0,0,0.25)]">
    <span aria-hidden="true" className="pointer-events-none absolute inset-[5px] rounded-lg border border-border/70" />
    <span className="relative flex items-center justify-center border rounded-md h-9 w-9 border-border bg-background">
      <Icon size={17} className="text-foreground" />
    </span>
    <h3 className="relative mt-3 text-[13px] font-semibold leading-snug text-foreground">{title}</h3>
    <p className="relative mt-1 font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground">{meta}</p>
    {sub && <p className="relative mt-2 font-mono text-[10px] text-muted-foreground/70">{sub}</p>}
  </div>
);

const Education = () => {
  return (
    <section id="education" className="border-t py-14 border-border scroll-mt-14 lg:scroll-mt-0">
      <SectionHeading index="04" title="education" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Card
          icon={GraduationCap}
          title={education.degree}
          meta={education.institution}
          sub={education.duration}
        />
        {education.certifications.map((cert) => (
          <Card key={cert.name} icon={Award} title={cert.name} meta={cert.issuer} sub={cert.year} />
        ))}
      </div>
    </section>
  );
};

export default Education;
