import { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Desktop: StoryObj = {
  render: () => (
    <div className="container">
      <Footer />
    </div>
  )
}

export const Mobile: StoryObj = {
  render: () => <Footer />
}
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
