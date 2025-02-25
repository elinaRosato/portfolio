import React from 'react'
import ProjectDetailTitle from './ProjectDetailTitle'
import ProjectDetailSummary from './ProjectDetailSummary'
import ImageSliderOnScroll from '../global/ImageSliderOnScroll'
import ProjectDetailControls from './ProjectDetailControls'
import ButtonBack from './ButtonBack'
import Image from 'next/image'
import { ProjectContent } from '../../../types/types'

interface Paragraphs {
  subtitle?: string,
  text: string[],
  image?: string,
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
  projectContent:ProjectContent[],
  controls:Controls
}

const ProjectTemplate = ({projectTitle, projectSummary, code, demo, images, projectContent, controls}: Props) => {
  return (
    <main className='overflow-hidden flex flex-col gap-[5vh] lg:gap-[3vw] py-[10vh] px-[10vw] lg:py-[16vh] lg:mx-[1.5vw] lg:border-2 lg:border-x-darkest-dark '>        
      <ButtonBack />
      <ProjectDetailTitle title={projectTitle} />
      <ProjectDetailSummary text={projectSummary} code={code} demo={demo} />
      {images.length>1 ? 
      <ImageSliderOnScroll images={images} /> : 
      <Image src={images[0].src} width={0} height={0} layout='responsive' objectFit='cover' alt='Elina Rosato'/>
      }
      <div className='flex flex-col gap-[5vw] lg:gap-[3vw] py-[2vh]'>
        {projectContent.map((element, index) => {
          switch(element.type){
            case 'h2':
              return <h2 key={index} className='font-sans font-bold text-darkest-dark text-[7vw] leading-[9vw] lg:text-[2vw] lg:leading-[5vw]'>{element.content}</h2>
            case 'h3':
              return <h2 key={index} className='font-sans font-bold text-darkest-dark text-[7vw] leading-[9vw] lg:text-[2vw] lg:leading-[5vw]'>{element.content}</h2>
            case 'p':
              return <p key={index} className='font-roboto font-normal text-darkest-dark text-[4vw] leading-[7vw] lg:text-[1.4vw] lg:leading-[2.7vw]'>{element.content}</p>
            case 'img':
              return <img key={index} src={element.content} alt='' className='w-full h-auto py-36' />
            case 'video':
              return(
                <video key={index} autoPlay loop playsInline muted className='object-cover rounded-[1.25vw] w-[100%] self-center '>
                  <source src={element.content} type='video/mp4'/>
                </video>
              )
            default:
              return;
          }
        })}
      </div>
      <ProjectDetailControls controls={controls} />
    </main>
  )
}

export default ProjectTemplate