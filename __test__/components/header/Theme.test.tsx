/* eslint-disable no-undef */
import Theme from '@/components/header/Theme'
import ShieldContext from '@/utils/ShieldContext'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const mockShieldContextValue = {
  theme: 'dark',
  setTheme: jest.fn(),
}

describe('Toggle Theme Light & Dark', () => {
  beforeEach(() => {
    render(
      <ShieldContext.Provider value={mockShieldContextValue}>
        <Theme />
      </ShieldContext.Provider>
    )
  })

  // test('Turn Light Theme at First Click', () => {
  //   const toggleSwitch = screen.
  //   expect(toggleSwitch).toBeInTheDocument()
  // })
})
