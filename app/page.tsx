import React from 'react'
import Hero from './components/main/Hero'

import Encryption from './components/main/Encryption'
import Projects from './components/main/Projects'
import Footer from './components/main/Footer'
import { ModelAI } from './components/sub/Ai'
import FrontEndSkills from './components/main/FrontEndSkills'




const page = () => {
  return (
    <main className='h-full w-full'>
       <div className=' flex flex-col h-[850px] gap-20'>
        <Hero />
        <FrontEndSkills />
        
        <Encryption />
        <Projects />
        <Footer />
       </div>
   </main>
  )
   
   
}

export default page
