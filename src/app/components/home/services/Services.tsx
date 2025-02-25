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
          <div className='flex mb-8'>
            <button className={`${forClients ? "text-almost-white bg-darkest-dark rounded-full" : "text-darkest-dark bg-almost-white hover:text-darkest-dark hover:bg-almost-white "} mr-4 px-3 py-2 border border-[2px] border-darkest-dark font-regular uppercase text-sm lg:text-[1vw] md-portrait:text-xl leading-normal`} onClick={() => setForClients(true)}>for clients</button>
            <button className={`${!forClients ? "text-almost-white bg-darkest-dark rounded-full" : "text-darkest-dark bg-almost-white hover:text-darkest-dark hover:bg-almost-white "} px-3 py-2 border border-[2px] border-darkest-dark font-regular uppercase text-sm lg:text-[1vw] md-portrait:text-xl leading-normal`} onClick={() => setForClients(false)}>for recruiters</button>
          </div>
          {forClients ? (
            <div className=''>
              <ParagraphBig content={"Custom Web Development"} />
              <ParagraphBig content={"Website Application"} />
              <ParagraphBig content={"E-commerce Solutions"} />
              <ParagraphBig content={"WordPress & WooCommerce"} />
              <ParagraphBig content={"Wix Studio Sites"} />
              <ParagraphBig content={"Front-end Development"} />
              <ParagraphBig content={"Back-end Development"} />
            </div>
          ) : (
            <>
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
            </>
          )}        
        </div>
      </div>
    </section>
  )
}

export default Services