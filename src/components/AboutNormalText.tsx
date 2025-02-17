import React from 'react'

type Props = {
    text: string
}

const AboutNormalText = ({text}: Props) => {
  return (
    <span className='font-roboto font-bold text-darkest-dark text-[3vw] leading-[5.5vw] lg:text-[1.2vw] lg:leading-[2vw]'>{text}</span>
  )
}

export default AboutNormalText