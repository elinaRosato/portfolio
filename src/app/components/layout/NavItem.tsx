import Link from 'next/link'
import React from 'react'

type Props = {
  link: string,
  text: string
}

const NavItem = ({link, text}: Props) => {
  return (
    <Link href={link} scroll={false}>
      <button className='hidden lg:inline-flex font-sans font-semibold text-[1.25vw] hover:border-b-[3px] hover:border-b-accent hover:border-solid' >
        {text}
      </button>
    </Link>
  )
}

export default NavItem