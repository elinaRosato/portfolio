import React from 'react'

type Props = {
    year: string
}

const AboutYear = ({year}: Props) => {
  return (
    <h3 className='text-[20vw] lg:text-[12vw] font-sans font-bold text-stroke-2 text-transparent '>{year}</h3>
  )
}

export default AboutYear