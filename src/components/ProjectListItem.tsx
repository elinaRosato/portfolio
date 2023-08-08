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
    <li onMouseEnter={() => {setModal({active: true, index:index})}} onMouseLeave={() => {setModal({active: false, index:index})}} className={`flex flex-col gap-2 justify-between font-sans  w-full py-5 lg:px-5 hover:px-0 border-t border-slate-600 border-solid ${index==0 ? 'border-none' : ''} hover:cursor-pointer   transition-all duration-200 `}>
      <div className='flex flex-col gap-2 lg:flex-row justify-between'>
        <div className='flex gap-9 lg:text-4xl text-darkest-dark '>
          <p className='text-xl lg:text-4xl font-sans font-medium text-accent'>0{index}</p>
          <h3 className='font-roboto font-medium text-xl lg:text-4xl text-darkest-dark '>{title} </h3>
        </div>
        <p className='text-m lg:text-xl text-slate-600'>{subtitle}</p>
      </div>
      <Image src={src}  height={208} width={384}  objectFit='cover' alt={title} className='lg:hidden'/>
    </li>
  )
}

export default ProjectListItem