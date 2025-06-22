import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  const stats = [{
    number: '4',
    label: 'Completed Projects',
    suffix: ''
  }, {
    number: '5',
    label: 'Client Satisfaction',
    suffix: '%'
  }, {
    number: '1',
    label: 'Years of Experience',
    suffix: '+'
  }];
  return <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">me</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">I’m a B.Tech Computer Science student specializing in IoT, with a strong background in programming and web development. I’ve built several real-world projects that blend IoT hardware with software solutions, demonstrating my ability to solve practical problems.

Driven by curiosity and a passion for technology, I continuously explore new tools and trends to build efficient, future-ready applications. From responsive web interfaces to smart IoT systems, I enjoy creating solutions that make a meaningful impact.

          </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey started with a curiosity about how things work, which led me to explore the fascinating world of IoT and web technologies. I believe in continuous learning and staying updated with the latest technological trends.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
              <p className="text-cyan-400 italic text-lg">
                "Innovation distinguishes between a leader and a follower. I strive to be at the forefront of technological advancement."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => <Card key={index} className="bg-slate-700/50 border-slate-600 text-center group hover:bg-slate-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;