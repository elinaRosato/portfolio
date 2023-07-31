import React from 'react'
import Heading from './Heading'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='min-h-screen pt-20 flex flex-col text-left px-24 items-center justify-evenly mx-auto' >
      <Heading text="portfolio" />
      <ul className='w-full flex flex-col gap-8 pt-10 font-sans'>
        <li className='text-5xl text-darkest-dark w-full bg-slate-200'>
          Popping Bubbles
          <span className='hidden'>Computer game</span>
        </li>
        <li className='text-5xl text-darkest-dark w-full'>
          To-do list
          <span className='hidden'>Web app</span>
        </li>
        <li className='text-5xl text-darkest-dark w-full'>
          Baccello.io
          <span className='hidden'>Wordpress ecommerce</span>
        </li>
        <li className='text-5xl text-darkest-dark w-full'>
          Porridge
          <span className='hidden'>Ecommerce</span>
        </li>
        <li className='text-5xl text-darkest-dark w-full'>
          Phonebook
          <span>Web app</span>
        </li>
      </ul>
    </div>

    
  )
}

export default Projects