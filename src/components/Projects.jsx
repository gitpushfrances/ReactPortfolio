import React, { useState } from 'react';
import { FolderGit2, Calendar, Tag, ChevronRight, X, Github } from 'lucide-react';
import { projects } from '../data/mock';
import { getTechIcon } from '../lib/techIcons';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-foreground mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 size={28} className="text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Tag size={14} />
                        <span>{project.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1 bg-accent text-accent-foreground text-sm rounded-lg border border-border"
                      >
                        <Icon size={14} />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <button className="flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300">
                  View Details
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <FolderGit2 size={32} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Tag size={14} />
                          <span>{selectedProject.category}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{selectedProject.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-accent rounded-lg transition-colors"
                  >
                    <X size={24} className="text-muted-foreground" />
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight size={20} className="text-foreground flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span
                          key={idx}
                          className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                        >
                          <Icon size={16} />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-foreground hover:bg-accent transition-colors font-medium"
                  >
                    <Github size={18} />
                    View Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
