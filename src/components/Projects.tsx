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
    
    <section id='portfolio' className='snap-start relative flex flex-col gap-[3vw] min-h-[95vh] py-[5vw] lg:py-[10vw] px-[2vw] lg:px-[7vw] mx-auto text-left items-center justify-evenly ' >
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