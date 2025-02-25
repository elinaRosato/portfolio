'use client'
import React, {useEffect, useRef} from 'react'
import ProgressBar from '../../components/projectTemplate/ProgressBar'
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

const Phonebook = (props: Props) => {
  
  const projectTitle: string[] = ['Phonebook']
  const projectSummary: string = ' A fullstack project focused on the backend, built with Node.js, express.js, React and Bootstrap.'
  const code: string = 'https://github.com/elinaRosato/fullstackopen-part3'
  const demo: string = 'https://persons-service.onrender.com/'
  const images:Images[] = [
    {
      src: '/phonebook_validation_alert.png',
      alt: 'List Web App Mockup Mobile',
      mobile: true,
    },
    {
      src: '/phonebook_mockup_desktop.png',
      alt: 'List Web App Mockup Desktop Dark',
      mobile: true,
    },
    {
      src: '/phonebook_mockup_mobile.png',
      alt: 'List Web App Mockup Mobile Dark',
      mobile: false,
    },
    {
      src: '/phonebook_search.png',
      alt: 'List Web App Mockup Mobile Light',
      mobile: false,
    },
    {
      src: '/phonebook_success_alert.png',
      alt: 'List Web App Mockup Desktop Dark',
      mobile: true,
    },
    {
      src: '/phonebook_duplicated_alert.png',
      alt: 'List Web App Mockup Mobile Dark',
      mobile: false,
    },
    
  ]
  const projectContent: ProjectContent[] = [
    { type: "h2", content: "The Background" },
    { type: "p", content: `Phonebook was born from my passion to unravel the complexities of backend development.
    With an aim to solidify my skills, I joined the Full Stack Open course from the University of Helsinki
    and started exploring the server-side of the stack. This project isn't just an app, it's a big step in
    my journey towards building robust and dynamic applications.` },
    { type: "h2", content: "The Stack" },
    { type: "p", content: `Phonebook leverages the power of NodeJS to build a robust backend architecture. Express.js acts as a
    gateway, facilitating smooth communication between the frontend and the server. The database dance is led by
    MongoDB, ensuring seamless data storage and retrieval. Axios takes center stage for client-server communication,
    while Jest ensures that the application performs its moves flawlessly. Bootstrap 5 lends style and elegance
    to the frontend, sculpted with React.` },
    { type: "h2", content: "The Challenge" },
    { type: "p", content: `As I delved into the backend technologies, a new set of challenges came to light. Creating a seamless
    flow between the frontend and backend was a puzzle to solve. Ensuring that data validation was in place and
    handling server responses effectively demanded a new level of attention to detail.` },
    { type: "h2", content: "Features" },
    { type: "p", content: `Phonebook orchestrates an array of features, each designed to create a seamless user experience:` },
    { type: "p", content: `👾 Contact storage and dynamic updates.` },
    { type: "p", content: `👾 Creation and deletion of contacts like a breeze.` },
    { type: "p", content: `👾 Data validation to guarantee adherence to specified formats.` },
    { type: "p", content: `👾 A live search bar that instantaneously filters the contact list when the user types.` },
    { type: "p", content: `Through this project, I've ventured deeper into backend development, mastering the art of data
    management, server communication, and application validation. Phonebook stands as a pivotal point in
    my development journey. It's where theory turned into practice, and the lessons I've learned will stay
    with me as I continue to grow.` },
    { type: "video", content: "phonebook.mp4" },
  ]

  const controls: Controls = {
    previous: {
      project: 'Popping Bubbles',
      href: '/projects/poppingbubbles'
    },
    next: {
      project: 'Todo List Web App',
      href: '/projects/todolist'
    }
  }

  return (
    <div className={`min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <ProjectTemplate projectTitle={projectTitle} projectSummary={projectSummary} code={code} demo={demo} images={images} projectContent={projectContent} controls={controls} href='/#projects' />
      <ProgressBar />
    </div>
      
  )
}

export default Phonebook