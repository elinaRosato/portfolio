import React from 'react'
import Header from '../../components/Header'
import EmailButton from '../../components/ButtonEmail'

import { Roboto, Homemade_Apple, Poppins } from 'next/font/google'
import WavyButton from '../../components/ButtonWavy'
import ProjectContent from '../../components/ProjectDetailContent'
import ProjectDetailTitle from '../../components/ProjectDetailTitle'
import BackButton from '../../components/ButtonBack'
import ProjectSummary from '../../components/ProjectDetailSummary'
import ProjectDetail from '../../components/ProjectDetail'
import ProgressBar from '../../components/ProgressBar'


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


interface Images {
  src: string,
  alt: string,
  mobile: boolean,
}
interface Paragraphs {
  subtitle: string
  text: string[]
}
interface Control {
  project: string,
  href: string,
}
interface Controls {
  previous: Control,
  next: Control,
}

type Props = {}

const PoppingBubbles = (props: Props) => {

  const projectTitle: string[] = ['Popping', 'Bubbles']
  const projectSummary: string = 'A computer game built entirely with Vanilla JavaScript.'
  const code: string = 'https://github.com/elinaRosato/bubblepoppinggame-vanillajs'
  const demo: string = 'https://elinarosato.github.io/bubblepoppinggame-vanillajs/'
  const images:Images[] = [
    {
      src: '/poppingbubbles_controls.png',
      alt: 'Popping Bubbles pause and mute controls',
      mobile: true,
    },
    {
      src: '/poppingbubbles_score.png',
      alt: 'Popping bubbles score and life bar',
      mobile: false,
    },
    {
      src: '/poppingbubbles_init.png',
      alt: 'Popping Bubbles init screen',
      mobile: true,
    },
    {
      src: '/poppingbubbles_life.png',
      alt: 'Popping bubbles life',
      mobile: false,
    },
    {
      src: '/poppingbubbles_power.png',
      alt: 'Popping bubbles x-power',
      mobile: true,
    },
    {
      src: '/poppingbubbles_speed.png',
      alt: 'Popping bubbles speed power',
      mobile: false,
    },
  ]
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
  const video: string = '/poppingbubbles.mp4'
  const controls: Controls = {
    previous: {
      project: '',
      href: ''
    },
    next: {
      project: 'Phonebook',
      href: '/projects/phonebook'
    }
  }

  return (
    <div className={`${sans.variable} ${roboto.variable} ${handwritten.variable} min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <Header />
      <EmailButton />
      <ProjectDetail projectTitle={projectTitle} projectSummary={projectSummary} code={code} demo={demo} images={images} paragraphs={paragraphs} video={video} controls={controls}/>
      <ProgressBar />
    </div>
      
  )
}

export default PoppingBubbles