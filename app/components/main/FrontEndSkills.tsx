import React from 'react';
import { ModelAI } from '../sub/Ai';

interface Skill {
  name: string;
  image: string;
  description: string;
}

interface SkillSection {
  title: string;
  skills: Skill[];
}

const skillSections: SkillSection[] = [
  {
    title: 'Frontend Skills',
    skills: [
      { name: 'JavaScript', image: '/js.png', description: 'Dynamic scripting language' },
      { name: 'React', image: '/react.png', description: 'UI library for building interfaces' },
      { name: 'TypeScript', image: '/ts.png', description: 'Typed superset of JavaScript' },
      { name: 'Tailwind CSS', image: '/tailwind.png', description: 'Utility-first CSS framework' },
      { name: 'Next', image: '/next.png', description: 'React framework' },
      { name: 'redux', image: '/redux.png', description: 'Utility-first  framework' },
      
    ],
  },
  {
    title: 'Backend Skills',
    skills: [
      { name: 'Node.js', image: '/node-js.png', description: 'JavaScript runtime for server-side development' },
      { name: 'Express', image: '/express.png', description: 'Web application framework for Node.js' },
      { name: 'MongoDB', image: '/mongodb.png', description: 'NoSQL database for modern applications' },
      { name: 'GraphQL', image: '/graphql.png', description: 'Query language for APIs' },
      { name: 'mysql', image: '/mysql.png', description: 'Query language ' },
      { name: 'Oracle', image: '/oracle.png', description: 'database managment tool' },
      { name: 'Prisma', image: '/prisma.webp', description: 'Utility-first CSS framework' },
      { name: 'Docker', image: '/docker.webp', description: 'Platform for containerized applications' },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Git', image: '/gitwhite.png', description: 'Version control system' },
      
      { name: 'AWS', image: '/AWS.webp', description: 'Cloud computing platform' },
      { name: 'Figma', image: '/figma.png', description: 'Collaborative interface design tool' },
      { name: 'Firebase', image: '/Firebase.png', description: 'Collaborative interface design tool' },
      { name: 'Vercel', image: '/vercel.webp', description: 'deplying for animation' },
      { name: 'Blender', image: '/blender.webp', description: 'Utility-first CSS framework' },
      { name: 'Framer-Motion', image: '/framer.png', description: 'framing platform' },
      
    ],
  },
];

interface SkillSlideshowProps {
  skills: Skill[];
}

const SkillSlideshow: React.FC<SkillSlideshowProps> = ({ skills }) => (
  <div className="overflow-hidden whitespace-nowrap">
    <div className="inline-flex animate-scroll">
      {[...skills, ...skills].map((skill, index) => (
        <div
          key={index}
          className="inline-flex flex-col items-center p-3 mx-2 bg-gradient-to-b from-black/60 to-gray-900/60 rounded-xl border border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
        >
          <img
            src={skill.image}
            alt={skill.name}
            className="w-10 h-10 md:w-12 md:h-12 object-contain mb-2 transition-all duration-500 group-hover:brightness-125"
          />
          <h4 className="text-xs md:text-sm font-bold text-gray-300 group-hover:text-purple-300 transition-colors duration-500">{skill.name}</h4>
          <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const SkillsShowcase: React.FC = () => (
  <div className='w-full min-h-screen p-6 md:p-10 bg-gradient-to-br from-gray-900 via-black to-indigo-900 flex flex-col items-center justify-center gap-6 md:gap-10 relative overflow-hidden'>
    <div className="stars absolute inset-0"></div>
    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2 z-10">
      My Skills
    </h2>
    <p className="text-gray-300 text-center max-w-2xl mb-8 z-10">
      Crafting immersive digital experiences with cutting-edge technologies
    </p>
    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 z-10'>
      <div className='w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-blue-500/20 transition-all duration-500 hover:shadow-blue-500/30 hover:scale-[1.02]'>
        <ModelAI />
      </div>
      <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative bg-gradient-to-tr from-gray-900 via-purple-900/30 to-indigo-900/30 shadow-2xl shadow-purple-500/10 border border-purple-500/20">
        <div className="absolute inset-0 flex flex-col">
          {skillSections.map((section, index) => (
            <div key={index} className="flex-1 overflow-hidden">
              <h3 className="text-xl font-bold text-purple-300 mb-2 pl-4 pt-2">{section.title}</h3>
              <SkillSlideshow skills={section.skills} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SkillsShowcase;