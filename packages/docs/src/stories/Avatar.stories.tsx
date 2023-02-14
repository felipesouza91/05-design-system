import type { StoryObj, Meta } from '@storybook/react'
import { AvatarProps, Avatar } from '@felipe-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/felipesouza91.png',
    alt: 'Felipe Souza',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
