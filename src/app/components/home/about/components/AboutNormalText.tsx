import React from 'react'

type Props = {
    text: string
}

const AboutNormalText = ({text}: Props) => {
  return (
    <span className='font-roboto font-medium text-darkest-dark text-[3vw] leading-[5.5vw] lg:text-[1vw] lg:leading-[1.3vw]'>{text}</span>
  )
}

export default AboutNormalText