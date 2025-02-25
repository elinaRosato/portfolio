import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Curve = (props: Props) => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`

  const curveVariants = {
    initial: {
      d: initialPath
    },
    animate: {
      d: targetPath,
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1],
      }
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    },
  }
  return (
    <svg className='absolute top-0 left-[-99px] fill-darkest-dark h-screen stroke-none w-[100px]'>
      <motion.path variants={curveVariants} initial='initial' animate='animate' exit='exit'></motion.path>
    </svg>
  )
}

export default Curve