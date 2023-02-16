import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@felipe-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    message: 'Agendamento confirmado',
    date: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
