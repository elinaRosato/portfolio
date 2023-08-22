import React, { useState } from 'react'
import { motion } from "framer-motion"


type Props = {}

function EmailButton({}: Props) {

	const email = 'rosatoelina@gmail.com'
	const [isHovered, setIsHovered] = useState(false)
	const [isCopied, setIsCopied] = useState(false)

	const handleHover = () => {
		setIsHovered(true);
	}

	const handleMouseLeave = () => {
		setIsHovered(false);
	}

	const handleCopyEmail = async () => {
	try {
		await navigator.clipboard.writeText(email)
		setIsCopied(true)
		alert('Email copied to clipboard')
	} catch (error) {
		console.error('Copy failed:', error)
	}
	};
	
	return (
	<motion.div initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.5}}
		className=' w-full fixed bottom-0 bg-transparent hidden lg:flex items-center justify-end px-[4vw] mx-auto z-20 '>
			<button onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} onClick={handleCopyEmail} className='flex flex-row gap-[0.8vw] items-center justify-center w-[15.5vw] bg-darkest-dark cursor-pointer py-[0.5vw] px-[1vw]'>
				<svg className={`w-[1.5vw] h-[1.5vw] ${!isHovered ? 'hidden' : 'flex'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="216 184 216 40 72 40" fill="none" stroke="#f0eff5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><rect x="40" y="72" width="144" height="144" fill="none" stroke="#f0eff5" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>
				<p className='font-roboto font-normal text-almost-white md:inline-flex text-[1.2vw] border-b-[2.5px] border-b-almost-white border-solid '>
					{!isHovered ? "rosatoelina@gmail.com" : "copy email !"}
				</p>
			</button>
		</motion.div>
	);

}

export default EmailButton