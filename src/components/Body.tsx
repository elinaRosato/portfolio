import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'

type Props = {}

const Body = (props: Props) => {
  return (
    <div className='lg:mx-6 lg:border-2 lg:border-x-darkest-dark'>
      <Hero/>
      <About />
      <Projects />
      { /* Skills */ }
      { /* Contact */ }
      { /* Footer */ }
    </div>
  )
}

export default Body