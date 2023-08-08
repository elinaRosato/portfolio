import React from 'react'
import Heading from './Heading'

type Props = {}

const About = (props: Props) => {

  const aboutText = 'font-roboto font-bold text-darkest-dark text-4xl leading-[50px]'
  const aboutYear = 'text-banner-desktop font-sans font-bold text-stroke-2 text-transparent '
  const aboutSpan = 'text-5xl font-sans text-stroke text-transparent font-bold'
  const aboutContainer = ' w-full min-h-[60vh] flex justify-between gap-20 items-center'

  return (
    <section id='about' className='font-roboto px-6 py-48' >
      <div className=' snap-start min-h-[95vh] flex flex-col text-left max-w-7xl pt-32 items-center justify-evenly mx-auto' >
        <Heading text="My story" />
        <div className=' flex flex-col gap-20'>
          <div className={` ${aboutContainer}`}>
            <p className={aboutYear}>2016</p>
            <p className={aboutText}>
              I started my 
              <span className={aboutSpan}> Mechanical Engeneering </span> 
              degree with absolutely no clue where life would take me. Algorithms, data structures, 
              <span className={aboutSpan}> Python </span>
              and 
              <span className={aboutSpan}> Haskell </span> 
              became my jam 🤘 
            </p>
          </div>
          <div className={` ${aboutContainer} snap-center`}>
            <p className={aboutText}> 
              The economy in  
              <span className={aboutSpan}> Argentina </span> 
              was a real rollercoaster, so I decided to chase better opportunities 🌍 I packed my bags and embarked on a life-changing journey. 
              <span className={aboutSpan}> Denmark </span>
              and 
              <span className={aboutSpan}> Sweden </span> 
              became my homes, and Ive explored 20+ amazing countries along the way.</p>
              <p className={aboutYear}>2018</p>
          </div>
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