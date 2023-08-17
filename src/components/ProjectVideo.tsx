import React from 'react'

type Props = {
  src:string
}

const ProjectVideo = ({src}: Props) => {
  return (
    <video autoPlay loop playsInline muted className='object-cover rounded-[1.25vw] w-[100%] self-center '>
      <source src={src} type='video/mp4'/>
    </video>
  )
}

export default ProjectVideo