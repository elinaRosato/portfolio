import type { NextPage } from 'next'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Header from '../components/Header'
import { AnimateSharedLayout, motion } from "framer-motion"
import Hero from '../components/Hero'
import About from '../components/About'
import { useEffect, useState } from 'react'

import { Roboto, Open_Sans } from 'next/font/google'
import Projects from '../components/Projects'
import Header2 from '../components/Header2'

const roboto = Roboto({
  weight: "700",
  subsets: ['latin'],
  variable: '--font-roboto'
})

const sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
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

      <main className={`${sans.variable} ${roboto.variable} h-screen snap-y snap-mandatory overflow-scroll bg-slate-200`}>

        { /* Cursor */ }
        <motion.div 
          className='bg-black h-5 w-5 rounded-full fixed top-0 left-0'
          variants={{ default: {x: mousePosition.x - 10, y: mousePosition.y -10, transition: { type : "spring", mass: 0.3}}}} animate="default"
          />

        { /* Header */ }
        <Header />

        { /* Header2 */ }
        <Header2 />

        <div className='lg:mx-6 lg:border-2 lg:border-x-darkest-dark'>
          { /* Hero */ }
          <section className='snap-start font-sans ' >
            <Hero/>
          </section>

          { /* About */ }
          <section id='about' className='snap-center font-roboto' >
            <About />
          </section>

          { /* Projects */ }
          <section id='portfolio' className='snap-start font-roboto' >
            <Projects />
          </section>

          { /* Skills */ }

          { /* Contact */ }
        </div>
        

      </main>

    </>
    
    
  )
}

export default Home
