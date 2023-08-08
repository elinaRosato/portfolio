import React, {useState} from 'react'
import Heading from './Heading'
import ProjectListItem from './ProjectListItem'
import Modal from './Modal'

interface Project {
  title: string;
  subtitle: string;
  src: string;
}

type Props = {}

const Projects = (props: Props) => {
  const projects: Project[] = [
    {
      title: 'Popping Bubbles',
      subtitle: 'Computer game',
      src: '/poppingbubbles.png'
    },
    {
      title: 'List Web App',
      subtitle: 'JavaScript Web App',
      src: '/todolist.png'
    },
    {
      title: 'Baccello Landing Page',
      subtitle: 'Wordpress site',
      src: '/baccello.png'
    },
    {
      title: 'Porridge ecommerce',
      subtitle: 'React ecommerce',
      src: '/test4.png'
    },
    {
      title: 'Intención Elementos',
      subtitle: 'Html & css',
      src: '/intencionelementos.png'
    },
  ]

  const [modal, setModal] = useState({active: false, index:0})

  return (
    
    <section id='portfolio' className='relative snap-start font-roboto min-h-[95vh] pt-20 flex flex-col text-left px-10 lg:px-24 items-center justify-evenly mx-auto' >
        <Heading text="portfolio" />
        <ul className='w-full'>
          {projects.map((project, index) => {
            return(
              <ProjectListItem key={index} index={index} title={project.title} subtitle={project.subtitle} src={project.src} setModal={setModal} />
            )
          })}
        </ul>
        <Modal modal={modal} projects={projects} />
    </section>


    
  )
}

export default Projects