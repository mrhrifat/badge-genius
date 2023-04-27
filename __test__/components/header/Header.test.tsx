/* eslint-disable no-undef */
import Header from '@/components/header/Header'
import { optionRender } from '@/lib/utilsLib'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { siSimpleicons } from 'simple-icons'

describe('Home', () => {
  it('render Badge Genius', () => {
    render(<Header />)

    const appName = screen.getByTestId('appName')
    const simpleIconsNo = screen.getByTestId('simpleIconsNo')

    expect(appName).toHaveTextContent('Badge Genius')
    expect(simpleIconsNo).toBeInTheDocument()
    expect(simpleIconsNo).toBeValid()
  })

  test('Count Icons Item', () => {
    const items = optionRender({ siSimpleicons })
    expect(items.length).toEqual(1)
  })

  test('Tagline', () => {
    render(<Header />)
    const tagLine1 = screen.getByTestId('tagLine1')
    const tagLine2 = screen.getByTestId('tagLine2')
    expect(tagLine1).toHaveTextContent(`Build & Download popular brands`)
    expect(tagLine2).toHaveTextContent('Badge, SVG, HEX & so on')
  })
})
