import React, { useState } from 'react'
import SectionHeading from '../../global/SectionHeading'
import SectionTitle from '../../global/SectionTitle';
import WavyText from '../../global/WavyText';

type Props = {}

const About = (props: Props) => {
  const [forClients, setForClients] = useState(true);
  return (
    <section id='about' className='px-[7vw] lg:px-[7vw] py-20 lg:py-36' >
      <SectionTitle content="my story" />
      <SectionHeading content="Technology is powerful, but it’s only as impactful as the hands that shape it." />
      
      <div className={`flex flex-col landscape:flex-row p-[3vw] lg:p-0 justify-center lg:justify-between items-center`}>
        <div className='lg:pr-20'>
          <div className='flex my-4'>
            <button className={`${forClients ? "text-almost-white bg-darkest-dark rounded-full" : "text-darkest-dark bg-almost-white hover:text-darkest-dark hover:bg-almost-white "} mr-4 px-3 py-2 border border-[2px] border-darkest-dark font-regular uppercase text-sm lg:text-[1vw] md-portrait:text-xl leading-normal`} onClick={() => setForClients(true)}>for clients</button>
            <button className={`${!forClients ? "text-almost-white bg-darkest-dark rounded-full" : "text-darkest-dark bg-almost-white hover:text-darkest-dark hover:bg-almost-white "} px-3 py-2 border border-[2px] border-darkest-dark font-regular uppercase text-sm lg:text-[1vw] md-portrait:text-xl leading-normal`} onClick={() => setForClients(false)}>for recruiters</button>
          </div>
          {forClients ? (
            <>
              <p className='font-regular py-3 text-darkest-dark text-md lg:text-xl leading-snug'>
                I&rsquo;m Elina Rosato, an extremely curious, creative, and tech-obsessed girl. I dedicate my life to 
                <strong className='font-black relative hover-trigger inline-block mx-1'>exploring
                  <img src="snowboard.png" alt="exploring" className='absolute top-[-100%] left-0 hidden hover-image min-w-[200px]' />
                </strong>
                , experimenting, and building things that matter. I’ve roamed 10.76% of the world, picked up more 
                <strong className='font-black relative hover-trigger inline-block mx-1'>hobbies
                  <img src="crochet2.JPG" alt="hobbies" className='absolute top-[-100%] left-0 hidden hover-image min-w-[200px]' />
                </strong>
                than I can keep track of, and somehow found my way into a career that fuses art, logic, and problem-solving.
              </p> 
              <p className=' font-regular py-3 text-darkest-dark text-md lg:text-xl leading-snug'>
                I design, build, and optimize technology-driven solutions that make businesses work smarter. While I appreciate good design, my true expertise lies in 
                <strong className='font-black relative hover-trigger inline-block mx-1'>software engineering
                  <img src="programming.gif" alt="programming" className='absolute top-[-100%] left-0 hidden hover-image min-w-[200px]' />
                </strong>
                , backend development, and system architecture. Whether you&rsquo;re a startup looking for a custom-built solution or an established brand in need of technical expertise, I help transform complex ideas into real, functional, and efficient software. 
              </p>
            </>
          ) : (
            <>
              <p className=' font-regular py-3 text-darkest-dark text-md lg:text-xl leading-snug'>
                I’m Elina Rosato, a multidisciplinary computer engineering student specializing in IoT and software development. Originally from 
                <strong className='font-black relative hover-trigger inline-block mx-1'>Buenos Aires
                  <img src="argentina.gif" alt="Freelancing" className='absolute top-[-100%] left-0 hidden hover-image min-w-[200px]' />
                </strong>
                  and now based in Malmö, I bridge the gap between hardware and software, working across web development, embedded systems, and cloud-based applications. 
              </p>
              <p className=' font-regular py-3 text-darkest-dark text-md lg:text-xl leading-snug'>
                My journey started with self-taught programming and 
                <strong className='font-black relative hover-trigger inline-block mx-1'>freelancing
                  <img src="desk.png" alt="Freelancing" className='absolute top-[-100%] left-0 hidden hover-image min-w-[200px]' />
                </strong>
                , eventually leading me to formal education in Computer Engineering. Getting accepted into 
                <strong className='font-black relative hover-trigger inline-block mx-1'>university
                  <img src="study.gif" alt="University" className='absolute top-[-100%] left-0 hidden hover-image min-w-[200px]' />
                </strong>
                was one of my biggest achievements (though graduation next year might top it), and I’m loving every step of the way—soaking up knowledge, refining my skills, and constantly evolving. I have experience developing scalable applications, working with multiple programming languages, and designing efficient, maintainable systems. 
              </p>
            </>
          )}
        </div>
        <img className='hidden landscape:block w-1/3' src="desk.png" alt="" />
      </div>
      
      <div className='flex justify-end landscape:justify-center mt-10'>
        <WavyText content="click on bold words for a sneak peek" />
      </div>
    </section>
  )
}

export default About