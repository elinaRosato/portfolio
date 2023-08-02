import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link'
import Nav from './Nav'


type Props = {}

function Header({}: Props) {
const [isActive, setIsActive] = useState(false)

	return (
		<motion.header initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.5}}>
			<div className='hidden lg:flex fixed w-full bg-almost-white top-0 items-center justify-between px-10 mx-auto z-20 border-2 border-y-darkest-dark'>
				<h1 className='nav-button visible font-sans font-black text-2xl'>Elina Rosato</h1>
				<nav>
					<ul className='flex flex-row items-center font-sans font-normal'>
						<Link href="#about" scroll={false}><button className='nav-button mr-7 ' >my story</button></Link>
						<Link href="#portfolio" scroll={false}><button className='nav-button mr-7 ' >portfolio</button></Link>
						<Link href="#skills" scroll={false}><button className='nav-button mr-7' >stack</button></Link>
					</ul>
				</ nav>
				<div className='flex flex-row items-center text-darkest-dark cursor-pointer'>
					<button className='font-roboto font-black text-darkest-dark md:inline-flex text-xl  py-1 border-b-[3px] border-b-darkest-dark border '>Let&apos;s work together</button>
				</div>
			</div>
			<div className='fixed right-0 m-5 z-30 flex flex-row w-full items-center justify-end cursor-pointer lg:hidden'>
				<div onClick={() => setIsActive(!isActive)} className={`relative w-14 h-14 rounded-full bg-darkest-dark flex flex-col justify-center items-center ${isActive ? 'gap-0' : ' gap-[6px]'}`}>
					<div className={`w-2/5 bg-almost-white h-[1px] transition-all duration-200 ${isActive ? ' w-0' : ''}`} />
					<div className={`w-2/5 bg-almost-white h-[1px] transition-all duration-200 ${isActive ? ' -rotate-45' : ''}`} />
					<div className={`w-2/5 bg-almost-white h-[1px] transition-all duration-200 ${isActive ? 'rotate-45' : ''}`} />
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isActive && <Nav setIsActive={setIsActive} isActive={isActive} />}
			</AnimatePresence>
		</motion.header>
  )
}

export default Header