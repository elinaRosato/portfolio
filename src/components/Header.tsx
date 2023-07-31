import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link'
import Nav from './Nav'


type Props = {}

function Header({}: Props) {
const [isActive, setIsActive] = useState(false)



	return (
		<>
    <motion.header 
			initial={{
				y: -100,
				opacity: 0,
			}} 
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: 1.5
			}} 
			className='sticky w-full bg-slate-200 top-0 flex  px-10 mx-auto z-20 border-2 border-y-darkest-dark'>
				<div className='hidden lg:flex w-full items-center justify-between'>
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
				<div className='relative z-10 flex flex-row w-full items-center justify-end  text-darkest-dark cursor-pointer lg:hidden'>
					<div onClick={() => setIsActive(!isActive)} className={`relative w-14 h-14 flex flex-col justify-center items-center ${isActive ? 'gap-0' : 'gap-2'}`}>
						<motion.div className={`w-2/5 bg-darkest-dark h-[1px] transition-all duration-200 ${isActive ? ' -rotate-45' : ''}`} />
						<motion.div className={`w-2/5 bg-darkest-dark h-[1px] transition-all duration-200 ${isActive ? 'rotate-45' : ''}`} />
					</div>
				</div>
			
		</motion.header>
		<AnimatePresence mode="wait">
			{isActive && <Nav />}
		</AnimatePresence>
		
		</>

  )
}

export default Header