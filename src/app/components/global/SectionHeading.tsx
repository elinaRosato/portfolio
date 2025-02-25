import React from 'react'

type Props = {
    content: string
  }

const SectionHeading = ({ content }: Props) => {
  return (
    <h3 className='
      font-medium 
      md-w-2/3
      ml-[8vw] lg:ml-0 
      text-4xl md:text-5xl 
      text-darkest-dark 
      py-5  
    '>
        {content}
    </h3>
  )
}

export default SectionHeading