import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import mypic from '../mypic_nobg.png'
import { motion } from 'framer-motion'
import AnimatedTitle from './AnimatedTitle'
import Marquee from './Marquee'

type Props = {}

const Hero = (props: Props) => {

  return (
    <section className='snap-start font-sans relative pt-20 h-screen flex flex-col overflow-hidden justify-center lg:justify-start' >
      <div className='relative flex flex-col  '>
        <AnimatedTitle text="creative" className='pl-6 overflow-hidden flex text-banner-mobile  lg:text-[12vw] lg:leading-[12vw] text-darkest-dark font-roboto ' />
        <Marquee />
        <AnimatedTitle text="developer" className='pl-6 lg:pl-48 overflow-hidden flex text-banner-mobile  lg:text-[12vw] lg:leading-[12vw] text-darkest-dark font-roboto '/>
      </div>
      <div className='absolute self-start  lg:self-end lg:top-[20vh] rotate-12 rounded-full ml-[1.75vw] lg:mr-[7vw]'>
        <p className=' p-[0.5vw] text-sm lg:text-[1.6vw] text-center font-semibold text-accent font-handwritten '>based in Malmö</p>
      </div>
      <div className='absolute self-start  lg:self-end lg:bottom-[12vh] ml-[1.75vw] lg:mr-[6vw]'>
        <svg className="text-darkest-dark h-[6vw] w-[6vw] transform -rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewBox="0 0 24 24">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 8 8 12 12 16" />
          <line x1="16" y1="12" x2="8" y2="12" />
        </svg>
      </div>
      <div className="relative lg:absolute w-[100vw] h-[100vw] lg:w-[32vw] lg:h-[32vw] lg:left-0 lg:right-0 lg:mx-auto z-0 bottom-0  m-auto ">
        <Image src={mypic} layout='fill' objectFit='cover' alt='Elina Rosato'/>
      </div>
    </section>

  )
}

export default Hero