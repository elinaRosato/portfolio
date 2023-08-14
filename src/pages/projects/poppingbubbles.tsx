import React from 'react'
import Header from '../../components/Header'
import EmailButton from '../../components/EmailButton'

import { Roboto, Homemade_Apple, Poppins } from 'next/font/google'
import WavyButton from '../../components/WavyButton'
import ProjectContent from '../../components/ProjectContent'
import ProjectDetailTitle from '../../components/ProjectDetailTitle'
import BackButton from '../../components/BackButton'
import ProjectSummary from '../../components/ProjectSummary'


const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

const sans = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-sans'
})

const handwritten = Homemade_Apple({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-handwritten'
})

interface Paragraphs {
  subtitle: string
  text: string[]
}

type Props = {}

const PoppingBubbles = (props: Props) => {
  
  const forwardArrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" className='w-[6vw] h-[6vw] lg:w-[2vw] lg:h-[2vw]' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  )

  const paragraphs: Paragraphs[] = [
    {
      subtitle: "The Background", 
      text: [`Popping Bubbles is a personal project born from a deep-rooted desire to both challenge and fortify my skills 
      in plain JavaScript. The overarching goal was to embark on an expedition that would push me to explore 
      uncharted territories in game development, a field I had yet to explore. By venturing into the world of 
      game design, I aimed to stimulate my creativity in new dimensions and forge a deep connection between logic 
      and imagination.`]
    },
    {
      subtitle: "The Stack", 
      text: [`The project is built upon the seamless integration of Vanilla JavaScript and HTML Canvas. 
      This dynamic duo empowers Popping Bubbles with its interactive prowess and visual allure. 
      The intricate interplay between the code and canvas not only results in an engaging user experience 
      but also opens doors to boundless creativity.`]
    },
    {
      subtitle: "The Challenge", 
      text: [`The journey of crafting Popping Bubbles was characterized by a unique blend of play and programming. 
      Each milestone achieved and every new feature introduced felt akin to leveling up within my own game. 
      It was a profound realization of how engaging and rewarding the process of development can be, 
      akin to playing a game in itself.`,
      `Among the challenges encountered was the mastery of HTML Canvas, a tool that was entirely unfamiliar to me. 
      Through meticulous exploration, consultation of resources such as YouTube tutorials and official 
      documentation, I uncovered the potential of this tool and harnessed it to bring my vision to life. 
      The creative process of constructing the game interface, from animated sprites to intuitive interactivity, 
      proved to be an intricate puzzle that I relished solving.`]
    },
    {
      subtitle: "The Features", 
      text: [
        `Within Popping Bubbles, a symphony of features come together to enrich the gameplay experience:`,
        `👾 Animated Splendor: Characters and bubbles that dance and animate across the canvas, enhancing immersion.`,
        `👾 Audio Enhancement: Dynamic sound effects that add an auditory dimension to the interactive journey.`,
        `👾 User Controls: Play, pause, and mute functionalities that provide players with control over their experience.`,
        `👾 Visual Delight: A layered background with parallax effect, lending depth to the visual narrative.`,
        `👾 Power of Superpowers: Unique abilities including speed, magnetism, and x-power, adding layers of strategy.`,
      ]
    },
    {
      subtitle: "", 
      text: [`Popping Bubbles is a testament to the unexpected potency of unadorned JavaScript and the ability of a 
      solo creator to orchestrate a symphony of code and creativity. The journey from code to game is a 
      testament to the dedication to learning and the fusion of innovation and exploration.`]
    },
  ]
  const projectTitle: string[] = ['Popping', 'Bubbles']

  return (
    <div className={`${sans.variable} ${roboto.variable} ${handwritten.variable} min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <Header />
      <EmailButton />
      <main className='flex flex-col gap-[1vh] lg:gap-[1vh] lg:mx-[1.5vw] lg:border-2 lg:border-x-darkest-dark py-[10vh] px-[10vw] lg:p-[10vw] '>
        <BackButton href="/#portfolio" />
        <ProjectDetailTitle title={projectTitle} />
        <div className='flex flex-col gap-10 lg:px-10'>
          <div className='flex flex-col gap-[4vh] lg:gap-0 lg:flex-row justify-between items start lg:items-center'>
            <ProjectSummary text='A computer game built entirely with Vanilla JavaScript.' />
            <div className='flex gap-[10vw] lg:gap-[4vw] justify-end'>
              <WavyButton href="https://github.com/elinaRosato/bubblepoppinggame-vanillajs" external={true} text="Read Code" svg={forwardArrowSvg} />
              <WavyButton href="https://elinarosato.github.io/bubblepoppinggame-vanillajs/" external={true} text="Play game !" svg={forwardArrowSvg} />
            </div>
          </div>
          <video autoPlay loop playsInline muted className='object-cover rounded-[1.25vw] w-[100%] self-center'>
            <source src="/poppingbubbles.mp4" type='video/webm; codecs=vp9'/>
          </video>
          <ProjectContent paragraphs={paragraphs}/>
          <div  className='flex justify-end py-[5vh]'>
            <WavyButton href='/projects/listwebapp' external={false} text='Next Project: List App' svg={forwardArrowSvg} />
          </div>
        </div>
      </main>
    </div>
      
  )
}

export default PoppingBubbles