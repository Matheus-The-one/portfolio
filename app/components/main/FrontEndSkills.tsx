import React from 'react';
import { ModelAI } from '../sub/Ai';

const skills = [
  { name: 'HTML', image: '/html.png' },
  { name: 'CSS', image: '/css.png' },
  { name: 'JavaScript', image: '/js.png' },
  { name: 'React', image: '/react.png' },
  { name: 'TypeScript', image: '/ts.png' },
  { name: 'Tailwind CSS', image: '/tailwind.png' },
  // Add more skills here
];

const FrontEndSkills = () => {
  return (
    <div className='w-full p-4 md:p-8 bg-gradient-to-br from-gray-900 to-black flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8'>
      <div className='w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 border border-blue-500/30 transition-all duration-300 hover:shadow-blue-500/40'>
        <ModelAI />
      </div>
      <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden relative bg-gradient-to-tr from-purple-900/80 to-indigo-900/80 shadow-lg shadow-purple-500/20 border border-purple-500/30">
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="flex animate-scroll space-x-8 py-4">
            {[...skills, ...skills].map((skill, index) => (
              <div 
                className="flex flex-col items-center p-2 md:p-4 bg-black/50 rounded-lg border border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-500/30 group" 
                key={index}
              >
                <img src={skill.image} alt={skill.name} className="w-8 h-8 md:w-12 md:h-12 object-contain mb-2 transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-sm md:text-base font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndSkills;