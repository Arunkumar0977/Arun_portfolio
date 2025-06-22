
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Django', 'Flask', 'TensorFlow', 'Express.js'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'MySQL', 'Firebase', 'Arduino IDE', 'ESP8266'],
    },
    {
      category: 'IoT & Hardware',
      skills: ['ESP8266', 'Arduino', 'Sensors', 'Raspberry Pi', 'Microcontrollers', 'Circuit Design'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical expertise and proficiencies that drive my development work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg text-cyan-400 text-center group-hover:text-cyan-300 transition-colors duration-300">
                  {category.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-slate-600/50 rounded-lg p-3 text-center text-gray-300 hover:bg-slate-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 text-lg">
              Technology evolves rapidly, and I'm committed to continuous learning and staying updated with the latest trends in web development, IoT, and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
