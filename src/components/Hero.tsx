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
    <section className='snap-start font-sans ' >
      <div className='relative '>
        <div className='relative pt-20 h-screen flex flex-col overflow-hidden justify-center lg:justify-start'>
          <div className='relative flex flex-col  '>
            <div className='pl-6 '>
              <AnimatedTitle text="creative" />
            </div>
            <Marquee />
            <div className=' pl-6 lg:pl-48 '>
              <AnimatedTitle text="developer" />
            </div>
          </div>
          <div className='absolute self-start  lg:self-end lg:top-[20vh] rotate-12 rounded-full ml-6 lg:mr-28'>
            <p className=' p-2 text-sm lg:text-2xl text-center font-semibold text-accent font-handwritten '>based in Malmö</p>
          </div>
          <div className='absolute self-start  lg:self-end lg:bottom-[12vh]  ml-6 lg:mr-32'>
            <svg className="text-darkest-dark h-24 w-24 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewBox="0 0 24 24">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 8 8 12 12 16" />
              <line x1="16" y1="12" x2="8" y2="12" />
            </svg>
          </div>
          <div className="relative lg:absolute w-[100vw] h-[100vw] lg:w-128 lg:h-128 lg:left-0 lg:right-0 lg:mx-auto z-0 bottom-0  m-auto ">
            <Image src={mypic} layout='fill' objectFit='cover' alt='Elina Rosato'/>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero