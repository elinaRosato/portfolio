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
  const projectSummary: string = 'A ecommerce website built with React.'
  const code: string = 'https://github.com/elinaRosato/bubblepoppinggame-vanillajs'
  const demo: string = ''
  const images:Images[] = []
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