import React from 'react'

import { TooltipContainer } from './styles'

export interface TooltipProps {
  message: string
}

const Tooltip: React.FC<TooltipProps> = ({ message }) => {
  return (
    <TooltipContainer>
      <span>{message}</span>
    </TooltipContainer>
  )
}

export { Tooltip }
