/* eslint-disable no-undef */
import { Header } from '@/components/header'
import { optionRender } from '@/lib/utilsLib'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { si1001tracklists, siSimpleicons } from 'simple-icons'

describe('Home Component', () => {
  it('render badge genius text', () => {
    render(<Header />)
    const appName = screen.getByTestId('appName')
    expect(appName).toHaveTextContent('Badge Genius')
  })

  it('count total icons number', () => {
    render(<Header />)

    const simpleIconsNo = screen.getByTestId('simpleIconsNo')
    const items1 = optionRender({ siSimpleicons })
    const items2 = optionRender({ siSimpleicons, si1001tracklists })

    expect(simpleIconsNo).toBeInTheDocument()
    expect(simpleIconsNo).toBeValid()
    expect(items1.length).toEqual(1)
    expect(items2.length).toEqual(2)
  })

  it('render tagline', () => {
    render(<Header />)
    const tagLine1 = screen.getByTestId('tagLine1')
    const tagLine2 = screen.getByTestId('tagLine2')
    expect(tagLine1).toHaveTextContent(`Build & Download popular brands`)
    expect(tagLine2).toHaveTextContent('Badge, SVG, HEX & so on')
  })
})
