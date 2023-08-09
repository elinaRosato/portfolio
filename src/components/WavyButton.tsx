import Link from 'next/link'
import React, { ReactElement } from 'react'

type Props = {
  href: string,
  external: boolean,
  text: string,
  svg: ReactElement
}

const WavyButton = ({href, external, text, svg}: Props) => {
  return (
    <Link href={href} target={ external ? "_blank" : ''} className='flex items-center gap-4'>
      <button className='flex flex-row items-center gap-3 font-roboto font-black text-darkest-dark md:inline-flex text-xl py-1 mb-4 border-b-[3px] border-b-darkest-dark border-solid hover:bg-transparent hover:border-b-0 hover:bg-wavy-button hover:bg-repeat-x hover:bg-[length:50px_30px] hover:bg-bottom hover:pb-5'>
        {text}
        {svg}
      </button>
    </Link>
    
  )
}

export default WavyButton