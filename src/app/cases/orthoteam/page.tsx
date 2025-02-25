'use client'
import React, { useEffect } from 'react'
import ProjectTemplate from '../../components/projectTemplate/ProjectTemplate'
import ProgressBar from '../../components/projectTemplate/ProgressBar'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { ProjectContent } from '../../../types/types'


interface Images {
  src: string,
  alt: string,
  mobile: boolean,
}
interface Paragraphs {
  subtitle?: string,
  text: string[],
  image?: string,
}
interface Control {
  project: string,
  href: string,
}
interface Controls {
  previous: Control,
  next: Control,
}

type Props = {}

const OrthoTeam = (props: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 }
      }));
    }
  }, [controls, inView]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.zIndex = '10';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.zIndex = '1';
  };

  const projectTitle: string[] = ['OrthoTeam']
  const projectSummary: string = 'A Bold and Disruptive Website for a Game-Changing Brand.'
  const code: string = ''
  const demo: string = 'https://www.orthoteam.se'

  const projectContent: ProjectContent[] = [
    { type: "h2", content: "The Background" },
    { type: "p", content: `OrthoTeam is a platform dedicated to providing high-quality resources, insights, and products for professionals and enthusiasts
        in the orthopedic industry. When the team at OrthoTeam approached me, they had a website that lacked strong brand identity and visual
        cohesion. The existing logo was poorly designed, and the overall aesthetic didn’t reflect the cutting-edge nature of their industry.
        They needed a complete overhaul — something modern, structured, and visually appealing. The goal was to create a website that not only
        looked professional but also made navigating its vast content easy and intuitive.`},
    { type: "h2", content: "The Design Process" },
    { type: "p", content: `Before diving into design and development, we started with a deep planning phase to ensure every decision aligned with
        OrthoTeam’s brand identity. We gathered a vision board filled with bold colors, unconventional layouts, and dynamic elements to
        establish the aesthetic direction.
      `},
  ]
  const control: Controls = {
    previous: {
      project: '3D Center',
      href: '/cases/3dcenter'
    },
    next: {
      project: 'Baccello Landing Page',
      href: '/cases/baccello'
    }
  }
  const images: Images[] = [
    {
      src: '/orthoteam_hero.png',
      alt: 'Haparanda Hero',
      mobile: false,
    },
    {
      src: '/haparanda2.png',
      alt: 'Haparanda Vision',
      mobile: false,
    },
    {
      src: '/haparanda3.png',
      alt: 'Haparanda Mockup',
      mobile: false,
    },
    {
      src: '/orthoteam_hero.png',
      alt: 'Haparanda Hero',
      mobile: false,
    },
    {
      src: '/haparanda2.png',
      alt: 'Haparanda Vision',
      mobile: false,
    },
  ]

  return (
    <div className={`min-h-screen overflow-scroll bg-almost-white flex flex-col`}>
      <ProjectTemplate 
        projectContent={projectContent} 
        projectTitle={projectTitle} 
        projectSummary={projectSummary} 
        code={''} demo={demo} 
        images={images} 
        controls={control}
        href='/#cases' 
      />
      <ProgressBar />
    </div>
      
  )
}

export default OrthoTeam