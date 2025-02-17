import React from 'react'

type Props = {
    text: string
}

const AboutNormalText = ({text}: Props) => {
  return (
    <span className='font-roboto font-bold text-darkest-dark text-[3vw] leading-[5.5vw] lg:text-[1.5vw] lg:leading-[2.7vw]'>{text}</span>
  )
}

export default AboutNormalText