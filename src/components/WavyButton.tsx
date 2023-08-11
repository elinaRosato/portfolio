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
    <Link href={href} target={ external ? "_blank" : ''} className='flex items-start'>
      <button className=' flex flex-row items-center gap-[2.5vw] lg:gap-[1vw] font-roboto font-black text-darkest-dark md:inline-flex text-[4vw] lg:text-[1.4vw] pb-[0.2vw] mb-[1.3vw] border-b-[3px] border-b-darkest-dark border-solid hover:bg-transparent hover:border-b-0 hover:bg-wavy-button hover:bg-repeat-x hover:bg-[length:50px_30px] hover:bg-bottom hover:pb-[1.5vw] hover:mb-0'>
        {text}
        {svg}
      </button>
    </Link>
    
  )
}

export default WavyButton