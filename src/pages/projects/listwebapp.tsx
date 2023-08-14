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
  const projectTitle: string[] = ['List', 'Web', 'App']

  return (
    <div className={`${sans.variable} ${roboto.variable} ${handwritten.variable} min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <Header />
      <EmailButton />
      <main className='flex flex-col gap-[1vh] lg:gap-[1vh] lg:mx-[1.5vw] lg:border-2 lg:border-x-darkest-dark py-[10vh] px-[10vw] lg:p-[10vw] '>
        <BackButton href="/#portfolio" />
        <ProjectDetailTitle title={projectTitle} />
        <div className='flex flex-col gap-10 lg:px-10'>
          <div className='flex flex-col gap-[4vh] lg:gap-0 lg:flex-row justify-between items start lg:items-center'>
            <ProjectSummary text=' A web app built entirely with Vanilla JavaScript.' />
            <div className='flex gap-[10vw] lg:gap-[4vw] justify-end'>
              <WavyButton href="https://github.com/elinaRosato/todolist-vanillajs" external={true} text="Read Code" svg={forwardArrowSvg} />
              <WavyButton href="https://elinarosato.github.io/bubblepoppinggame-vanillajs/" external={true} text="Play game !" svg={forwardArrowSvg} />
            </div>
          </div>
          <video autoPlay loop playsInline muted className='object-cover rounded-[1.25vw] w-[100%] self-center'>
            <source src="/listwebapp.mp4" type='video/webm; codecs=vp9'/>
          </video>
          <ProjectContent paragraphs={paragraphs}/>
          <div  className='flex justify-between py-[5vh]'>
            <WavyButton href='/projects/poppingbubbles' external={false} text='Previous Project: Popping Bubbles' svg={forwardArrowSvg} />
            <WavyButton href='/projects/poppingbubbles' external={false} text='Next Project: Baccello' svg={forwardArrowSvg} />
          </div>
        </div>
      </main>
    </div>
      
  )
}

export default PoppingBubbles