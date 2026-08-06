import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '../data/mock';
import { getTechIcon } from '../lib/techIcons';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-foreground mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={18} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} />
                      <span className="text-sm">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight size={20} className="text-foreground flex-shrink-0 mt-0.5" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span
                          key={idx}
                          className="flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full hover:opacity-90 transition-opacity"
                        >
                          <Icon size={14} />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
