import React, {useEffect, useRef} from 'react'
import Header from '../../components/Header'
import EmailButton from '../../components/EmailButton'

import { Roboto, Homemade_Apple, Poppins } from 'next/font/google'
import WavyButton from '../../components/WavyButton'
import ProjectContent from '../../components/ProjectContent'
import ProjectDetailTitle from '../../components/ProjectDetailTitle'
import BackButton from '../../components/BackButton'
import ProjectSummary from '../../components/ProjectSummary'
import Image from 'next/image'
import ImageSliderOnScroll from '../../components/ImageSliderOnScroll'
import ProgressBar from '../../components/ProgressBar'
import { ForwardArrow, BackArrow, ExternalArrow } from '../../components/IconsSvg'
import ProjectControls from '../../components/ProjectControls'
import ProjectDetail from '../../components/ProjectDetail'



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

const ListWebApp = (props: Props) => {
  
  const projectTitle: string[] = ['List', 'Web', 'App']
  const projectSummary: string = ' A web app built entirely with Vanilla JavaScript.'
  const code: string = 'https://github.com/elinaRosato/todolist-vanillajs'
  const demo: string = 'https://elinarosato.github.io/todolist-vanillajs/'
  const images:Images[] = [
    {
      src: '/listwebapp_mockup_desktop_light.png',
      alt: 'List Web App Mockup Desktop Light',
      mobile: true,
    },
    {
      src: '/listwebapp_mockup_mobile_mix.png',
      alt: 'List Web App Mockup Mobile',
      mobile: true,
    },
    {
      src: '/listwebapp_mockup_mobile_light.png',
      alt: 'List Web App Mockup Mobile Light',
      mobile: false,
    },
    {
      src: '/listwebapp_mockup_desktop_dark.png',
      alt: 'List Web App Mockup Desktop Dark',
      mobile: true,
    },
    {
      src: '/listwebapp_mockup_mobile_dark.png',
      alt: 'List Web App Mockup Mobile Dark',
      mobile: false,
    },
    
  ]
  const paragraphs: Paragraphs[] = [
    {
      subtitle: "The Background", 
      text: [`The List Web App emerged from my inherent love for organization as a Virgo. 
      Driven by the quest for a digital solution to manage my tasks efficiently, I embarked on creating this web app. 
      Built entirely with Vanilla JavaScript, my aim was to implement a robust set of features that would transform 
      task management into a seamless and intuitive experience.`]
    },
    {
      subtitle: "The Stack", 
      text: [`Built upon the foundation of Vanilla JavaScript, the List Web App marries functionality with elegance. 
      The project showcases the power of simplicity in coding, where intuitive design meets dynamic functionality. 
      Through meticulous coding, I brought to life a tool that harmonizes task management and user-friendly interaction.`]
    },
    {
      subtitle: "The Challenge", 
      text: [`The journey of creating the List Web App was an enlightening experience. Embracing the object-oriented 
      programming paradigm, I explored a range of datatypes, logical operators, and conditional statements. 
      From loops to arrays, the app's functionalities demanded a deep dive into manipulating the DOM and mastering 
      event handling. Navigating these complexities was akin to solving puzzles, and each solved puzzle added to the 
      app's functionality.`]
    },
    {
      subtitle: "The Features", 
      text: [
        `The List Web App boasts an array of features that streamline task management:`,
        `👾 Flexible Editing: Modify list titles and task descriptions on the fly.`,
        `👾 Intuitive Deletion: Remove lists and tasks effortlessly.`,
        `👾 Task Interactions: Check, uncheck, and edit tasks with ease.`,
        `👾 Efficient Deletion: Delete individual tasks or clear all at once.`,
        `👾 Drag-and-Drop: Reorder tasks within lists seamlessly.`,
        `👾 Friendly Reminder: Receive a prompt to relax when creating more than three lists.`,
      ]
    },
    {
      subtitle: "", 
      text: [`The List Web App stands as a testament to the journey of learning and innovation. 
      The project not only offered a sophisticated solution to my personal need for organization but also 
      became a canvas to master diverse programming concepts. From object-oriented programming to asynchronous 
      data fetching, the app's architecture is a reflection of my growth as a developer.`]
    },
  ]
  const video = "/listwebapp.mp4"
  const controls: Controls = {
    previous: {
      project: 'Popping Bubbles',
      href: '/projects/poppingbubbles'
    },
    next: {
      project: 'Baccello',
      href: '/projects/baccello'
    }
  }

  return (
    <div className={`${sans.variable} ${roboto.variable} ${handwritten.variable} min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <Header />
      <EmailButton />
      <ProjectDetail projectTitle={projectTitle} projectSummary={projectSummary} code={code} demo={demo} images={images} paragraphs={paragraphs} video={video} controls={controls} />
      <ProgressBar />
    </div>
      
  )
}

export default ListWebApp