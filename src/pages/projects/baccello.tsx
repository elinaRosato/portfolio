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

const Baccello = (props: Props) => {

  const projectTitle: string[] = ['Baccello']
  const projectSummary: string = 'A landing page built with WordPress.'
  const code: string = ''
  const demo: string = ''
  const images:Images[] = [
    {
      src: '/baccello_mockup_sections.png',
      alt: 'List Web App Mockup Desktop Light',
      mobile: true,
    },
    {
      src: '/baccello_mockup_checkout.png',
      alt: 'List Web App Mockup Mobile',
      mobile: true,
    },
    {
      src: '/baccello_mockup_full.png',
      alt: 'List Web App Mockup Mobile Light',
      mobile: false,
    },
    {
      src: '/baccello_mockup_hero.png',
      alt: 'List Web App Mockup Mobile',
      mobile: true,
    },
    {
      src: '/baccello_mockup_mix.png',
      alt: 'List Web App Mockup Mobile Light',
      mobile: false,
    },
  ]
  const paragraphs: Paragraphs[] = [
    {
      subtitle: "The Background", 
      text: [`Baccello.io came into being as a result of minds coming together. Guided by the CEO's vision and 
      complemented by the web designer's artistry, I joined the mix to infuse my development expertise. The goal? 
      Weaving a landing page that captured the essence of blockchain technology while celebrating the beauty of art.`]
    },
    {
      subtitle: "The Stack", 
      text: [`WordPress ensured easy maintainability and editing for the client. Astra Theme, 
      a bunch of usefull plugins and some CSS magic added unique elements that brought our page to life.
      `, `Now, let's talk teamwork. The project wasn't just lines of code; it was a all about collaboration. 
      We relied on each other's strengths, each member lending their expertise to the collective vision.
      `]
    },
    {
      subtitle: "The Challenge", 
      text: [`Our journey with Baccello.io taught me the power of embracing challenges as oportunities for innovation. 
      Let's be real, it's not all smooth sailing in the land of plugins and themes. As the design dreams collided with 
      WordPress's limitations, I dived into a world of creative coding, crafting custom solutions to bring unique 
      functionalities to life`]
    },
    {
      subtitle: "", 
      text: [`While Baccello's landing page is no longer live due to the company's discontinuation, 
      the echoes of the journey remain. The project underlined the importance of finding innovative solutions 
      within a team context. From challenges, creativity and collaboration emerged a web page that briefly 
      encapsulated the essence of NFTs, even if just for a virtual moment.
      `]
    },
  ]
  const video: string = '/baccello.mp4'
  const controls: Controls = {
    previous: {
      project: 'List Web App',
      href: '/projects/listwebapp'
    },
    next: {
      project: 'Porridge',
      href: '/projects/porridge'
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

export default Baccello