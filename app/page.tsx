import React from 'react'
import Hero from './components/main/Hero'
import Skills from './components/main/Skills'
import Encryption from './components/main/Encryption'
import Projects from './components/main/Projects'
import Footer from './components/main/Footer'

const page = () => {
  return (
    <main className='h-full w-full'>
       <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
       </div>
   </main>
  )
   
   
}

export default page
