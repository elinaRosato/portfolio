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
      <div className='relative pt-20'>
        <div className='relative h-screen pt-0 flex flex-col overflow-hidden justify-center lg:justify-start'>
          <div className='relative flex flex-col  '>
            <div className='pl-6 '>
              <AnimatedTitle text="creative" />
            </div>
            <Marquee />
            <div className=' pl-6 lg:pl-48 '>
              <AnimatedTitle text="developer" />
            </div>
          </div>
          <div className='absolute self-start h-20 w-20 lg:self-end lg:bottom-20 lg:w-40 lg:h-40 rounded-full flex items-center justify-center ml-6 lg:mr-28 bg-slate-50'>
            <p className=' p-2 text-sm lg:text-2xl text-center font-semibold text-darkest-dark font-sans '>Based in Malmö</p>
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