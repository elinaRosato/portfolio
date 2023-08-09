import React from 'react'

type Props = {
  subtitle: string,
  text: string[]
}

const ContentParagraph = ({subtitle, text}: Props) => {
  return (
    <div className='py-6 flex flex-col gap-3'>
      <h2 className='font-sans font-bold text-darkest-dark text-[2vw] leading-[5vw]'>{subtitle}</h2>
      {text.map((line, index) => {
        return(
          <p key={index} className='font-roboto font-normal text-darkest-dark text-[1.4vw] leading-[2.7vw]'>{line}</p>
        )
      })}
      
    </div>
  )
}

export default ContentParagraph