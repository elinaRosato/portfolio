import { motion } from 'framer-motion'
import React, {useEffect, useState, useRef} from 'react'
import AnimatedTitle from './AnimatedTitle';

type Props = {}

const Marquee = (props: Props) => {

  const marqueeRef = useRef<HTMLUListElement>(null);
  const [ulWidth, setUlWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setUlWidth(marqueeRef.current.offsetWidth);
      console.log(ulWidth)
    }
  }, []);

  const marqueeVariants = {
    animate: {
      x: [0, -ulWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
          delay: 2
        },
      },
    },
  }

  return (
    <div className='flex overflow-hidden w-screen '>
      <motion.ul ref={marqueeRef} variants={marqueeVariants}  animate='animate' className=' flex justify-around flex-shrink-0 min-w-full gap-40 px-20'>
        <AnimatedTitle text="frontend" />
        <AnimatedTitle text="frontend" />
      </motion.ul>
      <motion.ul variants={marqueeVariants}  animate='animate' className='flex justify-around flex-shrink-0 min-w-full gap-40 px-20' aria-hidden="true">
        <li className='text-banner-mobile lg:text-banner-desktop text-transparent font-sans xl:font-black font-black text-stroke'>frontend</li>
        <li className='text-banner-mobile lg:text-banner-desktop text-transparent font-sans font-black xl:font-black text-stroke'>frontend</li>
      </motion.ul>
    </div>
  )
}

export default Marquee