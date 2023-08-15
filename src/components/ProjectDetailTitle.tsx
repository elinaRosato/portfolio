import React from 'react'
import AnimatedTitle from './AnimatedTitle'

type Props = {
  title:string[]
}

const ProjectDetailTitle = ({title}: Props) => {
  return (
    <div className='flex flex-wrap lg:flex-row py-[2vw] gap-x-[4vw] lg:gap-x-[1.5vw]'>
      {title.map((word,index) => {
        return(
          <AnimatedTitle key={index} text={word} className='font-sans font-semibold text-[15vw] leading-[20vw] lg:text-[4.5vw] lg:leading-[5.5vw] text-darkest-dark flex overflow-hidden' />
        )
      })}
    </div>
  )
}

export default ProjectDetailTitle