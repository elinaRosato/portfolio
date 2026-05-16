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

const SmartPlantMonitor = () => {

  const projectTitle: string[] = ['Smart Plant', 'Monitor']

  const projectSummary: string =
    'A bare-metal embedded systems project built in C on the ATmega328P featuring a non-blocking state machine, real-time sensor monitoring, interrupt-driven architecture, and UART telemetry.'

  const code: string = 'https://github.com/elinaRosato/smart_plant_monitor'
  const demo: string = ''

  const images: Images[] = [
    {
      src: '/smart-plant-monitor.jpg',
      alt: 'Smart Plant Monitor overview',
      mobile: false,
    },
    {
      src: '/circuit-diagram.png',
      alt: 'Breadboard and hardware setup',
      mobile: false,
    },
    {
      src: '/smart-plant-monitor.jpg',
      alt: 'LCD sensor display',
      mobile: true,
    },
    {
      src: '/circuit-diagram.png',
      alt: 'UART serial telemetry output',
      mobile: false,
    },
    {
      src: '/smart-plant-monitor.jpg',
      alt: 'Embedded C firmware architecture',
      mobile: false,
    },
    {
      src: '/circuit-diagram.png',
      alt: 'Circuit schematic and components',
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
      content: `This project started as an exploration into low-level embedded systems programming and real-time firmware architecture. I wanted to move beyond high-level Arduino abstractions and understand how microcontrollers actually work at the register level.`,
    },

    {
      type: 'p',
      content: `The result was a standalone environmental monitoring system for houseplants built entirely in bare-metal C on the ATmega328P microcontroller.`,
    },

    {
      type: 'p',
      content: `The system continuously monitors soil moisture, ambient light, temperature, and humidity while displaying live data on a 16×2 LCD and streaming telemetry over UART.`,
    },

    {
      type: 'h2',
      content: 'The Goal',
    },

    {
      type: 'p',
      content: `The objective was not only to build a useful monitoring device, but also to design a responsive embedded firmware architecture without relying on blocking delays or high-level frameworks.`,
    },

    {
      type: 'p',
      content: `I wanted the system to handle multiple sensors, interrupts, user input, LCD updates, and serial logging simultaneously while remaining responsive and modular.`,
    },

    {
      type: 'h2',
      content: 'The Stack',
    },

    {
      type: 'p',
      content: `The project was built in C using PlatformIO targeting the ATmega328P running at 16 MHz on an Arduino Uno.`,
    },

    {
      type: 'p',
      content: `Sensor data was collected through analog ADC reads and a custom-written DHT11 single-wire communication driver implemented entirely through direct register manipulation.`,
    },

    {
      type: 'p',
      content: `The firmware uses Timer1 interrupts in CTC mode to coordinate system timing, while UART telemetry streams formatted sensor data at 9600 baud.`,
    },

    {
      type: 'p',
      content: `The LCD runs in 4-bit mode using direct PORTB communication to reduce GPIO usage and improve hardware efficiency.`,
    },

    {
      type: 'h2',
      content: 'The Architecture',
    },

    {
      type: 'p',
      content: `The entire system follows a non-blocking, flag-driven architecture.`,
    },

    {
      type: 'p',
      content: `Instead of using delay-based programming, a Timer1 interrupt fires once per second and updates a set of volatile flags shared with the main loop.`,
    },

    {
      type: 'p',
      content: `The main loop continuously polls these flags and executes short tasks such as sensor reads, LCD updates, error handling, and UART logging.`,
    },

    {
      type: 'p',
      content: `This design keeps the system responsive even while juggling multiple interrupt sources, user inputs, and sensor updates simultaneously.`,
    },

    {
      type: 'h2',
      content: 'The Challenge',
    },

    {
      type: 'p',
      content: `One of the hardest parts of the project was implementing reliable timing-sensitive communication with the DHT11 sensor.`,
    },

    {
      type: 'p',
      content: `The DHT11 uses a custom single-wire protocol where bits are encoded through pulse timing measured in microseconds. I implemented the protocol manually using direct AVR register access and carefully timed signal reads.`,
    },

    {
      type: 'p',
      content: `Another challenge was coordinating several interrupt sources cleanly without introducing blocking behavior or race conditions between the interrupt context and the main application loop.`,
    },

    {
      type: 'h2',
      content: 'Features',
    },

    {
      type: 'p',
      content: `👾 Real-time monitoring of soil moisture, light, temperature, and humidity.`,
    },

    {
      type: 'p',
      content: `👾 Non-blocking firmware architecture using Timer1 interrupts and flag polling.`,
    },

    {
      type: 'p',
      content: `👾 Custom DHT11 bit-banged communication driver.`,
    },

    {
      type: 'p',
      content: `👾 UART telemetry logging at 9600 baud.`,
    },

    {
      type: 'p',
      content: `👾 HD44780 LCD operating in 4-bit mode.`,
    },

    {
      type: 'p',
      content: `👾 Multiple interrupt sources including Timer1, external interrupts, and pin-change interrupts.`,
    },

    {
      type: 'p',
      content: `👾 LED and buzzer based environmental alerts.`,
    },

    {
      type: 'p',
      content: `👾 Manual sensor selection through hardware buttons.`,
    },

    {
      type: 'h2',
      content: 'Hardware',
    },

    {
      type: 'p',
      content: `The hardware stack includes an ATmega328P microcontroller, a DHT11 temperature and humidity sensor, a soil moisture probe, a photoresistor for ambient light detection, a 16×2 LCD, LEDs, push buttons, and a piezo buzzer.`,
    },

    {
      type: 'p',
      content: `All peripherals were connected directly through AVR GPIO and configured manually through register-level programming rather than Arduino libraries.`,
    },

    {
      type: 'h2',
      content: 'Results',
    },

    {
      type: 'p',
      content: `The final system successfully monitored environmental conditions in real time while maintaining responsive performance through a fully non-blocking firmware architecture.`,
    },

    {
      type: 'p',
      content: `The Timer1-driven state machine allowed multiple sensors, interrupts, display updates, and UART communication to coexist without freezing the application loop.`,
    },

    {
      type: 'p',
      content: `Most importantly, this project became a deep introduction to embedded systems engineering, low-level firmware design, hardware communication protocols, and real-time software architecture.`,
    },

    {
      type: 'h2',
      content: 'What I Learned',
    },

    {
      type: 'p',
      content: `This project taught me how embedded systems work beneath high-level frameworks. I gained hands-on experience with timers, interrupts, ADCs, UART communication, GPIO control, hardware protocols, and memory-safe firmware design.`,
    },

    {
      type: 'p',
      content: `It also reinforced the importance of architecture in embedded software. Small design choices — like using flags instead of delays or keeping ISRs lightweight — dramatically affect responsiveness, scalability, and reliability.`,
    },

    {
      type: 'p',
      content: `Building everything at the register level gave me a much deeper understanding of how microcontrollers operate internally and how software interacts directly with hardware.`,
    },

   /*  {
      type: 'video',
      content: 'plant_monitor_demo.mp4',
    }, */
  ]

  const controls: Controls = {
    previous: {
      project: 'Smart Door System',
      href: '/projects/door-system',
    },
    next: {
      project: 'Teamely',
      href: '/projects/teamely',
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

export default SmartPlantMonitor