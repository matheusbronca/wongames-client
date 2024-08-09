import { render, screen } from '@testing-library/react'

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

describe('<GameCard />', () => {
  it('should be rendered correctly in the DOM', () => {
    const { container, debug } = render(<GameCard {...commonProps} />)

    debug()

    expect(screen.getByRole('article')).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute('src')
    expect(screen.getByRole('heading', { name: /Game Title/i }))
    expect(container.querySelector('address')).toHaveTextContent(
      /Game publisher/i
    )

    expect(
      screen.getByRole('button', { name: /Add to wishlist/i })
    ).toBeInTheDocument()
    expect(container.querySelector('[data-img-game-link]')).toHaveAttribute(
      'href',
      commonProps.gameUrl
    )

    expect(container.querySelector('[data-title-game-link]')).toHaveAttribute(
      'href',
      commonProps.gameUrl
    )

    expect(container.querySelector('[data-img-game-link]')).toHaveAttribute(
      'href',
      commonProps.gameUrl
    )

    expect(
      screen.getByRole('link', { name: /Game publisher/i })
    ).toHaveAttribute('href', commonProps.publisherUrl)

    expect(container.querySelector('[data-selling-price]')?.textContent).toBe(
      '$100,00'
    )

    expect(container.querySelector('[data-list-price]')?.textContent).toBe(
      '$200,00'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the game card with a ribbon when passed in the props', () => {
    render(<GameCard {...commonProps} ribbonText="20% OFF" />)
    expect(screen.getByText(/20% OFF/i)).toBeInTheDocument()
  })

  it('should render the wishlist button with the filled icon, when the game is marked as favorite', () => {
    const { container } = render(<GameCard {...commonProps} isFavorite />)
    expect(container.querySelector('[data-wishlist] path')).toHaveAttribute(
      'd',
      'm12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z'
    )
  })
})
