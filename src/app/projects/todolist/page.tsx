'use client'
import React, {useEffect, useRef} from 'react'
import ProjectTemplate from '../../components/projectTemplate/ProjectTemplate'
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
  const projectContent: ProjectContent[] = [
    {
      type: "h2", 
      content: "The Background"
    },
    {
      type: "h3", 
      content: ""
    },
    {
      type: "p", 
      content: `The List Web App emerged from my inherent love for organization as a Virgo. 
      Driven by the quest for a digital solution to manage my tasks efficiently, I embarked on creating this web app. 
      Built entirely with Vanilla JavaScript, my aim was to implement a robust set of features that would transform 
      task management into a seamless and intuitive experience.`
    },
    {
      type: "h2", 
      content: "The Stack"
    },
    {
      type: "h3", 
      content: ""
    },
    {
      type: "p", 
      content: `Built upon the foundation of Vanilla JavaScript, the List Web App marries functionality with elegance. 
      The project showcases the power of simplicity in coding, where intuitive design meets dynamic functionality. 
      Through meticulous coding, I brought to life a tool that harmonizes task management and user-friendly interaction.`
    },
    {
      type: "h2", 
      content: "The Challenge"
    },
    {
      type: "h3", 
      content: ""
    },
    {
      type: "p", 
      content: `The journey of creating the List Web App was an enlightening experience. Embracing the object-oriented 
      programming paradigm, I explored a range of datatypes, logical operators, and conditional statements. 
      From loops to arrays, the app's functionalities demanded a deep dive into manipulating the DOM and mastering 
      event handling. Navigating these complexities was akin to solving puzzles, and each solved puzzle added to the 
      app's functionality.`
    },
    {
      type: "h2", 
      content: "The Features"
    },
    {
      type: "h3", 
      content: ""
    },
    {
      type: "p", 
      content: `The List Web App boasts an array of features that streamline task management:`
    },
    {
      type: "p", 
      content: `👾 Flexible Editing: Modify list titles and task descriptions on the fly.`
    },
    {
      type: "p", 
      content: `👾 Intuitive Deletion: Remove lists and tasks effortlessly.`
    },
    {
      type: "p", 
      content: `👾 Task Interactions: Check, uncheck, and edit tasks with ease.`
    },
    {
      type: "p", 
      content: `👾 Efficient Deletion: Delete individual tasks or clear all at once.`
    },
    {
      type: "p", 
      content: `👾 Drag-and-Drop: Reorder tasks within lists seamlessly.`
    },
    {
      type: "p", 
      content: `👾 Friendly Reminder: Receive a prompt to relax when creating more than three lists.`
    },
    {
      type: "h2", 
      content: "The Outcome"
    },
    {
      type: "h3", 
      content: ""
    },
    {
      type: "p", 
      content: `The List Web App stands as a testament to the journey of learning and innovation. 
      The project not only offered a sophisticated solution to my personal need for organization but also 
      became a canvas to master diverse programming concepts. From object-oriented programming to asynchronous 
      data fetching, the app's architecture is a reflection of my growth as a developer.`
    },
    {
      type: "video",
      content: "/listwebapp.mp4"
    }
  ]
  const controls: Controls = {
    previous: {
      project: 'Phonebook',
      href: '/projects/phonebook'
    },
    next: {
      project: '',
      href: ''
    }
  }

  return (
    <div className={`min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <ProjectTemplate projectTitle={projectTitle} projectSummary={projectSummary} code={code} demo={demo} images={images} projectContent={projectContent} controls={controls} href='/#projects' />
    </div>
      
  )
}

export default ListWebApp