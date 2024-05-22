import React from 'react'
import Hero from './components/main/Hero'

import Encryption from './components/main/Encryption'
import Projects from './components/main/Projects'
import Footer from './components/main/Footer'

import Grid from './components/main/Grid'

const page = () => {
  return (
    <main className='h-full w-full'>
       <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <Grid/>
        <Encryption />
        <Projects />
        <Footer />
       </div>
   </main>
  )
   
   
}

export default page
