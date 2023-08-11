import React from 'react'

type Props = {
    text: string
}

const AboutAccent = ({text}: Props) => {
  return (
    <span className='text-[2.3vw] leading-[3.7vw] font-sans font-bold text-stroke text-transparent'>{text}</span>
  )
}

export default AboutAccent