import Link from 'next/link'
import React, { ReactElement } from 'react'

type Props = {
  href: string,
  external: boolean,
  text: string,
  svg: ReactElement,
  reverse: boolean
}

const WavyButton = ({href, external, text, svg, reverse}: Props) => {
  return (
    <Link href={href} target={ external ? "_blank" : ''} className='flex items-start'>
      <button className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center gap-[2.5vw] lg:gap-[1vw] font-roboto font-black text-darkest-dark md:inline-flex text-[3vw] lg:text-[1.4vw] pb-[0.2vw] mb-[1.3vw] border-b-[3px] border-b-darkest-dark border-solid lg:hover:bg-transparent lg:hover:border-transparent lg:hover:bg-wavy-button lg:hover:bg-repeat-x lg:hover:bg-[length:50px_30px] lg:hover:bg-bottom lg:hover:pb-[1.5vw] lg:hover:mb-0`}>
        {text}
        {svg}
      </button>
    </Link>
    
  )
}

export default WavyButton