import { ComponentProps } from '@stitches/react'
import React from 'react'

import { TextInputContainer, Prefix, Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}
const TextInput: React.FC<TextInputProps> = ({ prefix, ...rest }) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{`${prefix}/`}</Prefix>}
      <Input {...rest} />
    </TextInputContainer>
  )
}

export { TextInput }

TextInput.displayName = 'TextInput'
