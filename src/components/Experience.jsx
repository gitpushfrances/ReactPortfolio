import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-black mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-black rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      <span className="text-sm">{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <ChevronRight size={20} className="text-black flex-shrink-0 mt-0.5" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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