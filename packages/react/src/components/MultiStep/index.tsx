import React from 'react'

import { Label, MultiStepContainer, Steps, Step } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

const MultiStep: React.FC<MultiStepProps> = ({ size, currentStep = 1 }) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((item) => (
          <Step key={item} active={item <= currentStep} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
export { MultiStep }
MultiStep.displayName = 'MultiStep'
