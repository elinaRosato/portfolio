import React, {useState} from 'react'
import Heading from './Heading'
import ProjectListItem from './ProjectListItem'
import ProjectsModal from './ProjectsModal'

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
      title: 'Popping Bubbles',
      subtitle: 'Computer game',
      src: '/poppingbubbles.png',
      bgColor: '#202124',
      href: '/projects/poppingbubbles'
    },
    {
      title: 'Phonebook',
      subtitle: 'Backend with Node.js',
      src: '/intencionelementos.png',
      bgColor: '#202124',
      href: '/projects/phonebook'
    },
    {
      title: 'List Web App',
      subtitle: 'JavaScript Web App',
      src: '/todolist.png',
      bgColor: '#CF9BF4',
      href: '/projects/listwebapp'
    },
    {
      title: 'Baccello Landing Page',
      subtitle: 'Wordpress site',
      src: '/baccello.png',
      bgColor: '#D566C1',
      href: '/projects/poppingbubbles'
    },
    {
      title: 'Porridge ecommerce',
      subtitle: 'React ecommerce',
      src: '/test4.png',
      bgColor: '#C6DAE2',
      href: '/projects/poppingbubbles'
    },
  ]

  const [modal, setModal] = useState({active: false, index:0})

  return (
    
    <section id='portfolio' className='snap-start relative flex flex-col gap-[3vw] min-h-[95vh] py-[18vw] lg:py-[10vw] lg:px-[7vw] mx-auto text-left items-center justify-evenly ' >
        <Heading text="portfolio" />
        <ul className='w-full'>
          {projects.map((project, index) => {
            return(
              <ProjectListItem key={index} index={index} project={project} setModal={setModal} />
            )
          })}
        </ul>
        <ProjectsModal modal={modal} projects={projects} />
    </section>


    
  )
}

export default ProjectsSection