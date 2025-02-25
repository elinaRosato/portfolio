'use client'
import React from 'react'
import ProjectDetail from '../../components/projectTemplate/ProjectTemplate'
import ProgressBar from '../../components/projectTemplate/ProgressBar'
import { ProjectContent } from '../../../types/types'


interface Images {
  src: string,
  alt: string,
  mobile: boolean,
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
  const projectContent: ProjectContent[] = [
    { type: "h2", content: "The Background" },
    { type: "p", content: `Popping Bubbles is a personal project born from a deep-rooted desire to both challenge and fortify my skills
    in plain JavaScript. The overarching goal was to embark on an expedition that would push me to explore
    uncharted territories in game development, a field I had yet to explore. By venturing into the world of
    game design, I aimed to stimulate my creativity in new dimensions and forge a deep connection between logic
    and imagination.` },
    { type: "h2", content: "The Stack" },
    { type: "p", content: `The project is built upon the seamless integration of Vanilla JavaScript and HTML Canvas.
    This dynamic
    duo empowers Popping Bubbles with its interactive prowess and visual allure.
    The intricate interplay between the code and canvas not only results in an engaging user experience
    but also opens doors to boundless creativity.` },
    { type: "h2", content: "The Challenge" },
    { type: "p", content: `The journey of crafting Popping Bubbles was characterized by a unique blend of play and programming.
    Each milestone achieved and every new feature introduced felt akin to leveling up within my own game.
    It was a profound realization of how engaging and rewarding the process of development can be,
    akin to playing a game in itself.` },
    { type: "p", content: `Among the challenges encountered was the mastery of HTML Canvas, a tool that was entirely unfamiliar to me.
    Through meticulous exploration, consultation of resources such as YouTube tutorials and official
    documentation, I uncovered the potential of this tool and harnessed it to bring my vision to life.
    The creative process of constructing the game interface, from animated sprites to intuitive interactivity,
    proved to be an intricate puzzle that I relished solving.` },
    { type: "h2", content: "The Features" },
    { type: "p", content: `Within Popping Bubbles, a symphony of features come together to enrich the gameplay experience:` },
    { type: "p", content: `👾 Animated Splendor: Characters and bubbles that dance and animate across the canvas, enhancing immersion.` },
    { type: "p", content: `👾 Audio Enhancement: Dynamic sound effects that add an auditory dimension to the interactive journey.` },
    { type: "p", content: `👾 User Controls: Play, pause, and mute functionalities that provide players with control over their experience.` },
    { type: "p", content: `👾 Visual Delight: A layered background with parallax effect, lending depth to the visual narrative.` },
    { type: "p", content: `👾 Power of Superpowers: Unique abilities including speed, magnetism, and x-power, adding layers of strategy.` },
    { type: "p", content: `Popping Bubbles is a testament to the unexpected potency of unadorned JavaScript and the ability of a
    solo creator to orchestrate a symphony of code and creativity. The journey from code to game is a
    testament to the dedication to learning and the fusion of innovation and exploration.` },
    { type: "video", content: '/poppingbubbles.mp4' },
  ]
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
    <div className={`min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <ProjectDetail projectTitle={projectTitle} projectSummary={projectSummary} code={code} demo={demo} images={images} projectContent={projectContent} controls={controls} href='/#projects'/>
      <ProgressBar />
    </div>
      
  )
}

export default PoppingBubbles