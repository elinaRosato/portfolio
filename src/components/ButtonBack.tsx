import React from 'react'
import ButtonWavy from './ButtonWavy'
import { BackArrow } from './IconsSvg'

type Props = {}

const ButtonBack = ({}: Props) => {
  return (
    <ButtonWavy href='/#portfolio' external={false} reverse={true} text='Back to Projects' svg={BackArrow} />
  )
}

export default ButtonBack