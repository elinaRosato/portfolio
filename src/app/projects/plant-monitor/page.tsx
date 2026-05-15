'use client'

import React from 'react'
import ProgressBar from '../../components/projectTemplate/ProgressBar'
import ProjectTemplate from '../../components/projectTemplate/ProjectTemplate'
import { ProjectContent } from '../../../types/types'

interface Images {
  src: string
  alt: string
  mobile: boolean
}

interface Control {
  project: string
  href: string
}

interface Controls {
  previous: Control
  next: Control
}

const SmartDoorSystem = () => {

  const projectTitle: string[] = ['Smart Door', 'System']

  const projectSummary: string =
    'An IoT smart access-control system built with Raspberry Pi 5, OpenCV, and AWS Rekognition. The system captures visitors at the door, performs cloud face recognition, and grants or denies access through GPIO-controlled LEDs.'

  const code: string =
    'https://github.com/elinaRosato/iot-smart-door-system'

  const demo: string = ''

  const images: Images[] = [
    {
      src: '/smart-door-system.jpg',
      alt: 'Smart Door System Raspberry Pi Setup',
      mobile: false,
    },
    {
      src: '/smart-door-system.jpg',
      alt: 'Smart Door System Request Flow Diagram',
      mobile: false,
    },
    {
      src: '/smart-door-system.jpg',
      alt: 'USB Camera Connected to Raspberry Pi',
      mobile: false,
    },
    {
      src: '/smart-door-system.jpg',
      alt: 'GPIO LED Access Indicators',
      mobile: true,
    },
    {
      src: '/smart-door-system.jpg',
      alt: 'Recognition Logs in Terminal',
      mobile: false,
    },
    {
      src: '/smart-door-system.jpg',
      alt: 'Edge-to-cloud Architecture Diagram',
      mobile: false,
    },
  ]

  const projectContent: ProjectContent[] = [

    {
      type: 'h2',
      content: 'The Background',
    },
    {
      type: 'p',
      content: `Smart Door System was developed as part of my IoT Systems Design coursework at Kristianstad University. The goal was to build a real-world edge-to-cloud system capable of recognising visitors through facial recognition and controlling physical hardware through GPIO on a Raspberry Pi.`,
    },
    {
      type: 'p',
      content: `I wanted the project to feel like an actual smart-home product rather than a simple classroom prototype. That meant focusing not only on the facial recognition itself, but also on architecture, modularity, security, hardware interaction, and user feedback.`,
    },
    {
      type: 'h2',
      content: 'The Stack',
    },
    {
      type: 'p',
      content: `The system runs on a Raspberry Pi 5 using Python 3.13. OpenCV handles USB camera integration and image capture, while gpiozero manages the physical GPIO interactions for LEDs and the doorbell button.`,
    },
    {
      type: 'p',
      content: `For cloud machine learning, the project uses AWS Rekognition collections. Instead of training a custom model locally, AWS handles face embeddings and similarity matching through managed APIs such as search_faces_by_image and index_faces.`,
    },
    {
      type: 'p',
      content: `The architecture follows a clean modular design where each subsystem has a dedicated responsibility: camera handling, GPIO control, and cloud recognition are separated into individual services orchestrated by a lightweight main controller.`,
    },
    {
      type: 'h2',
      content: 'The Challenge',
    },
    {
      type: 'p',
      content: `One of the biggest challenges was balancing hardware interaction with cloud communication. The system needed to feel responsive while still depending on an external cloud service for recognition.`,
    },
    {
      type: 'p',
      content: `Camera stability was another challenge. USB webcams often return dark or unstable frames immediately after startup, so I implemented a warm-up sequence with discarded frames before each capture to stabilise exposure and improve reliability.`,
    },
    {
      type: 'p',
      content: `I also had to think carefully about security and infrastructure concerns. AWS credentials were isolated in environment variables, IAM permissions were restricted to only the Rekognition operations required, and the project documentation included recommendations for MFA, billing alerts, and CloudTrail auditing.`,
    },
    {
      type: 'h2',
      content: 'Features',
    },
    {
      type: 'p',
      content: `👾 Doorbell-triggered face recognition pipeline.`,
    },
    {
      type: 'p',
      content: `👾 Raspberry Pi GPIO integration with green/red access LEDs.`,
    },
    {
      type: 'p',
      content: `👾 AWS Rekognition cloud face matching against indexed family members.`,
    },
    {
      type: 'p',
      content: `👾 Modular Python architecture with separated hardware and cloud services.`,
    },
    {
      type: 'p',
      content: `👾 Local access logging with timestamps, similarity scores, and access decisions.`,
    },
    {
      type: 'p',
      content: `👾 Secure credential handling using .env and least-privilege IAM policies.`,
    },
    {
      type: 'p',
      content: `👾 Real measured performance metrics including 98.5% recognition accuracy and 2.3 second average response time.`,
    },
    {
      type: 'h2',
      content: 'Architecture',
    },
    {
      type: 'p',
      content: `The project follows an edge-to-cloud architecture. The Raspberry Pi handles physical hardware interaction and image capture locally, while AWS Rekognition performs cloud-based facial recognition.`,
    },
    {
      type: 'p',
      content: `When the visitor presses the button, the system captures an image using OpenCV, sends it securely to AWS Rekognition through boto3, and receives the best facial match result. Depending on the confidence score, the system either grants or denies access through GPIO-controlled LEDs.`,
    },
    {
      type: 'p',
      content: `This approach kept the Raspberry Pi lightweight while still allowing the project to leverage production-grade machine learning infrastructure.`,
    },
    {
      type: 'h2',
      content: 'Results & Learnings',
    },
    {
      type: 'p',
      content: `This project taught me how to connect software engineering with physical systems. It strengthened my understanding of hardware integration, cloud APIs, system architecture, and real-world software design decisions.`,
    },
    {
      type: 'p',
      content: `More importantly, it showed me how powerful IoT systems become when edge devices and cloud services work together. The project started as a coursework assignment, but it evolved into one of the most technically complete systems I have built so far.`,
    },

   /*  {
      type: 'video',
      content: 'smartdoor_demo.mp4',
    }, */
  ]

  const controls: Controls = {
    previous: {
      project: 'Phonebook',
      href: '/projects/phonebook',
    },
    next: {
      project: 'Popping Bubbles',
      href: '/projects/poppingbubbles',
    },
  }

  return (
    <div className='min-h-screen overflow-scroll bg-almost-white flex flex-col'>
      <ProjectTemplate
        projectTitle={projectTitle}
        projectSummary={projectSummary}
        code={code}
        demo={demo}
        images={images}
        projectContent={projectContent}
        controls={controls}
        href='/#projects'
      />

      <ProgressBar />
    </div>
  )
}

export default SmartDoorSystem