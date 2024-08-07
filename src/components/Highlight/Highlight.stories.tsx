import { Meta, StoryObj } from '@storybook/react'
import Highlight from './Highlight'
// import { HighlightProps } from './Highlight'

const commonProps: Parameters<typeof Highlight>[0] = {
  title: 'Read Dead is back',
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/#',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png'
} as const

const meta = {
  title: 'Highlight',
  component: Highlight
} satisfies Meta<typeof Highlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  args: commonProps,
  render: (args) => {
    return (
      <div className="container">
        <Highlight {...args} />
      </div>
    )
  }
} satisfies Story
