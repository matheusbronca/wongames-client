import { Meta, StoryObj } from '@storybook/react'
import Logo from './Logo'
import { LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: StoryObj<LogoProps> = {
  render: (args) => <Logo {...args} />
}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
