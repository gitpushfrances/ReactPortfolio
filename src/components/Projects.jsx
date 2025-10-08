import React, { useState } from 'react';
import { FolderGit2, Calendar, Tag, ChevronRight, X } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FolderGit2 size={28} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
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

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View details */}
                <button className="flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300">
                  View Details
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                      <FolderGit2 size={32} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-black mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
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
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Description</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <ChevronRight size={20} className="text-black flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;