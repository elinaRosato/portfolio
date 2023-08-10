import React from 'react'
import Heading from './Heading'
import Year2016 from './Year2016'
import Year2018 from './Year2018'

type Props = {}

const About = (props: Props) => {

  const aboutText = 'font-roboto font-bold text-darkest-dark text-[2vw] leading-[50px]'
  const aboutYear = 'text-[12vw] font-sans font-bold text-stroke-2 text-transparent '
  const aboutSpan = 'text-[2.3vw] font-sans text-stroke text-transparent font-bold'
  const aboutContainer = ' w-full min-h-[70vh] flex justify-between gap-20 items-center'

  return (
    <section id='about' className='font-roboto px-[4vw] py-48' >
      <div className=' snap-start min-h-[95vh] flex flex-col text-left max-w-7xl pt-32 items-center justify-evenly mx-auto' >
        <Heading text="My story" />
        <div className=' flex flex-col gap-20  px-[3vw]'>
          <Year2016 />
          <Year2018 />
          <div className={` ${aboutContainer} snap-center`}>
            <p className={aboutYear}>2020</p>
            <p className={aboutText}> 
              COVID was my chance to make a big      
              <span className={aboutSpan}> change </span> 
              🚀 The uncertainty of the world couldnt shake my determination. Armed with a second-hand computer,  
              <span className={aboutSpan}> YouTube </span>
              became my school 📚 Being a free spirit had its charm, but shaping my 
              <span className={aboutSpan}> future </span> 
              was my new groove.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About