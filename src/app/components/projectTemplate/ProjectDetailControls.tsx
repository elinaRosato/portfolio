import React from 'react'
import WavyButton from '../global/ButtonWavy'
import { ForwardArrow, BackArrow, ExternalArrow } from '../global/IconsSvg'

interface Control {
  project: string,
  href: string,
}
interface Controls {
  previous: Control,
  next: Control,
}

type Props = {
  controls: Controls
}

const ProjectControls = ({controls}: Props) => {
  const {previous, next} = controls
  return (
    <div  className='flex justify-between gap-[10vw] py-[5vh]'>
      {previous.project==='' ? <div /> : <WavyButton href={previous.href} external={false} reverse={true} text={`Previous Project: ${previous.project}`} svg={BackArrow} /> }
      {next.project==='' ? <div /> : <WavyButton href={next.href} external={false} reverse={false} text={`Next Project: ${next.project}`} svg={ForwardArrow} /> }
    </div>
  )
}

export default ProjectControls