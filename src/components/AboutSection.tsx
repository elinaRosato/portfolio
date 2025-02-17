import React from 'react'
import Heading from './Heading'
import About2016 from './About2016'
import About2018 from './About2018'
import About2020 from './About2020'
import AboutNormalText from './AboutNormalText'
import AboutAccent from './AboutAccentText'
import AboutYear from './AboutYear'

type Props = {}

const About = (props: Props) => {
  return (
    <section id='about' className='font-roboto lg:px-[7vw] py-[10vw] lg:py-[0vw] ' >
      <div className='snap-start min-h-[95vh] flex flex-col text-left py-[17vw] lg:py-[8vw] lg:items-center justify-evenly mx-auto' >
        <Heading text="my story" />
        <div className=' flex flex-col gap-[6vw] px-[5vw]'>
          <div className={`min-h-[70vh] flex flex-col p-[3vw] lg:p-0 lg:flex-row justify-center lg:justify-between gap-[7vw] items-center`}>
            <AboutYear year='&' />
            <p>
              <AboutNormalText text='Oh right, I almost forgot to introduce myself. So, this is me—an extremely curious, creative, and tech-obsessed girl. I dedicate my life to exploring different ways to ' />
              <AboutAccent text=' push the limits of my human experience ' />
              <AboutNormalText text=', and along the way, I’ve discovered 10.76% of the world and too many hobbies I’m genuinely interested in (and had to accept that it’s physically impossible to keep up with them all consistently). But there’s one passion I realized I couldn’t live without: ' />
              <AboutAccent text=' bringing ideas—mine or yours—to life. ' />
              <AboutNormalText text='After spending years as a nomad, I decided to ' />
              <AboutAccent text=' teach myself to code  ' />
              <AboutNormalText text='with nothing but' />
              <AboutAccent text=' free resources and a whole lot of resilience ' />
              <AboutNormalText text='. Getting accepted into Engineering School was one of my biggest achievements (though graduation next year might top it), and I’m loving every step of the way— ' />
              <AboutAccent text=' soaking up knowledge, refining my skills, and constantly evolving ' />
              <AboutNormalText text='. That journey led me here—to a career where creativity meets technology, and where every project is a chance to build something meaningful. ' />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About