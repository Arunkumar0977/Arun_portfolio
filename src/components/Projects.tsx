
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Language Translation with Machine Learning',
      description: 'Real-time multilingual translation system using advanced NLP models including LSTM, BERT, and T5 for accurate and contextual translations.',
      technologies: ['Python', 'TensorFlow', 'Hugging Face', 'NLTK', 'SpaCy'],
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    },
    {
      title: 'COVID-19 IoT Patient Monitoring System',
      description: 'Comprehensive health tracking system using ESP8266 and various sensors for real-time patient monitoring with web dashboard.',
      technologies: ['ESP8266', 'Arduino IDE', 'MAX30100', 'DHT11', 'DS18B20', 'HTML/CSS/JS'],
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    },
    {
      title: 'Netflix Clone',
      description: 'Feature-rich streaming web application with user authentication, movie browsing, and content management using modern web technologies.',
      technologies: ['React', 'Node.js', 'HTML/CSS', 'JavaScript', 'Firebase', 'REST API'],
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my technical projects and innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Ongoing' 
                    ? 'bg-blue-500/80 text-white' 
                    : 'bg-green-500/80 text-white'
                }`}>
                  {project.status}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-600">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
