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

const Work = (props: Props) => {
  const projects: Project[] = [
    {
      title: 'Haparanda',
      subtitle: 'Creative Website',
      src: '/poppingbubbles.png',
      bgColor: '#202124',
      href: ''
    },
    {
      title: '3D Center',
      subtitle: 'Beta Version',
      src: '/phonebook.png',
      bgColor: '#C6DAE2',
      href: ''
    },
    {
      title: 'OrthoTeam',
      subtitle: 'Basic Landing Page',
      src: '/listwebapp.png',
      bgColor: '#CF9BF4',
      href: ''
    },
    {
      title: 'Hikki',
      subtitle: 'Wordpress ecommerce',
      src: '/porridge.png',
      bgColor: '#202124',
      href: ''
    },
    {
      title: 'Baccello Landing Page',
      subtitle: 'Wordpress site',
      src: '/baccello.png',
      bgColor: '#D566C1',
      href: '/projects/baccello'
    }
  ]

  const [modal, setModal] = useState({active: false, index:0})

  return (
    
    <section id='portfolio' className='snap-start relative flex flex-col gap-[3vw] min-h-[95vh] py-[18vw] lg:py-[10vw] lg:px-[7vw] mx-auto text-left items-center justify-evenly ' >
        <Heading text="my work" />
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

export default Work