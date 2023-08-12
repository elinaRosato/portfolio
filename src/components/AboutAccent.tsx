import React from 'react'

type Props = {
    text: string
}

const AboutAccent = ({text}: Props) => {
  return (
    <span className=' text-[5.4vw] leading-[8.5vw] lg:text-[2.3vw] lg:leading-[3.7vw] font-sans font-bold text-stroke text-transparent'>{text}</span>
  )
}

export default AboutAccent