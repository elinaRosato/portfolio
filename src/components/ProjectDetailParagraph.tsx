import React from 'react'

type Props = {
  subtitle: string,
  text: string[]
}

const ProjectDetailParagraph = ({subtitle, text}: Props) => {
  return (
    <div className='py-[5vw] lg:py-[1.25vw] flex flex-col gap-[5vw] lg:gap-[0.625vw]'>
      <h2 className='font-sans font-bold text-darkest-dark text-[7vw] leading-[9vw] lg:text-[2vw] lg:leading-[5vw]'>{subtitle}</h2>
      {text.map((line, index) => {
        return(
          <p key={index} className='font-roboto font-normal text-darkest-dark text-[4vw] leading-[7vw] lg:text-[1.4vw] lg:leading-[2.7vw]'>{line}</p>
        )
      })}
      
    </div>
  )
}

export default ProjectDetailParagraph