import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yi7tonw',       // Your Service ID
      'template_e5r6yfi',      // Your Template ID
      e.currentTarget,         // Form element reference
      'KrPUQFqVKuxkZvT3C'      // Your Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arunkumar977977@gmail.com',
      link: 'mailto:arunkumar977977@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Arunkumar0977',
      link: 'https://github.com/Arunkumar0977',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/arunkumar',
      link: 'https://www.linkedin.com/in/arunkr0977/',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kanpur, UP, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, or just having a conversation about technology. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-slate-700 transition-all duration-300 group"
                >
                  <div className="bg-cyan-500/20 p-3 rounded-full group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <info.icon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Available for</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Freelance Projects</li>
                <li>• Full-time Opportunities</li>
                <li>• Technical Consultations</li>
                <li>• Collaboration & Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-700 text-center">
        <p className="text-gray-400">
          © 2024 Arun Kumar. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
