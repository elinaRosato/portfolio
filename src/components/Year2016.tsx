import React from 'react'
import AboutYear from './AboutYear'
import AboutAccent from './AboutAccent'
import AboutNormalText from './AboutNormalText'

type Props = {}

const Year2016 = (props: Props) => {
  return (
    <div className={`min-h-[70vh] flex flex-col p-[3vw] lg:p-0 lg:flex-row justify-center lg:justify-between gap-[7vw] items-center`}>
      <AboutYear year='2016' />
      <p>
        <AboutNormalText text='I started my' />
        <AboutAccent text=' Mechanical Engeneering ' />
        <AboutNormalText text='degree with absolutely no clue where life would take me. Algorithms, data structures, ' />
        <AboutAccent text=' Python ' />
        <AboutNormalText text='and' />
        <AboutAccent text=' Haskell ' />
        <AboutNormalText text='became my jam 🤘' />
      </p>
    </div>
  )
}

export default Year2016