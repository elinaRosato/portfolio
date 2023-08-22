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

const Porridge = (props: Props) => {

  const projectTitle: string[] = ['Porridge']
  const projectSummary: string = 'A React frontend project with ecommerce functionality.'
  const code: string = 'https://github.com/elinaRosato/finalProject-React-CoderHouse'
  const demo: string = ''
  const images:Images[] = [
    {
      src: '/porridge.png',
      alt: 'Porridge ecommerce mockup',
      mobile: true,
    },
  ]
  const paragraphs: Paragraphs[] = [
    {
      subtitle: "The background", 
      text: ['Porridge, a tribute to my affinity for all things oat-based, embodies my passion for both web development and hearty breakfasts. The inspiration behind this project came from a simple desire: to curate a virtual haven for fellow oatmeal enthusiasts. In crafting this web app, I aspired to amalgamate the joys of culinary indulgence with the world of technology.']
    },
    {
      subtitle: "The Stack", 
      text: [`This project introduced me to React and the art of building interactive components. 
      By crafting reusable React components, I nurtured a newfound appreciation for modular 
      design and efficient code architecture. Moreover, the project introduced me to essential concepts such as state 
      management, event handling, and routing. Integrating Firebase into the mix allowed me to seamlessly store and 
      retrieve data, allowing me to easily update the products on the shop`]
    },
    {
      subtitle: "The Challenge", 
      text: [`While the vision for Porridge was clear, ensuring seamless navigation, implementing a custom context 
      provider and harmonizing the interface with Firebase were a few of the challenges that shaped my learning curve. 
      Overcoming these challenges demanded patience, experimentation, and commitment to producing a user-friendly, 
      visually appealing, and highly functional platform.`]
    },
    {
      subtitle: "", 
      text: [`The lessons learned in crafting Porridge have been rich and diverse: from mastering the art of building 
      reusable components to nurturing a deeper appreciation for frontend architecture. It's a project that leaves a 
      warm and fulfilling aftertaste, much like a steaming bowl of oatmeal on a chilly morning.`]
    },
  ]
  const video: string = ''
  const controls: Controls = {
    previous: {
      project: 'Baccello',
      href: '/projects/baccello'
    },
    next: {
      project: '',
      href: ''
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

export default Porridge