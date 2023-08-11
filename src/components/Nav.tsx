import React from 'react'
import NavItem from './NavItem'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className='flex flex-row items-center font-sans font-normal gap-[4.5vw]'>
      <NavItem link="/#about" text='my story'/>
      <NavItem link="/#portfolio" text='portfolio'/>
      <NavItem link="/#skills" text='skills'/>
    </ nav>
  )
}

export default Nav