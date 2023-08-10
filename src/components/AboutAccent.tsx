import React from 'react'

type Props = {
    text: string
}

const AboutAccent = ({text}: Props) => {
  return (
    <span className='text-[2.3vw] font-sans text-stroke text-transparent font-bold'>{text}</span>
  )
}

export default AboutAccent