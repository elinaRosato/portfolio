import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='snap-start font-sans relative pt-[12vh] lg:pt-[15vh] flex flex-col overflow-hidden justify-center lg:justify-start' >
      
      <div className='px-64 text-center'>
        <p className=' p-[0.5vw] font-roboto font-bold text-darkest-dark text-[5vw] leading-[8.5vw] lg:text-[2vw] lg:leading-[3.7vw] '>
          thanks for getting this far! In case you wondered, this project was built with nextJS, TypeScript, TailwindCSS and Framer Motion.
        </p>
        <p className=' p-[0.5vw] font-roboto font-bold text-darkest-dark text-[5vw] leading-[8.5vw] lg:text-[2vw] lg:leading-[3.7vw] '>
          check out my 
          <span className='text-[5.4vw] leading-[8.5vw] lg:text-[2.3vw] lg:leading-[3.7vw] font-sans font-bold text-stroke text-transparent'> gitHub</span>
           and 
           <span className='text-[5.4vw] leading-[8.5vw] lg:text-[2.3vw] lg:leading-[3.7vw] font-sans font-bold text-stroke text-transparent'> resume </span>.
        </p>
        <p className=' p-[0.5vw] font-roboto font-bold text-darkest-dark text-[5vw] leading-[8.5vw] lg:text-[2vw] lg:leading-[3.7vw] '>
          hit me up on 
          <span className='text-[5.4vw] leading-[8.5vw] lg:text-[2.3vw] lg:leading-[3.7vw] font-sans font-bold text-stroke text-transparent'> LinkedIn </span>
           or  
           <span className='text-[5.4vw] leading-[8.5vw] lg:text-[2.3vw] lg:leading-[3.7vw] font-sans font-bold text-stroke text-transparent'> email </span>.
        </p>
        <p className=' p-[0.5vw] text-[4vw] leading-[8vw] lg:text-[1.6vw] text-center font-semibold text-accent font-sans '>
          designed and developed by Elina Rosato
        </p>
      </div>
    </footer>
  )
}

export default Footer