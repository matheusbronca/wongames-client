import { Meta, StoryObj } from '@storybook/react'
import MatchMedia from './MatchMedia'
import { MatchMediaProps } from './MatchMedia'

export default {
  title: 'MatchMedia',
  component: MatchMedia,
  parameters: {
    docs: {
      subtitle:
        'Show or hide children components based in the size of viewport',
      description: {
        component:
          'If none matcher is passed through the props, children will be hidden in all viewport sizes by default.'
      }
    }
  }
} as Meta

export const GreaterThanMd: StoryObj<MatchMediaProps> = {
  render: (args) => {
    return (
      <MatchMedia {...args} matcher="greaterThan: md">
        Media Matcher - Greater than: md
      </MatchMedia>
    )
  }
}

GreaterThanMd.args = {
  children: 'Media Matcher - Greater than: md'
}

GreaterThanMd.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}

export const LessThanMd: StoryObj<MatchMediaProps> = {
  render: (args) => {
    return (
      <MatchMedia {...args} matcher="lessThan: md">
        Media Matcher - Less than: md
      </MatchMedia>
    )
  }
}

LessThanMd.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

LessThanMd.args = {
  children: 'Media Matcher - Less than: md'
}
