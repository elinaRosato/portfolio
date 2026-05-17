import React from 'react'
import ParagraphBig from '../global/ParagraphBig'
import SectionTitle from '../global/SectionTitle'
import ParagraphSmall from '../global/ParagraphSmall'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='relative px-[7vw] lg:px-[10vw] py-20 lg:py-24 lg:mx-[1.5vw] lg:border-2 lg:border-darkest-dark ' >
      <div className='flex flex-col lg:flex-row justify-between py-10 lg:py-20'>
        <div className='pb-10'>
          <p className='text-lg text-slate-400'>status</p>
          <p className='text-lg text-darkest-dark'><span className='pr-2 text-green-500'>●</span>open to work</p>
        </div>
        <div className='md:flex md:w-3/4 justify-between'>
          <div className='pb-5'>
            <SectionTitle content={"navigation"} />
            <a className='block my-3' href="#about"><ParagraphSmall content={"My Story"}/></a>
            <a className='block my-3' href="#projects"><ParagraphSmall content={"My Projects"}/></a>
            <a className='block my-3' href="#services"><ParagraphSmall content={"My Jam"}/></a>
            <a className='block my-3' href="#contact"><ParagraphSmall content={"Let's Connect"}/></a>
          </div>
          <div className='pb-5'>
            <SectionTitle content={"my projects"} />
            <a className='block my-3' href="/projects/drone"><ParagraphSmall content={"Autonomous Forest Drone"}/></a>
            <a className='block my-3' href="/projects/door-system"><ParagraphSmall content={"Smart Door System"}/></a>
            <a className='block my-3' href="/projects/plant-monitor"><ParagraphSmall content={"Smart Plant Monitor"}/></a>
            <a className='block my-3' href="/projects/teamely"><ParagraphSmall content={"Teamely"}/></a>
            <a className='block my-3' href="/projects/poppingbubbles"><ParagraphSmall content={"Popping Bubbles"}/></a>
          </div>
          <div className='pb-10'>
            <p className='text-lg text-slate-400'>check my web dev studio @</p>
            <p className='text-lg text-darkest-dark hover:text-accent'><a href="https://elinarosato.studio">elinarosato.studio</a></p>
          </div>
        </div>
      </div>
      
      <div className='flex justify-center items-center'>
        <ParagraphBig content={"2025 © Elina Rosato Studio"} />
      </div>
    </footer>
  )
}

export default Footer