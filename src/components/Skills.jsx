import React from 'react';
import { Code, Server, Smartphone, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: skills.frontend,
      color: 'from-gray-100 to-gray-200'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'from-gray-200 to-gray-300'
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: skills.mobile,
      color: 'from-gray-100 to-gray-200'
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: skills.tools,
      color: 'from-gray-200 to-gray-300'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                  <category.icon size={28} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;