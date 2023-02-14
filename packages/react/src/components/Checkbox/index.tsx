import { ComponentProps } from '@stitches/react'
import { Check } from 'phosphor-react'
import React from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
export { Checkbox }
Checkbox.displayName = 'Checkbox'
