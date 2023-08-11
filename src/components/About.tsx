import React from 'react'
import Heading from './Heading'
import Year2016 from './Year2016'
import Year2018 from './Year2018'
import Year2020 from './Year2020'

type Props = {}

const About = (props: Props) => {
  return (
    <section id='about' className='font-roboto px-[7vw] py-[10vw] ' >
      <div className='snap-start min-h-[95vh] flex flex-col text-left pt-[8vw] items-center justify-evenly mx-auto' >
        <Heading text="my story" />
        <div className=' flex flex-col gap-[6vw] px-[3vw]'>
          <Year2016 />
          <Year2018 />
          <Year2020 />
        </div>
      </div>
    </section>
  )
}

export default About