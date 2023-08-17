import React from 'react'
import WavyButton from './WavyButton'
import { ExternalArrow } from './IconsSvg'

type Props = {
  text:string,
  code:string,
  demo:string,
}

const ProjectSummary = ({text, code, demo}: Props) => {
  return (
  <div className='flex flex-col gap-[4vh] lg:gap-0 lg:flex-row justify-between items-start lg:items-center'>
    <p className='lg:w-[30vw] font-roboto font-medium text-darkest-dark text-[4.3vw] leading-[6vw] lg:text-[1.8vw] lg:leading-[3vw]'>
      {text}
    </p>
    <div className='flex gap-[10vw] lg:gap-[4vw] justify-end'>
      {code ? <WavyButton href={code} external={true} reverse={false} text="Read Code" svg={ExternalArrow} /> : ''}
      {demo ? <WavyButton href={demo} external={true} reverse={false} text="Live Demo" svg={ExternalArrow} /> : ''}
    </div>
  </div>
  )
}

export default ProjectSummary