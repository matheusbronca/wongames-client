import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from './Banner'

const commonProps: BannerProps = {
  title: 'Super Mario World',
  subtitle:
    "At <strong>Super Mario World</strong> you're going to pass through a lot of challenges, are you ready for this adventure?",
  headingTag: 'h2',
  img: 'https://images.unsplash.com/photo-1629646526325-d4e092b641b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  buttonLabel: 'Buy now',
  buttonLink: '/#'
}

export default {
  title: 'Banner',
  args: commonProps,
  component: Banner
} as Meta

export const Mobile: StoryObj<BannerProps> = {
  render: () => (
    <div className="bg-mainBg size-full absolute">
      <Banner {...commonProps} />
    </div>
  )
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen'
} as Meta

export const Desktop: StoryObj<BannerProps> = {
  render: () => (
    <div className="bg-gradient-to-b from-mainBg via-mainBg via-50% to-white to-50% size-full min-h-full absolute">
      <div className="container my-auto size-full grid grid-cols-1 place-content-center">
        <Banner {...commonProps} />
      </div>
    </div>
  )
}

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  },
  layout: 'fullscreen'
}

export const DesktopWithRibbon: StoryObj = {
  render: () => (
    <div className="bg-gradient-to-b from-mainBg via-mainBg via-50% to-white to-50% size-full min-h-full absolute">
      <div className="container my-auto size-full grid grid-cols-1 place-content-center">
        <Banner {...commonProps} ribbon="My Ribbon" />
      </div>
    </div>
  )
}

DesktopWithRibbon.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  },
  layout: 'fullscreen'
}

export const MobileWithRibbon: StoryObj<BannerProps> = {
  render: () => (
    <div className="bg-mainBg size-full absolute">
      <Banner {...commonProps} ribbon="My Ribbon" />
    </div>
  )
}

MobileWithRibbon.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen'
}
