import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  text: string,
  className: string
}

const AnimatedTitle = ({ text, className }: Props) => {

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
    <motion.div variants={titleContainer} initial='hidden' animate='show' className={className}>
      {letters.map((letter, i) => 
        <motion.span variants={letterAnimation} key={i}>{letter}</motion.span>
      )}
    </motion.div>
  )
}

export default AnimatedTitle