import { render, screen } from '@testing-library/react'

import Heading from './Heading'

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading>Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toBeInTheDocument()
  })

  it('should render a white heading by default', () => {
    render(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-white'
    )
  })

  it('should render a heading with black text', () => {
    render(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-black'
    )
  })

  it('should render the heading with a line in its left side', () => {
    render(<Heading borderPosition="left">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'pl-xxsm border-l-8'
    )
  })

  it('should render the heading with a line below the text', () => {
    render(<Heading borderPosition="bottom">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'relative mb-md after:absolute after:h-2 after:w-14 after:bg-primary after:-bottom-3 after:-left-0'
    )
  })

  it('should render the heading with small size', () => {
    render(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveClass(
      'text-base after:w-8'
    )
  })

  it('should render the border with primary color', () => {
    render(
      <>
        <Heading borderPosition="bottom">Bottom Border</Heading>
        <Heading borderPosition="left">Left Border</Heading>
      </>
    )

    expect(screen.getByRole('heading', { name: /bottom border/i })).toHaveClass(
      'after:bg-primary'
    )
    expect(screen.getByRole('heading', { name: /left border/i })).toHaveClass(
      'border-primary'
    )
  })

  it('should render the border with secondary color', () => {
    render(
      <>
        <Heading borderPosition="bottom" borderColor="secondary">
          Bottom Border
        </Heading>
        <Heading borderPosition="left" borderColor="secondary">
          Left Border
        </Heading>
      </>
    )

    expect(screen.getByRole('heading', { name: /bottom border/i })).toHaveClass(
      'after:bg-secondary'
    )
    expect(screen.getByRole('heading', { name: /left border/i })).toHaveClass(
      'border-secondary'
    )
  })
})
