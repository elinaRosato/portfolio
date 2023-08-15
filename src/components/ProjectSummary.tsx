import React from 'react'

type Props = {
  text:string
}

const ProjectSummary = ({text}: Props) => {
  return (
    <p className='lg:w-[30vw] font-roboto font-medium text-darkest-dark text-[4.3vw] leading-[6vw] lg:text-[1.8vw] lg:leading-[3vw]'>
      {text}
    </p>
  )
}

export default ProjectSummary