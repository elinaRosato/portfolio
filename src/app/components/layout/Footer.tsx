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
          <p className='text-lg'><span className='pr-2 text-green-500'>●</span>open to work</p>
        </div>
        <div className='md:flex md:w-3/4 justify-between'>
          <div className='pb-5'>
            <SectionTitle content={"menu"} />
            <a className='block my-3' href="#about"><ParagraphSmall content={"My Story"}/></a>
            <a className='block my-3' href="#cases"><ParagraphSmall content={"Case Studies"}/></a>
            <a className='block my-3' href="#projects"><ParagraphSmall content={"Personal Work"}/></a>
            <a className='block my-3' href="#services"><ParagraphSmall content={"My Jam"}/></a>
            <a className='block my-3' href="#contact"><ParagraphSmall content={"Let's Connect"}/></a>
          </div>
          <div className='pb-5'>
            <SectionTitle content={"case studies"} />
            <a className='block my-3' href="/cases/haparanda"><ParagraphSmall content={"Haparanda"}/></a>
            <a className='block my-3' href="/cases/3dcenter"><ParagraphSmall content={"3DCenter"}/></a>
            <a className='block my-3' href="/cases/orthoteam"><ParagraphSmall content={"OrthoTeam"}/></a>
            <a className='block my-3' href="/cases/baccello"><ParagraphSmall content={"Baccello"}/></a>
          </div>
          <div className='pb-5'>
            <SectionTitle content={"personal work"} />
            <a className='block my-3' href="/projects/projects/poppingbubbles"><ParagraphSmall content={"Popping Bubbles"}/></a>
            <a className='block my-3' href="/projects/phonebook"><ParagraphSmall content={"Phonebook App"}/></a>
            <a className='block my-3' href="/projects/todolist"><ParagraphSmall content={"To-Do List App"}/></a>
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