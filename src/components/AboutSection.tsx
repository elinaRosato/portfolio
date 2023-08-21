import React from 'react'
import Heading from './Heading'
import About2016 from './About2016'
import About2018 from './About2018'
import About2020 from './About2020'

type Props = {}

const About = (props: Props) => {
  return (
    <section id='about' className='font-roboto lg:px-[7vw] py-[10vw] lg:py-[0vw] ' >
      <div className='snap-start min-h-[95vh] flex flex-col text-left py-[17vw] lg:py-[8vw] lg:items-center justify-evenly mx-auto' >
        <Heading text="my story" />
        <div className=' flex flex-col gap-[6vw] px-[5vw]'>
          <About2016 />
          <About2018 />
          <About2020 />
        </div>
      </div>
    </section>
  )
}

export default About