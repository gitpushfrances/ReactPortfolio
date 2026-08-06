import React from 'react';
import { User, MapPin, Award } from 'lucide-react';
import { personalInfo, education } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 bg-foreground mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-muted to-accent rounded-2xl flex items-center justify-center shadow-2xl">
              <User size={120} className="text-muted-foreground" />
            </div>

            <div className="space-y-3 text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Award size={20} />
                <span>{education.degree}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="bg-muted/50 p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">{education.degree}</p>
                <p className="text-muted-foreground">{education.institution}</p>
                <p className="text-muted-foreground text-sm">{education.duration}</p>
              </div>

              {education.certifications && education.certifications.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                  {education.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2 mb-2">
                      <Award size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">{cert.name}</p>
                        <p className="text-muted-foreground text-sm">{cert.issuer} - {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
