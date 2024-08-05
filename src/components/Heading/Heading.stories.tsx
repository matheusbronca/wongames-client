import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {
  render: (args) => {
    return <Heading {...args}>{args.children ?? 'Most Populars'}</Heading>
  }
}

Default.args = {
  children: 'Most Populars',
  color: 'white'
}

Default.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
