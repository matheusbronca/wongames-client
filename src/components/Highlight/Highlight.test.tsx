import { render, screen } from '@testing-library/react'

import Highlight, { HighlightProps } from './Highlight'

const props: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/#',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render the background image', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle(
      `background-image: url(${props.backgroundImage})`
    )
  })

  it('should render the float image', () => {
    render(<Highlight {...props} floatImage="/img/red-dead-float.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/img/red-dead-float.png'
    )
  })

  it('should render aligned right by default', () => {
    const { container } = render(
      <Highlight {...props} floatImage="/img/red-dead-float.png" />
    )

    const grid = container.firstChild?.firstChild
    const img = container?.querySelector('img')
    const textContainer = screen.getByText(/Heading 1/i).parentElement

    expect(grid).toHaveClass('grid-cols-[1.3fr_2fr]')

    expect(img).toHaveClass('order-first justify-self-start')
    expect(textContainer).toHaveClass('text-right')
  })

  it('should render aligned left when specified in the component props', () => {
    const { container } = render(
      <Highlight
        {...props}
        floatImage="/img/red-dead-float.png"
        alignment="left"
      />
    )

    const grid = container.firstChild?.firstChild
    const img = container?.querySelector('img')
    const textContainer = screen.getByText(/Heading 1/i).parentElement

    expect(grid).toHaveClass('grid-cols-[2fr_1.3fr]')

    expect(img).toHaveClass('order-last justify-self-end')
    expect(textContainer).toHaveClass('text-left')
  })
})
