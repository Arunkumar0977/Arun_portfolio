
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
