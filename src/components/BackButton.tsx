import Link from 'next/link'
import React from 'react'

type Props = {
  href:string
}

const BackButton = ({href}: Props) => {
  return (
    <Link href={href}>
      <button className='flex flex-row items-center gap-[1vw] font-roboto font-black text-darkest-dark md:inline-flex text-[4vw] lg:text-[1.25vw] py-[0.2vw] border-b-[2px] lg:border-b-[3px] border-b-darkest-dark border-solid'>
        Back to projects
      </button>
    </Link>
  )
}

export default BackButton