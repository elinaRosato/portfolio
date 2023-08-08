import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react';

interface Project {
  title: string;
  subtitle: string;
  src: string;
}

type Props = {
  modal: { active: boolean, index: number },
  projects: Project[]

}

const Modal = ({modal, projects}: Props) => {
  const { active, index } = modal

  const [mousePosition, setMousePosition] = useState ({x:0, y:0})

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({x:e.clientX, y:e.clientY})
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [])

  const scaleAnimation = {
        initial: {scale: 0, x:"40vw" },
        enter: {scale: 1, x: mousePosition.x-192, y:mousePosition.y-104, transition: {type:'tween', duration: 1, ease: 'backOut'}},
        closed: {scale: 0, x:"40vw", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
    }

  return (
    <>
      <motion.div variants={scaleAnimation} initial='initial' animate={active ? "enter" : "closed"} className='hidden lg:absolute top-0 left-0 w-96 h-52 overflow-hidden lg:flex lg:flex-col pointer-events-none '>
        <div style={{top: index * -100 + "%"}} className={` absolute w-full h-full transition-all duration-300 ease-in-out`}>
            {projects.map((project, index) => (
                <div key={index} className='relative h-full w-full'>
                  <Image src={project.src}  height={208} width={384}  objectFit='cover' alt={project.title}/>
                </div>
              )
            )}
        </div>
      </motion.div>
      <motion.div className='absolute top-0 left-0 h-8 w-8 bg-accent rounded-full' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
      <motion.div className='absolute top-0 left-0' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>Open</motion.div>      
    </>
  )
}

export default Modal