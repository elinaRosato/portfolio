import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'


type Props = {}

function Header2({}: Props) {
	return (
    <motion.div 
	initial={{
		y: 100,
		opacity: 0,
	}} 
	animate={{
		y: 0,
		opacity: 1,
	}}
	transition={{
		duration: 1.5
	}} 
	className=' w-full fixed bottom-0 bg-almost-white hidden lg:flex items-center justify-between px-10 mx-auto z-20 border-2 border-y-darkest-dark'>

			<div className='flex flex-row items-center text-darkest-dark cursor-pointer'>
				<button className='font-roboto font-black text-darkest-dark hidden md:inline-flex text-xl py-1 border-none '>LinkedIn</button>
			</div>
			<div className='flex flex-row items-center text-darkest-dark cursor-pointer'>
				<button className='font-sans font-medium text-darkest-dark md:inline-flex text-xl  py-1 border-none'>rosatoelina@gmail.com</button>
			</div>
		</motion.div>
  )
}

export default Header2