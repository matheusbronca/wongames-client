import { render, screen } from '@testing-library/react'

import Banner from './Banner'

const props = {
  title: 'Banner',
  subtitle:
    "At Super Mario World you're going to pass through a lot of challenges, are you ready for this adventure?",
  img: 'https://images.unsplash.com/photo-1629646526325-d4e092b641b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  buttonLabel: 'Buy now',
  buttonLink: '/#'
}

describe('<Banner />', () => {
  it('shoudl render heading as h3 by default', () => {
    render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Banner/i, level: 3 })
    ).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Banner {...props} headingTag="h2" />)

    // Se o titulo existe
    expect(
      screen.getByRole('heading', { name: /Banner/i, level: 2 })
    ).toBeInTheDocument()
    //
    // Se o subtitulo existe
    expect(screen.getByRole('paragraph')).toHaveTextContent(
      /At Super Mario World you're going to pass through a lot of challenges, are you ready for this adventure\?/i
    )
    // se a imagem existe
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: /Banner - At Super Mario World you're going to pass through a lot of challenges, are you ready for this adventure?/i
      })
    ).toHaveAttribute('src')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    render(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveClass('bg-secondary after:border-secondary')
    expect(ribbon).toHaveClass('after:size-[6px] text-xs')
  })
})
