import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const Nav = (props: Props) => {
  const menuSlide = {
    initial: {
      x: '100%',
    },
    animate: {
      x: '0%',
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    },
    exit: {
      x: '100%',
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    }
  }

  const linkContainer = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  }

  const linkVariants = {
    initial: {
      x: '80px',
    },
    animate: {
      x: '0px',
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    },
    exit: {
      x: '80px',
      transition: {
        duration: 1.2,
        ease: [0.76, 0.01, 0.24, 1]
      }
    }
  }

  return (
  
  <motion.div variants={menuSlide} initial="initial" animate="animate" exit="exit"  className=' h-full fixed right-0 bg-slate-200 flex items-start justify-between px-10 mx-auto z-20 border-2 border-x-darkest-dark'>
    <motion.div variants={linkContainer} initial="initial" animate="animate" exit="exit" className='flex flex-col justify-between items-start gap-8 pt-16'>
      <motion.p variants={linkVariants} initial="initial" animate="animate" exit="exit" className="text-xl text-darkest-dark font-sans border-b-darkest-dark border-b-2 w-full">Menu</motion.p>
      <motion.div variants={linkVariants} >
        <Link href="#about"><button className='text-4xl text-darkest-dark font-roboto w-full' >My story</button></Link>
      </motion.div>
      <motion.div variants={linkVariants} >
        <Link href="#about"><button className='text-4xl text-darkest-dark font-roboto w-full' >Portfolio</button></Link>
      </motion.div>
      <motion.div variants={linkVariants} >
        <Link href="#about"><button className='text-4xl text-darkest-dark font-roboto w-full' >Skills</button></Link>
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default Nav