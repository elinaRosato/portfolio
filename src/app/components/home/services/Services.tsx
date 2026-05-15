import React, { useState } from 'react'
import SectionHeading from '../../global/SectionHeading'
import SectionTitle from '../../global/SectionTitle';
import ParagraphSmall from '../../global/ParagraphSmall';
import ParagraphBig from '../../global/ParagraphBig';

type Props = {}

const Services = (props: Props) => {
  const [forClients, setForClients] = useState(true);
  return (
    <section id='services' className='relative px-[7vw] lg:px-[7vw] py-20 lg:py-36' >
      <SectionTitle content="my jam" />
      <SectionHeading content="The tech, tools, and tricks up my sleeve." />
      <div className='flex flex-col lg:flex-row lg:justify-between pt-14'>
        <div className='w-2/3 lg:w-1/3 pb-14 lg:pr-14'>
          <ParagraphSmall content={forClients ? "I work with clients to build digital products that are not only functional but also beautiful and user-friendly. Here are some of the services I offer:" : "A breakdown of my technical skills, programming languages, and tools I’m proficient with."} />
        </div>
        <div className=' lg:w-1/2'>
          <div className='py-2'>
            <ParagraphBig content={"Front-End Development"} />
            <ParagraphSmall content={"HTML, CSS, JavaScript (ES6+), React.js, Next.js, Tailwind CSS"} />
          </div>
          <div className='py-2'>
            <ParagraphBig content={"Back-End Development"} />
            <ParagraphSmall content={"Node.js, Express.js, RESTful APIs, authentication & databases"} />
          </div>
          <div className='py-2'>
            <ParagraphBig content={"Programming Languages"} />
            <ParagraphSmall content={"Java, Python, C, JavaScript"} />
          </div>
          <div className='py-2'>
            <ParagraphBig content={"Database Management"} />
            <ParagraphSmall content={"SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Firebase)"} />
          </div>
          <div className='py-2'>
            <ParagraphBig content={"Unit & Integration Testing"} />
          </div>
          <div className='py-2'>
            <ParagraphBig content={"Version Control & Deployment"} />
            <ParagraphSmall content={"Git, GitHub, CI/CD, Vercel, Docker"} />
          </div>     
        </div>
      </div>
    </section>
  )
}

export default Services