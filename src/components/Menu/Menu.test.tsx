import { fireEvent, render, screen } from '@testing-library/react'

import Menu from './Menu'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    screen
      .getAllByLabelText(/won games/i)
      .forEach((el) => expect(el).toBeInTheDocument())
  })
})

it('should handle the open/close mobile menu', () => {
  const { container } = render(<Menu />)
  //
  // selecinar o MenuFull
  const fullMenuElement = container.querySelector('nav[data-mobile]')
  if (!fullMenuElement) fail('the mobile navigation menu should be present')

  // verificar se o menu está escondido
  expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  expect(fullMenuElement).toHaveClass('opacity-0')

  // clicar no botão de abrir o menu e verificar se ele abriu
  fireEvent.click(screen.getByLabelText(/open menu/i))
  expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
  expect(fullMenuElement).toHaveClass('opacity-100 pointer-events-auto')

  // clicar no botão de fechar o menu e verificar se ele fechou
  fireEvent.click(screen.getByLabelText(/close menu/i))
  expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
  expect(fullMenuElement).toHaveClass('opacity-0 pointer-events-none')
})

it('should show register box when logged out', () => {
  render(<Menu />)

  screen
    .getAllByText(/log in now/i)
    .forEach((el) => expect(el).toBeInTheDocument())
  screen
    .getAllByText(/sign up/i)
    .forEach((el) => expect(el).toBeInTheDocument())

  screen
    .queryAllByText(/wishlist/i)
    .forEach((el) => expect(el).not.toBeInTheDocument())
  screen
    .queryAllByText(/my account/i)
    .forEach((el) => expect(el).not.toBeInTheDocument())
})

it('should show wishlist and my account links at the menu when logged in', () => {
  render(<Menu username="john@doe.com" />)

  screen
    .getAllByText(/wishlist/i)
    .forEach((el) => expect(el).toBeInTheDocument())
  screen
    .getAllByText(/my account/i)
    .forEach((el) => expect(el).toBeInTheDocument())

  screen
    .queryAllByText(/log in now/i)
    .forEach((el) => expect(el).not.toBeInTheDocument())
  screen
    .queryAllByText(/sign up/i)
    .forEach((el) => expect(el).not.toBeInTheDocument())
})
