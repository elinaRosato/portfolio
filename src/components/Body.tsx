import React from 'react'
import Hero from './HeroSection'
import About from './AboutSection'
import Projects from './ProjectsSection'
import Footer from './Footer'
import Work from './Work'

type Props = {}

const Body = (props: Props) => {
  return (
    <main className='lg:mx-[1.5vw] lg:border-2 lg:border-x-darkest-dark'>
      <Hero/>
      <Work />
      <About />
      <Projects />
      <Footer />
      { /* Contact */ }
    </main>
  )
}

export default Body