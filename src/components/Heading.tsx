import React from 'react'

type Props = {
    text: string
  }

const Heading = ({ text }: Props) => {
  return (
    <h2 className=' text-5xl lg:text-[2vw] text-darkest-dark font-sans pb-[0.3vw] border-b-[4px] border-b-accent border-solid font-medium text-left self-start'>{text}</h2>
  )
}

export default Heading