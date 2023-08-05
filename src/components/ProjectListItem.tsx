import React, {useState} from 'react'
import Image from 'next/image'

type Props = {
  index: number,
  title: string,
  subtitle: string,
  src: string,
  setModal: (modal: { active: boolean, index: number }) => void,
}

const ProjectListItem = ({index, title, subtitle, src, setModal}: Props) => {

  return (
    <li onMouseEnter={() => {setModal({active: true, index:index})}} onMouseLeave={() => {setModal({active: false, index:index})}} className={`flex justify-between  font-sans  w-full py-5 px-5 hover:px-0 border-t border-slate-600 border-solid ${index==0 ? 'border-none' : ''} hover:cursor-pointer hover:py-8  transition-all duration-200 `}>
      <div className='flex gap-9 text-4xl text-darkest-dark '>
        <p className='text-5xl font-sans text-accent'>0{index}</p>
        <h3 className='text-4xl text-darkest-dark '>{title} </h3>
      </div>
      <p className='text-2xl text-slate-600'>{subtitle}</p>
    </li>
  )
}

export default ProjectListItem