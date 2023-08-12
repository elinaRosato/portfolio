import React from 'react'

type Props = {
    text: string
  }

const Heading = ({ text }: Props) => {
  return (
    <h2 className='ml-[10vw] lg:ml-0 text-[8vw] lg:text-[2vw] text-darkest-dark font-sans lg:pb-[0.3vw] border-b-[3.5px] lg:border-b-[4px] border-b-accent border-solid font-medium text-left self-start'>{text}</h2>
  )
}

export default Heading