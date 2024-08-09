import { render, screen } from '@testing-library/react'
import { twMerge } from 'tailwind-merge'
import ShoppingCartIcon from '@svg-icons/material-outlined/shopping-cart.svg'

import Button from './Button'

describe('<Button />', () => {
  const COMMON_BTN = 'border-none rounded'
  const SM_BTN = 'text-xs h-7 p-2'
  const MD_BTN = 'text-sm  h-10 px-md'
  const LG_BTN = 'text-base h-12 px-xlg'

  it('should render the Button with medium size by default', () => {
    render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      twMerge([COMMON_BTN, MD_BTN])
    )

    expect(screen.getByRole('button', { name: /Buy now/i })).toMatchSnapshot()
  })

  it('should render the Button with small size', () => {
    render(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      twMerge([COMMON_BTN, SM_BTN])
    )
  })

  it('should render the Button with large size', () => {
    render(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveClass(
      twMerge([COMMON_BTN, LG_BTN])
    )
  })

  it('should render the Button with full width', () => {
    render(
      <>
        <Button size="large" isFullWidth={true}>
          Large
        </Button>
        <Button size="medium" isFullWidth={true}>
          Medium
        </Button>
        <Button size="small" isFullWidth={true}>
          Small
        </Button>
      </>
    )

    expect(screen.getByRole('button', { name: /Large/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Large/i })).toHaveClass(
      twMerge([COMMON_BTN, LG_BTN, 'w-full'])
    )

    expect(screen.getByRole('button', { name: /Medium/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Medium/i })).toHaveClass(
      twMerge([COMMON_BTN, MD_BTN, 'w-full'])
    )

    expect(screen.getByRole('button', { name: /Small/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Small/i })).toHaveClass(
      twMerge([COMMON_BTN, SM_BTN, 'w-full'])
    )
  })

  it('should render the button with an icon when provided via componet props', () => {
    render(
      <Button Icon={<ShoppingCartIcon data-testid="svg" />}>Buy now</Button>
    )
    expect(screen.getByTestId('svg')).toBeInTheDocument()
  })

  it('should render Button as an anchor link', () => {
    render(
      <Button renderAs="a" href="/link">
        Anchor Link
      </Button>
    )

    expect(screen.getByRole('link', { name: /anchor link/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
