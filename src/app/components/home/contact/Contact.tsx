import React from 'react'
import ParagraphSmall from '../../global/ParagraphSmall'
import SectionHeading from '../../global/SectionHeading'
import SectionTitle from '../../global/SectionTitle'
import ParagraphBig from '../../global/ParagraphBig'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section id='contact' className='relative px-[7vw] lg:px-[7vw] py-20 lg:pt-36 lg:pb-56' >
      <SectionTitle content="let's connect" />
      <SectionHeading content="The internet is a big place, but luckily, I’m pretty easy to find. " />
      <div className='flex flex-col md:flex-row md:justify-between pt-14'>
        <div className='pb-8 md:w-1/3 lg:pr-14'>
          <ParagraphSmall content="If you have a project in mind, " />
          <ParagraphSmall content="a wild idea you want to bring to life," />
          <ParagraphSmall content="or just feel like saying hi" />
          <ParagraphBig content="—let’s talk!" />
        </div>

        <div className=' md:w-1/2'>
          <p className=' p-[0.5vw] font-bold text-darkest-dark text-3xl lg:leading-tight '>
            You can reach me through 
            <a 
            href='https://www.linkedin.com/in/elina-rosato/' 
            target="_blank"
            className='text-3xl lg:leading-tight font-sans font-bold text-stroke text-transparent'> LinkedIn </a>
            , send me an  
            <a 
              href='mailto:rosatoelina@gmail.com' 
              target="_blank"
              className='text-3xl lg:leading-tight font-sans font-bold text-stroke text-transparent'> email </a>
            , or check out what I’m up to on 
            <a 
              href='https://www.instagram.com/elinarosato/' 
              target="_blank"
              className='text-3xl lg:leading-tight font-sans font-bold text-stroke text-transparent'> Instagram </a>
            or  
            <a 
              href='https://www.github.com/elinarosato/' 
              target="_blank"
              className='text-3xl lg:leading-tight font-sans font-bold text-stroke text-transparent'> Github </a>.
          </p> 
        </div>
      </div>
    </section>
  )
}

export default Contact