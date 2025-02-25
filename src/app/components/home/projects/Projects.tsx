import React, {useState} from 'react'
import Heading from '../../global/Heading'
import ProjectListItem from './ProjectListItem'
import ProjectsModal from './ProjectsModal'
import SectionTitle from '../../global/SectionTitle'
import SectionHeading from '../../global/SectionHeading'
import ParagraphSmall from '../../global/ParagraphSmall'

interface Project {
  title: string
  subtitle: string
  src: string
  bgColor: string
  href: string
}

type Props = {}

const ProjectsSection = (props: Props) => {
  const projects: Project[] = [
    {
      title: 'Popping Bubbles Game',
      subtitle: 'computer game built with javascript',
      src: '/poppingbubbles.png',
      bgColor: '#202124',
      href: '/projects/poppingbubbles'
    },
    {
      title: 'Phonebook',
      subtitle: 'frontend & backend with react + node.js',
      src: '/phonebook.png',
      bgColor: '#C6DAE2',
      href: '/projects/phonebook'
    },
    {
      title: 'To-do List App',
      subtitle: 'web application built with javascript',
      src: '/listwebapp.png',
      bgColor: '#CF9BF4',
      href: '/projects/todolist'
    },
  ]

  const [modal, setModal] = useState({active: false, index:0})

  return (
    <section id='projects' className='relative px-[7vw] lg:px-[7vw] py-20 lg:py-36 flex flex-col lg:items-center' >
      <SectionTitle content="personal work" />
      <SectionHeading content="Things I’ve built, broken, and learned from." />
      <div className='flex flex-col lg:flex-row lg:pt-20'>
        <div className='lg:w-1/3 lg:pr-14'>
          <ParagraphSmall content={"Some projects solve real-world problems, others are about learning, experimenting, and just having fun. Sure, there are technical choices I might rethink today, but that’s what makes them special—they’re raw, real, and part of my journey."} />
        </div>
        <div className='lg:w-2/3'>
          <ul className='w-full'>
            {projects.map((project, index) => {
              return(
                <ProjectListItem key={index} index={index} project={project} setModal={setModal} />
              )
            })}
          </ul>
          <ProjectsModal modal={modal} projects={projects} />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection