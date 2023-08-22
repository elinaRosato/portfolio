import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=' font-sans relative pt-[12vh] lg:pt-[15vh] flex flex-col overflow-hidden justify-center lg:justify-start' >
      
      <div className=''>
        <p className=' p-[0.5vw] text-[4vw] leading-[8vw] lg:text-[1.6vw] text-center font-semibold text-accent font-sans '>
          find me on LinkedIn, or check my repositories on GitHub, send me an email.
          </p>
      </div>
    </footer>
  )
}

export default Footer