import React from 'react'

type Props = {
    text: string
  }

const Heading = ({ text }: Props) => {
  return (
    <h2 className=' text-5xl lg:text-10xl text-darkest-dark font-roboto w-full'>{text}</h2>
  )
}

export default Heading