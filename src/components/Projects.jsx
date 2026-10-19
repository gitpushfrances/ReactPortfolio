import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/mock';
import { getTechIcon } from '../lib/techIcons';
import SectionHeading from './SectionHeading';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="border-t py-14 border-border scroll-mt-14 lg:scroll-mt-0">
      <SectionHeading index="01" title="projects">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {projects.length} total
        </span>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
            className="flex flex-col text-left transition-colors border cursor-target group rounded-xl border-border p-3.5 hover:border-foreground/40"
          >
            <div className="flex items-start justify-between w-full gap-2">
              <span className="font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground">
                {project.category}
              </span>
              <ArrowUpRight
                size={14}
                className="transition-transform shrink-0 text-muted-foreground/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              />
            </div>
            <h3 className="mt-2 text-[14px] font-medium leading-snug text-foreground">{project.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center justify-between w-full gap-2 pt-3 mt-auto">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 truncate">
                {project.technologies.slice(0, 3).join(' · ')}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/70 shrink-0">{project.year}</span>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto w-[calc(100%-2rem)] rounded-xl">
          {selectedProject && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {selectedProject.category} · {selectedProject.year}
              </p>
              <DialogTitle className="mt-2 text-xl font-semibold leading-snug pr-6">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="mt-3 text-[14px] leading-relaxed">
                {selectedProject.description}
              </DialogDescription>

              <h4 className="mt-6 mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Key features
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-[13.5px] leading-relaxed text-foreground">
                    <span className="font-mono text-[11px] text-muted-foreground/70 pt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 mb-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-[12px] text-muted-foreground"
                    >
                      <Icon size={12} />
                      {tech}
                    </span>
                  );
                })}
              </div>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target inline-flex items-center gap-1.5 mt-6 px-3 py-2 rounded-md bg-foreground text-background font-mono text-[11px] uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  view repository <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
