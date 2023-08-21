import React from 'react'
import ProjectDetailParagraph from './ProjectDetailParagraph';

interface Paragraphs {
  subtitle: string
  text: string[]
}

type Props = {
  paragraphs: Paragraphs[]
}

const ProjectDetailContent = ({paragraphs}: Props) => {
  return (
    <div className='flex flex-col gap-[5vw] lg:gap-[3vw] py-[2vh]'>
      {paragraphs.map((paragraph, index) => {
        return(
          <ProjectDetailParagraph key={index} subtitle={paragraph.subtitle} text={paragraph.text} />
        )
      })}
    </div>
  )
}

export default ProjectDetailContent