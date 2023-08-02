import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  text: string
}

const AnimatedTitle = ({ text }: Props) => {

  const letters = text.split('')

    const titleContainer = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12
        }
      }
    }
  
    const letterAnimation = {
      hidden: { y: 400 },
      show: {
        y: 0,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 2,
        },
      },
    }

  return (
    <motion.div variants={titleContainer} initial='hidden' animate='show' className={text=="frontend" ? 'text-banner-mobile lg:text-banner-desktop text-transparent font-sans font-black xl:font-black text-stroke overflow-hidden flex ' : 'overflow-hidden flex text-banner-mobile  lg:text-banner-desktop text-darkest-dark font-roboto z-20'}>
      {letters.map((letter, i) => 
        <motion.span variants={letterAnimation} key={i}>{letter}</motion.span>
      )}
    </motion.div>
  )
}

export default AnimatedTitle