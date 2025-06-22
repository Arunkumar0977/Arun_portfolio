
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Responsive and modern websites using HTML, CSS, JavaScript, React, Node.js. Creating seamless user experiences with cutting-edge technologies.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'SEO Friendly'],
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Custom IoT-based applications for health monitoring, automation, and real-time data acquisition using microcontrollers and sensors.',
      features: ['Hardware Integration', 'Sensor Networks', 'Real-time Monitoring', 'Data Analytics'],
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development solutions with modern frameworks and technologies. Building scalable and maintainable applications.',
      features: ['Custom Applications', 'API Development', 'Database Design', 'Cloud Integration'],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <service.icon className="text-cyan-400" size={32} />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
