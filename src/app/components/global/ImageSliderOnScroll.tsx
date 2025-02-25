import React, {useEffect, useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'


interface Images {
  src: string,
  alt: string,
  mobile: boolean,
}

type Props = {
  images: Images[]
}

const ImageSliderOnScroll = ({images}: Props) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll() 
  const translateX = useTransform(scrollYProgress, [0, 1], ['-10%', '-100%'])
  return (
    <motion.div ref={ref} style={images.length>1 ? { x: translateX } : {}} className='z-0 flex gap-[5vw] lg:gap-[1vw] w-[140vw]'>
      {images.map((image, index) => {
        return (
          <div key={index} className={image.mobile ? `w-[50vw] lg:w-[25vw]` : 'w-[25vw] hidden lg:flex'}>
            <Image src={image.src} width={0} height={0} layout='responsive' objectFit='cover' alt='Elina Rosato'/>
          </div>
        )
      })}
    </motion.div>
  )
}

export default ImageSliderOnScroll