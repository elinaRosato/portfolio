'use client'

import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ImageStack from './global/ImageStack';


type Props = {}

const Magazine: NextPage = () => {

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
  
  return (
    <section className='font-sans relative px-16 py-48 lg:p-10 overflow-hidden' >
      <ImageStack />
    </section>
  )
}

export default Magazine
