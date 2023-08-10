import React from 'react'
import AboutYear from './AboutYear'
import AboutAccent from './AboutAccent'
import AboutNormalText from './AboutNormalText'

type Props = {}

const Year2018 = (props: Props) => {
  return (
    <div className={`w-full min-h-[70vh] flex justify-between gap-20 items-center snap-center`}>
      <p>
        <AboutNormalText text='The economy in ' />
        <AboutAccent text=' Argentina ' />
        <AboutNormalText text='was a real rollercoaster, so I decided to chase better opportunities 🌍 I packed my bags and embarked on a life-changing journey. ' />
        <AboutAccent text=' Denmark ' />
        <AboutNormalText text='and' />
        <AboutAccent text=' Sweden ' />
        <AboutNormalText text='became my homes, and Ive explored 20+ amazing countries along the way.' />
      </p>
      <AboutYear year='2018' />
    </div>
  )
}

export default Year2018