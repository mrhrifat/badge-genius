/* eslint-disable no-undef */
import Footer from '@/components/footer/Footer'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Footer Components', () => {
  it('Render Footer Content', () => {
    render(<Footer />)

    const footerContent1 = screen.getByRole('heading', {
      name: 'An Open Source Project, build & maintained by Rifat.',
    })

    expect(footerContent1).toBeInTheDocument()
  })

  it('Render Footer Content 2', () => {
    render(<Footer />)
    const footerContent2 = screen.getByRole('heading', {
      name: 'Kindly support this projects by your donations',
    })

    expect(footerContent2).toBeInTheDocument()
  })
})
