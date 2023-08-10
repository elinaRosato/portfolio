import React from 'react'
import ContentParagraph from './ContentParagraph';

interface Paragraphs {
  subtitle: string
  text: string[]
}

type Props = {
  paragraphs: Paragraphs[]
}

const ProjectContent = ({paragraphs}: Props) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => {
        return(
          <ContentParagraph key={index} subtitle={paragraph.subtitle} text={paragraph.text} />
        )
      })}
    </div>
  )
}

export default ProjectContent