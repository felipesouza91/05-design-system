import React, { ComponentProps } from 'react'
import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

const Avatar: React.FC = (props) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
export { Avatar }
Avatar.displayName = 'Avatar'
