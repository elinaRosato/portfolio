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

const ForestDroneNavigation = () => {

  const projectTitle: string[] = ['Autonomous', 'Drone', 'Navigation']

  const projectSummary: string =
    'A reinforcement learning powered autonomous drone capable of navigating GPS-denied forest environments using onboard camera vision, PPO, and embedded AI compute.'

  const code: string = ''
  const demo: string = ''

  const images: Images[] = [
    {
      src: '/drone.png',
      alt: 'Autonomous forest navigation drone',
      mobile: false,
    },
    {
      src: '/drone-sim-corridor-narrow.png',
      alt: 'PPO training visualization',
      mobile: false,
    },
    {
      src: '/drone-flight.png',
      alt: 'Drone simulation environment',
      mobile: false,
    },
    {
      src: '/drone-depth-estimation.png',
      alt: 'Drone system architecture',
      mobile: false,
    },
    {
      src: '/drone.png',
      alt: 'Real-world forest testing',
      mobile: false,
    },
    {
      src: '/drone-sim-corridor-narrow.png',
      alt: 'Jetson embedded onboard compute',
      mobile: true,
    },
  ]

  const projectContent: ProjectContent[] = [

    {
      type: 'h2',
      content: 'The Background',
    },

    {
      type: 'p',
      content: `This project began as our Computer Engineering thesis at Lund University. Together with my thesis partner, we explored one of the most challenging problems in robotics and autonomous systems: enabling drones to navigate forests without GPS.`,
    },

    {
      type: 'p',
      content: `Traditional drones depend heavily on GPS signals for localisation and navigation. In dense forests, those signals become unreliable or disappear entirely due to heavy canopy coverage. Existing solutions often rely on expensive LiDAR systems, pre-mapped routes, or manual piloting.`,
    },

    {
      type: 'p',
      content: `We wanted to explore whether reinforcement learning and computer vision alone could solve this problem using only onboard camera input and embedded compute.`,
    },

    {
      type: 'h2',
      content: 'The Goal',
    },

    {
      type: 'p',
      content: `Our objective was to build a fully autonomous drone capable of navigating complex forest environments without GPS, external infrastructure, or pre-mapped paths.`,
    },

    {
      type: 'p',
      content: `The drone needed to perceive the environment through a monocular RGB camera, make real-time navigation decisions onboard, avoid collisions, and generalise to forests it had never seen before.`,
    },

    {
      type: 'h2',
      content: 'The Stack',
    },

    {
      type: 'p',
      content: `The system was built around Proximal Policy Optimization (PPO), a reinforcement learning algorithm designed for stable continuous control tasks. We trained our agents using Stable-Baselines3 and PyTorch.`,
    },

    {
      type: 'p',
      content: `A Convolutional Neural Network (CNN) processed visual camera input and extracted spatial features used by the PPO policy network to generate navigation commands in real time.`,
    },

    {
      type: 'p',
      content: `The drone platform used PX4 autopilot integration together with Gazebo simulation for safe and scalable training. For onboard deployment, inference was executed on embedded Jetson hardware mounted directly on the drone.`,
    },

    {
      type: 'h2',
      content: 'The Challenge',
    },

    {
      type: 'p',
      content: `One of the hardest problems was sim-to-real transfer. Reinforcement learning agents often perform extremely well in simulation but fail in real-world environments because reality contains lighting variation, noise, wind, motion blur, and imperfect physics.`,
    },

    {
      type: 'p',
      content: `Our first agents completely ignored camera vision and exploited weaknesses in the reward system instead. Instead of learning navigation, the drone learned to hover within safe height bounds.`,
    },

    {
      type: 'p',
      content: `To solve this, we redesigned the reward structure, introduced curriculum learning, applied domain randomization, and progressively increased environment complexity during training.`,
    },

    {
      type: 'h2',
      content: 'Architecture',
    },

    {
      type: 'p',
      content: `The system follows a modular architecture designed around reliability and real-time performance.`,
    },

    {
      type: 'p',
      content: `A monocular camera continuously captures visual input, which is processed by a CNN feature extractor. The extracted representation is passed into the PPO policy network, which predicts movement commands such as forward velocity, turning direction, and altitude adjustment.`,
    },

    {
      type: 'p',
      content: `These commands are then translated into flight control instructions through PX4 autopilot integration. The full pipeline runs onboard the drone using Jetson embedded compute with inference latency below 100 milliseconds.`,
    },

    {
      type: 'h2',
      content: 'Features',
    },

    {
      type: 'p',
      content: `👾 Autonomous forest navigation without GPS.`,
    },

    {
      type: 'p',
      content: `👾 Reinforcement learning with PPO and Stable-Baselines3.`,
    },

    {
      type: 'p',
      content: `👾 CNN-based vision processing from monocular RGB camera input.`,
    },

    {
      type: 'p',
      content: `👾 Real-time onboard inference using embedded Jetson hardware.`,
    },

    {
      type: 'p',
      content: `👾 Curriculum learning and domain randomization for sim-to-real transfer.`,
    },

    {
      type: 'p',
      content: `👾 Gazebo simulation environment integrated with PX4 autopilot.`,
    },

    {
      type: 'p',
      content: `👾 Real-world forest validation flights with autonomous obstacle avoidance.`,
    },

    {
      type: 'h2',
      content: 'Results',
    },

    {
      type: 'p',
      content: `The final system achieved an 89% navigation success rate in simulation and maintained approximately 72% success in real-world forest environments without additional fine-tuning.`,
    },

    {
      type: 'p',
      content: `The drone successfully navigated routes exceeding 400 meters, adapted to unseen lighting conditions, and maintained stable real-time decision making at 10Hz.`,
    },

    {
      type: 'p',
      content: `Most importantly, the project validated that low-cost, vision-based reinforcement learning systems can realistically solve autonomous navigation problems traditionally dominated by expensive sensor-heavy approaches.`,
    },

    {
      type: 'h2',
      content: 'What I Learned',
    },

    {
      type: 'p',
      content: `This project taught me how reinforcement learning behaves in real engineering systems outside controlled academic benchmarks. It pushed my understanding of embedded systems, robotics, computer vision, simulation pipelines, and AI deployment on constrained hardware.`,
    },

    {
      type: 'p',
      content: `It also reinforced the importance of systems thinking. Building autonomous robotics is not just about machine learning models — it is about architecture, reliability, safety layers, hardware constraints, and designing systems that continue working when reality becomes unpredictable.`,
    },

    {
      type: 'video',
      content: 'drone_navigation_demo.mp4',
    },
  ]

  const controls: Controls = {
    previous: {
      project: '',
      href: '',
    },
    next: {
      project: 'Smart Door System',
      href: '/projects/door-system',
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

export default ForestDroneNavigation