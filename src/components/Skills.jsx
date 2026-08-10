import React, { useMemo } from 'react';
import { Code, Server, Smartphone, Wrench } from 'lucide-react';
import { skills } from '../data/mock';
import { getTechIcon } from '../lib/techIcons';
import LogoLoop from './LogoLoop/LogoLoop';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', icon: Code, skills: skills.frontend },
    { title: 'Backend', icon: Server, skills: skills.backend },
    { title: 'Mobile', icon: Smartphone, skills: skills.mobile },
    { title: 'Tools & Others', icon: Wrench, skills: skills.tools }
  ];

  const techLogos = useMemo(() => {
    const allSkills = [
      ...skills.frontend,
      ...skills.backend,
      ...skills.mobile,
      ...skills.tools
    ];
    const seen = new Set();
    const unique = [];
    allSkills.forEach(skill => {
      if (!seen.has(skill.name)) {
        seen.add(skill.name);
        unique.push(skill.name);
      }
    });
    return unique.map(name => {
      const Icon = getTechIcon(name);
      return {
        node: (
          <span className="flex items-center gap-3 text-foreground">
            <Icon size={36} />
            <span className="font-mono text-base md:text-lg whitespace-nowrap">{name}</span>
          </span>
        ),
        title: name,
        ariaLabel: name
      };
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 bg-foreground mx-auto"></div>
        </div>
      </div>

      <div className="mb-16 relative left-1/2 -translate-x-1/2 w-screen border-y border-border/50 bg-card/40 backdrop-blur-md shadow-lg overflow-hidden py-10">
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="left"
          gap={64}
          logoHeight={36}
          pauseOnHover
          fadeOut={false}
          ariaLabel="Tech stack"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-border hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent rounded-lg">
                  <category.icon size={28} className="text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = getTechIcon(skill.name);
                  return (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-foreground font-medium">
                          <Icon size={16} className="text-muted-foreground" />
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
