'use client'

import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Hero from './components/home/hero/Hero'
import About from './components/home/about/About'
import Projects from './components/home/projects/Projects'
import Contact from './components/home/contact/Contact'
import Services from './components/home/services/Services';


type Props = {}

const Home: NextPage = () => {

  const [mousePosition, setMousePosition] = useState ({x:0, y:0})

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({x:e.clientX, y:e.clientY})
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [])

  
  return (
    <main className='overflow-hidden lg:mx-[1.5vw] lg:border-x-2 lg:border-x-darkest-dark'>
      <Hero/>
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  )
}

export default Home
