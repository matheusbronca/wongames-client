import { Meta, StoryObj } from '@storybook/react'
import Menu from './Menu'

export default {
  title: 'Menu',
  component: Menu,
  argsTypes: {
    username: 'string'
  }
} as Meta

export const Desktop: StoryObj = {
  render: (args) => <Menu {...args} />
}

Desktop.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'desktop'
  },
  backgrounds: {
    default: 'dark'
  }
}

export const Mobile: StoryObj = {
  render: (args) => <Menu {...args} />
}

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    default: 'dark'
  }
}
