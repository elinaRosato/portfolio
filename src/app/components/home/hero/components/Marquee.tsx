import { motion } from 'framer-motion'
import React, {useEffect, useState, useRef} from 'react'
import AnimatedTitle from '../../../global/AnimatedTitle';

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
    <div className='flex overflow-hidden w-screen'>
      <motion.ul ref={marqueeRef} variants={marqueeVariants}  animate='animate' className=' flex justify-around flex-shrink-0 min-w-full gap-40 px-20'>
        <AnimatedTitle text="software" className='text-[22vw] lg:text-[14vw] md-portrait:text-12xl leading-none text-transparent font-sans font-bold xl:font-bold text-stroke overflow-hidden flex bg' />
        <AnimatedTitle text="software" className='text-[22vw] lg:text-[14vw] md-portrait:text-12xl leading-none text-transparent font-sans font-bold xl:font-bold text-stroke overflow-hidden flex' />
      </motion.ul>
      <motion.ul variants={marqueeVariants}  animate='animate' className='flex justify-around flex-shrink-0 min-w-full gap-40 px-20' aria-hidden="true">
        <li className='text-[22vw] lg:text-[14vw] md-portrait:text-12xl leading-none text-transparent font-sans xl:font-bold font-bold text-stroke'>software</li>
        <li className='text-[22vw] lg:text-[14vw] md-portrait:text-12xl leading-none text-transparent font-sans font-bold xl:font-bold text-stroke'>software</li>
      </motion.ul>
    </div>
  )
}

export default Marquee