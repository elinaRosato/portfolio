import React from 'react'
import ProjectDetailTitle from './ProjectDetailTitle'
import ProjectDetailSummary from './ProjectDetailSummary'
import ImageSliderOnScroll from './ImageSliderOnScroll'
import ProjectDetailContent from './ProjectDetailContent'
import ProjectDetailControls from './ProjectDetailControls'
import ProjectVideo from './ProjectVideo'
import ButtonBack from './ButtonBack'
import Image from 'next/image'

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

type Props = {
  projectTitle:string[],
  projectSummary:string,
  code:string,
  demo:string,
  images:Images[],
  paragraphs:Paragraphs[],
  video:string,
  controls:Controls
}

const ProjectDetail = ({projectTitle, projectSummary, code, demo, images, paragraphs, video, controls}: Props) => {
  return (
    <main className='overflow-hidden flex flex-col gap-[5vh] lg:gap-[3vw] py-[10vh] px-[10vw] lg:py-[16vh] lg:mx-[1.5vw] lg:border-2 lg:border-x-darkest-dark '>        
      <ButtonBack />
      <ProjectDetailTitle title={projectTitle} />
      <ProjectDetailSummary text={projectSummary} code={code} demo={demo} />
      {images.length>1 ? 
      <ImageSliderOnScroll images={images} /> : 
      <Image src={images[0].src} width={0} height={0} layout='responsive' objectFit='cover' alt='Elina Rosato'/>
      }
      <ProjectDetailContent paragraphs={paragraphs}/>
      {video ? <ProjectVideo src={video} /> : ''}
      <ProjectDetailControls controls={controls} />
    </main>
  )
}

export default ProjectDetail