import React from 'react'
import Heading from './Heading'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col text-left max-w-7xl px-6 items-center justify-evenly mx-auto' >
      <Heading text="My story" />
      <div className='flex flex-col justify-center'>
        <p className=' text-2xl font-medium text-darkest-dark font-sans'>hi, i’m Elina! frontend developer, self-taught and a life-long learner.</p>
        <p className=' text-2xl font-medium text-darkest-dark font-sans'>born and raised in Buenos Aires, currently based in Malmö.</p>
        <p className=' text-2xl font-medium text-darkest-dark font-sans'>I don&apos;t have all the answers. What I have is curiosity, passion and the belief that every challenge is a chance.</p>
      </div>
    </div>
  )
}

export default About