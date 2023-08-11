import React from 'react'
import AnimatedTitle from './AnimatedTitle'

type Props = {
  title:string[]
}

const ProjectDetailTitle = ({title}: Props) => {
  return (
    <div className='flex flex-col lg:flex-row py-[3vw] gap-[1vw]'>
      {title.map((word,index) => {
        return(
          <AnimatedTitle key={index} text={word} className='font-sans font-semibold text-[15vw] leading-[20vw] lg:text-[4.5vw] lg:leading-[5.5vw] text-darkest-dark flex overflow-hidden' />
        )
      })}
    </div>
  )
}

export default ProjectDetailTitle