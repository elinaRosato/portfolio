import React from 'react'

type Props = {
    text: string
}

const AboutAccent = ({text}: Props) => {
  return (
    <span className=' text-[3.4vw] leading-[5.5vw] lg:text-[1.3vw] lg:leading-[2vw] font-sans font-bold text-stroke text-transparent'>{text}</span>
  )
}

export default AboutAccent