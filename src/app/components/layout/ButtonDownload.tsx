import React from 'react'
import Link from 'next/link'

type Props = {}

function ButtonDownload({}: Props) {
  return (
    <Link href='/ElinaRosato_CV.pdf' target='_blank' className='flex flex-row items-center gap-[0.5vw] font-roboto font-black text-darkest-dark md:inline-flex text-[1.2vw] pb-[0.1vw] border-b-[3px] border-b-darkest-dark hover:border-b-accent border-solid  '>
      view cv
      <svg className='w-[1.3vw] h-[1.3vw]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f0eff5"  viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="#f0eff5"></path>
      </svg>
    </Link>
  )
}

export default ButtonDownload