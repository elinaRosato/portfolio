import React from 'react'
import WavyButton from './WavyButton'
import ProjectDetailTitle from './ProjectDetailTitle'
import ProjectSummary from './ProjectSummary'
import ImageSliderOnScroll from './ImageSliderOnScroll'
import ProjectContent from './ProjectContent'
import { BackArrow, ExternalArrow } from './IconsSvg'
import ProjectControls from './ProjectControls'
import ProjectVideo from './ProjectVideo'

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
      <WavyButton href='/#portfolio' external={false} reverse={true} text='Back to Projects' svg={BackArrow} />
      <ProjectDetailTitle title={projectTitle} />
      <ProjectSummary text={projectSummary} code={code} demo={demo} />
      <ImageSliderOnScroll images={images} />
      <ProjectContent paragraphs={paragraphs}/>
      {video ? <ProjectVideo src={video} /> : ''}
      <ProjectControls controls={controls} />
    </main>
  )
}

export default ProjectDetail