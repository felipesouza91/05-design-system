import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@felipe-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    message: '21 de Outubro - Indisponivel',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
