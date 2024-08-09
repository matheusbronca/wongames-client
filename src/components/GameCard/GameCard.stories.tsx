import { Meta, StoryObj } from '@storybook/react'
import GameCard from './GameCard'

const commonProps = {
  title: 'Game Title',
  publisher: 'Game publisher',
  listPrice: 200,
  sellingPrice: 100,
  imgUrl: '/img/red-dead-img.jpg',
  publisherUrl: '#',
  gameUrl: '/games/red-dead-redemption-2'
} satisfies Parameters<typeof GameCard>[0]

const meta = {
  title: 'GameCard',
  component: GameCard
} satisfies Meta<typeof GameCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  args: commonProps,
  render: (args) => {
    return (
      <div className="bg-mainBg p-12 w-min">
        <GameCard {...args} className="w-72" />
      </div>
    )
  }
} satisfies Story

export const WithRibbon = {
  args: {
    ...commonProps,
    ribbonText: '20% OFF'
  },
  render: (args) => {
    return (
      <div className="bg-mainBg p-12 w-min">
        <GameCard {...args} className="w-72" />
      </div>
    )
  }
} satisfies Story
