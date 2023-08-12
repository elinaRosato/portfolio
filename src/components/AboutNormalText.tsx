import React from 'react'

type Props = {
    text: string
}

const AboutNormalText = ({text}: Props) => {
  return (
    <span className='font-roboto font-bold text-darkest-dark text-[5vw] leading-[8.5vw] lg:text-[2vw] lg:leading-[3.7vw]'>{text}</span>
  )
}

export default AboutNormalText