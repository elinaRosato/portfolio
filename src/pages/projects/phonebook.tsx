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
  const projectSummary: string = ' A backend project built with Node.js and React.'
  const code: string = 'https://github.com/elinaRosato/fullstackopen-part3'
  const demo: string = 'https://persons-service.onrender.com/'
  const images:Images[] = [
  ]
  const paragraphs: Paragraphs[] = [
    {
      subtitle: "This page is under construction.", 
      text: []
    },
    {
      subtitle: "Project description and demo comming soon", 
      text: []
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