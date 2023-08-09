import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useRouter } from 'next/router'


type Props = {}

function Header2({}: Props) {
	const router = useRouter()

  const goToAboutPage = () => {
    router.push('/about'); // Navigates to the '/about' page
  }

	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	}

	const handleMouseLeave = () => {
		setIsHovered(false);
	}
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
	className=' w-full fixed bottom-0 bg-transparent hidden lg:flex items-center justify-end px-20 mx-auto z-20 '>
			<div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className='flex flex-row gap-3 items-center justify-center w-60 bg-darkest-dark cursor-pointer py-2 px-4'>
				<svg className={`w-7 h-7 ${!isHovered ? 'hidden' : 'flex'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="216 184 216 40 72 40" fill="none" stroke="#f0eff5" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="40" y="72" width="144" height="144" fill="none" stroke="#f0eff5" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>				<button className='font-roboto font-normal text-almost-white md:inline-flex text-lg border-b-[2.5px] border-b-almost-white border-solid '>{!isHovered ? "rosatoelina@gmail.com" : "copy email !"}</button>
			</div>
		</motion.div>
  )
}

export default Header2