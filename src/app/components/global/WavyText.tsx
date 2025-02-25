import React from 'react'

type Props = {
    content: string
  }

const WavyText = ({ content }: Props) => {
  return (
    <p className='self-end px-10 wavy-text font-handwritten text-xs lg:text-xl text-accent'>
      {Array.from(content).map((char, index) => (
          <span key={index} className='wavy-char' style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
          </span>
      ))}
    </p>
  )
}

export default WavyText