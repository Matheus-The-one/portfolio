import React from 'react';
import { ModelAI } from '../sub/Ai';

const skills = [
  { name: 'JavaScript', image: '/js.png', description: 'Dynamic scripting language' },
  { name: 'React', image: '/react.png', description: 'UI library for building interfaces' },
  { name: 'TypeScript', image: '/ts.png', description: 'Typed superset of JavaScript' },
  { name: 'Tailwind CSS', image: '/tailwind.png', description: 'Utility-first CSS framework' },
  { name: 'HTML', image: '/html.png', description: 'Markup language for web pages' },
  { name: 'CSS', image: '/css.png', description: 'Style sheet language for design' },
];

const FrontEndSkills = () => {
  return (
    <div className='w-full min-h-screen p-6 md:p-10 bg-gradient-to-br from-gray-900 via-black to-indigo-900 flex flex-col items-center justify-center gap-6 md:gap-10 relative overflow-hidden'>
      <div className="stars absolute inset-0"></div>
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2 z-10">
        Frontend Skills
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mb-8 z-10">
        Crafting immersive digital experiences with cutting-edge web technologies
      </p>
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 z-10'>
        <div className='w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-blue-500/20 transition-all duration-500 hover:shadow-blue-500/30 hover:scale-[1.02]'>
          <ModelAI />
        </div>
        <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative bg-gradient-to-tr from-gray-900 via-purple-900/30 to-indigo-900/30 shadow-2xl shadow-purple-500/10 border border-purple-500/20">
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div className="flex animate-scroll space-x-12 py-6">
              {[...skills, ...skills].map((skill, index) => (
                <div 
                  className="flex flex-col items-center p-4 bg-gradient-to-b from-black/60 to-gray-900/60 rounded-xl border border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group" 
                  key={index}
                >
                  <img 
                    src={skill.image} 
                    alt={skill.name} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain mb-3 transition-all duration-500 group-hover:brightness-125" 
                  />
                  <h3 className="text-sm md:text-base font-bold text-gray-300 group-hover:text-purple-300 transition-colors duration-500">{skill.name}</h3>
                  <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndSkills;