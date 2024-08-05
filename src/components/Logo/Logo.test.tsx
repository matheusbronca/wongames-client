import { render } from '@testing-library/react'
import Logo from './Logo'

// Passo-a-passo para testes:
// 1 Passo: Renderizar o componente
// 2 Passo: Selecionar o elemento a ser testado `screen` (queries) => getBylabel
// 3 Passo: Assertion - Asserção - Comparação - Análise (espero que renderize a Logo branca)
describe('<Logo />', () => {
  it('should render a white label by default', () => {
    const { getByLabelText } = render(<Logo />)
    const el = getByLabelText(/Won Games/i).parentElement

    expect(el).toHaveClass('text-white')
  })

  it("should render a black label when color prop is equal to 'black'", () => {
    const { getByLabelText } = render(<Logo color="black" />)
    const el = getByLabelText(/Won Games/i).parentElement

    expect(el).toHaveClass('text-black')
  })

  it('should render the default logo size', () => {
    const { getByLabelText } = render(<Logo />)
    const el = getByLabelText(/Won Games/i).parentElement

    expect(el).toHaveClass('w-[110px] h-[33px]')
  })

  it('should render a bigger logo', () => {
    const { getByLabelText } = render(<Logo size="large" />)
    const el = getByLabelText(/Won Games/i).parentElement

    expect(el).toHaveClass('w-[200px] h-[59px]')
  })

  it('should render a logo without text if hideTextOnMobile = "true"', () => {
    const { getByLabelText } = render(<Logo hideTextOnMobile />)
    const containerEl = getByLabelText(/Won Games/i).parentElement
    expect(containerEl).toHaveClass('w-[33px] h-[45px]')

    const logoEl = containerEl?.querySelector('[data-test-id="logoSvg"]')
    expect(logoEl).toHaveClass('h-[26px] md:h-auto')

    const textEl = containerEl?.querySelector('[data-test-id="logoText"]')
    expect(textEl).toHaveClass('hidden md:block')
  })

  it('should render a bigger logo without text if hideTextOnMobile = "true"', () => {
    const { getByLabelText } = render(<Logo size="large" hideTextOnMobile />)
    const containerEl = getByLabelText(/Won Games/i).parentElement
    expect(containerEl).toHaveClass('w-[58px] h-[45px]')

    const logoEl = containerEl?.querySelector('[data-test-id="logoSvg"]')
    expect(logoEl).toHaveClass('h-[45px] md:h-auto')

    const textEl = containerEl?.querySelector('[data-test-id="logoText"]')
    expect(textEl).toHaveClass('hidden md:block')
  })
})
