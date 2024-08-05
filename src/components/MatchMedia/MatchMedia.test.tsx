import { render, screen } from '@testing-library/react'
import type { Breakpoint } from './MatchMedia'

import MatchMedia from './MatchMedia'

describe('<MatchMedia />', () => {
  const mediasToMatch: Breakpoint[] = ['md', 'lg', 'xl', '2xl']

  beforeEach(() => {
    render(
      <>
        <MatchMedia>
          <h1 data-testid="null">null</h1>
        </MatchMedia>
        {mediasToMatch.map((breakpoint) => (
          <div key={breakpoint}>
            <MatchMedia matcher={`greaterThan: ${breakpoint}`}>
              <h1
                data-testid={`greaterThan:${breakpoint}`}
              >{`greaterThan: ${breakpoint}`}</h1>
            </MatchMedia>
            <MatchMedia matcher={`lessThan: ${breakpoint}`}>
              <h1
                data-testid={`lessThan:${breakpoint}`}
              >{`lessThan: ${breakpoint}`}</h1>
            </MatchMedia>
          </div>
        ))}
      </>
    )
  })

  it('should be hidden if no media query is passed on the component props', () => {
    expect(screen.getByTestId('null').parentElement).toHaveClass('hidden')
  })

  it('should show or hide based on the media passed on props', () => {
    mediasToMatch.forEach((media) => {
      const greaterThanEl = screen.getByTestId(
        `greaterThan:${media}`
      ).parentElement
      const lessThanEl = screen.getByTestId(`lessThan:${media}`).parentElement

      expect(greaterThanEl).toHaveClass(`hidden ${media}:block`)
      expect(lessThanEl).toHaveClass(`block ${media}:hidden`)
    })
  })
})
