import React from 'react'

type Props = {
    text: string
}

const AboutNormalText = ({text}: Props) => {
  return (
    <span className='font-roboto font-bold text-darkest-dark text-[2vw] leading-[3.7vw]'>{text}</span>
  )
}

export default AboutNormalText