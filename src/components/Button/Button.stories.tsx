import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button'
import Icon from '@svg-icons/material-outlined/add-shopping-cart.svg'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    isFullWidth: {
      type: 'boolean'
    },
    Icon: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>
}

Default.args = {
  children: 'Buy now'
}

export const WithIcon: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args}>{args.children}</Button>
}

WithIcon.args = {
  children: 'Buy now',
  Icon: <Icon />
}

export const AsLink: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => (
    <Button role="a" {...args}>
      {args.children}
    </Button>
  )
}

AsLink.args = {
  children: 'Buy now'
}
