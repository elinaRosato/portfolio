import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'

type Props = {}

const Body = (props: Props) => {
  return (
    <main className='lg:mx-[1.5vw] lg:border-2 lg:border-x-darkest-dark'>
      <Hero/>
      <About />
      <Projects />
      { /* Skills */ }
      { /* Contact */ }
      { /* Footer */ }
    </main>
  )
}

export default Body