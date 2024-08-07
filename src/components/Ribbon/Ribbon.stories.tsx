import { Meta, StoryObj } from '@storybook/react'
import Ribbon from './Ribbon'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => {
    return (
      <div className="w-96 h-64 relative bg-gray">
        <Ribbon {...args} />
      </div>
    )
  }
}
