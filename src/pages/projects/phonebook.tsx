import React, {useEffect, useRef} from 'react'
import Header from '../../components/Header'
import EmailButton from '../../components/ButtonEmail'
import { Roboto, Homemade_Apple, Poppins } from 'next/font/google'
import ProgressBar from '../../components/ProgressBar'
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
  const paragraphs: Paragraphs[] = [
    {
      subtitle: "The Background", 
      text: [`Phonebook was born from my passion to unravel the complexities of backend development. 
      With an aim to solidify my skills, I joined the Full Stack Open course from the University of Helsinki 
      and started exploring the server-side of the stack. This project isn't just an app, it's a big step in 
      my journey towards building robust and dynamic applications.`]
    },
    {
      subtitle: "The Stack", 
      text: [`Phonebook leverages the power of NodeJS to build a robust backend architecture. Express.js acts as a 
      gateway, facilitating smooth communication between the frontend and the server. The database dance is led by 
      MongoDB, ensuring seamless data storage and retrieval. Axios takes center stage for client-server communication,
       while Jest ensures that the application performs its moves flawlessly. Bootstrap 5 lends style and elegance 
       to the frontend, sculpted with React.`]
    },
    {
      subtitle: "The Challenge", 
      text: [`As I delved into the backend technologies, a new set of challenges came to light. Creating a seamless 
      flow between the frontend and backend was a puzzle to solve. Ensuring that data validation was in place and  
      handling server responses effectively demanded a new level of attention to detail.`]
    },
    {
      subtitle: "Features", 
      text: [
        `Phonebook orchestrates an array of features, each designed to create a seamless user experience:`,
        `👾 Contact storage and dynamic updates.`,
        `👾 Creation and deletion of contacts like a breeze.`,
        `👾 Data validation to guarantee adherence to specified formats. `,
        `👾 A live search bar that instantaneously filters the contact list when the user types.`,
      ]
    },
    {
      subtitle: "", 
      text: [`Through this project, I've ventured deeper into backend development, mastering the art of data 
      management, server communication, and application validation. Phonebook stands as a pivotal point in 
      my development journey. It's where theory turned into practice, and the lessons I've learned will stay 
      with me as I continue to grow.
      `]
    },
  ]
  const video = ""
  const controls: Controls = {
    previous: {
      project: 'Popping Bubbles',
      href: '/projects/poppingbubbles'
    },
    next: {
      project: 'List Web App',
      href: '/projects/listwebapp'
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

export default Phonebook