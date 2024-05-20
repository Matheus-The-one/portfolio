import React from 'react'
import Hero from './components/main/Hero'
import Skills from './components/main/Skills'

const page = () => {
  return (
    <main className='h-full w-full'>
       <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <Skills />
       </div>
   </main>
  )
   
   
}

export default page
