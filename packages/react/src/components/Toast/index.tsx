import { X } from 'phosphor-react'
import React, { ComponentProps } from 'react'

import { ToastContainer, Info, Message, Date, CloseButton } from './styles'

export interface ToastProps extends ComponentProps<typeof CloseButton> {
  message: string
  date?: string
}

const Toast: React.FC<ToastProps> = ({ date, message, ...rest }) => {
  return (
    <ToastContainer>
      <Info>
        <Message>{message}</Message>
        <CloseButton {...rest}>
          <X size={20} weight="bold" />
        </CloseButton>
      </Info>
      {date && <Date>{date}</Date>}
    </ToastContainer>
  )
}

export { Toast }
