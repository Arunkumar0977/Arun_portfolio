
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowDown } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
//       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
//         <div className="text-center lg:text-left animate-fade-in">
//           <h1 className="text-5xl lg:text-7xl font-bold mb-6">
//             Hello<span className="text-cyan-400">.</span>
//           </h1>
//           <div className="text-3xl lg:text-4xl mb-4 text-gray-300">
//             I'm Arun Kumar
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
//             IoT Enthusiast & Web Developer
//           </h2>
//           <p className="text-xl text-gray-400 mb-8 max-w-2xl">
//             Building intelligent systems and seamless web solutions. Passionate about applying innovative technology to create dynamic solutions.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <Button 
//               className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
//               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               View Projects
//             </Button>
//             <Button 
//               variant="outline" 
//               className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300"
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               Contact Me
//             </Button>
//           </div>
//         </div>
        
//         <div className="flex justify-center lg:justify-end">
//           <div className="relative">
//             <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-2 animate-pulse">
//               <div className="w-full h-full rounded-full overflow-hidden">
//                 <img 
//                   src="Arun.jpg" 
//                   alt="Arun Kumar - Profile Picture"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className="absolute -z-10 w-full h-full rounded-full bg-cyan-400/20 blur-xl"></div>
//           </div>
//         </div>
//       </div>
      
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ArrowDown className="text-cyan-400" size={32} />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Hello<span className="text-cyan-400">.</span>
          </h1>
          <div className="text-3xl lg:text-4xl mb-4 text-gray-300">
            I'm Arun Kumar
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
            IoT Enthusiast & Web Developer
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Building intelligent systems and seamless web solutions. Passionate about applying innovative technology to create dynamic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <a 
              href="/Arunkumar_Resume.pdf" 
              download 
              className="px-5 py-1.7 text-lg border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
            Download Resume
            </a>


          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-2 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="Arun.jpg" 
                  alt="Arun Kumar - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full rounded-full bg-cyan-400/20 blur-xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
