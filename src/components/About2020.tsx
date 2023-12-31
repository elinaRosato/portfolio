import React from 'react'
import AboutYear from './AboutYear'
import AboutAccent from './AboutAccentText'
import AboutNormalText from './AboutNormalText'

type Props = {}

const Year2020 = (props: Props) => {
  return (
    <div className={`min-h-[90vh] lg:min-h-[70vh]  flex flex-col p-[3vw] lg:p-0 lg:flex-row justify-center lg:justify-between gap-[7vw] items-center snap-center pt-[8vh]`}>
      <AboutYear year='2020' />
      <p>
        <AboutNormalText text='COVID was my chance to make a big' />
        <AboutAccent text=' change ' />
        <AboutNormalText text='🚀 The uncertainty of the world couldnt shake my determination. Armed with a second-hand computer, ' />
        <AboutAccent text=' YouTube ' />
        <AboutNormalText text='became my school 📚 Being a free spirit had its charm, but shaping my ' />
        <AboutAccent text=' future ' />
        <AboutNormalText text='was my new groove.' />
      </p>
    </div>
  )
}

export default Year2020