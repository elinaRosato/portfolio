import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  index: number,
  title: string,
  subtitle: string,
  src: string,
  setModal: (modal: { active: boolean, index: number }) => void,
}

const ProjectListItem = ({index, title, subtitle, src, setModal}: Props) => {
  return (
    <Link href="/projects/poppingbubbles" onMouseEnter={() => {setModal({active: true, index:index})}} onMouseLeave={() => {setModal({active: false, index:index})}} className={`flex flex-col gap-[0.5vw] justify-between w-full py-[1vw] lg:px-[1.5vw] hover:px-0 border-t border-slate-600 border-solid ${index==0 ? 'border-none' : ''} hover:cursor-pointer transition-all duration-200 `}>
      <div className='p-[10vw] lg:p-0 flex flex-col gap-[2.3vw] lg:flex-row justify-start lg:items-center'>
        <p className='text-[10vw] lg:text-[2.3vw] font-sans font-semibold text-accent'>0{index+1}</p>
        <div className='flex flex-col lg:flex-row gap-[2.5vw]'>
          <h3 className='font-roboto font-medium text-[6vw] lg:text-[2vw] text-darkest-dark '>{title} </h3>
          <p className='font-roboto font-medium text-[5vw] lg:text-[2vw] text-accent'>{subtitle}</p>
        </div>
        <Image src={src}  height={208} width={384}  objectFit='cover' alt={title} className='lg:hidden w-[80vw]'/>
      </div>
    </Link>
  )
}

export default ProjectListItem