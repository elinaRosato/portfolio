import type { NextPage } from 'next'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

import { Roboto, Open_Sans, Homemade_Apple, Nanum_Pen_Script, Crafty_Girls } from 'next/font/google'
import Header2 from '../components/Header2'
import Body from '../components/Body'

const roboto = Roboto({
  weight: "700",
  subsets: ['latin'],
  variable: '--font-roboto'
})

const sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const handwritten = Homemade_Apple({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-handwritten'
})


const Home: NextPage = () => {
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
    <>
      <Head>
        <title>Elina Rosato portfolio</title>
      </Head>

      <div className={`${sans.variable} ${roboto.variable} ${handwritten.variable} h-screen snap-y snap-mandatory overflow-scroll bg-almost-white`}>
        <Header />
        <Header2 />
        <Body />
      </div>

    </>
    
    
  )
}

export default Home
