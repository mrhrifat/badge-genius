import { AlertMessage } from '@/components/dynamic'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Render Alert Message', () => {
  it('show snackbar if copied true', () => {
    render(<AlertMessage isCopied={true} />)
    const snackbar = screen.getByTestId('snackbar')
    expect(snackbar).toBeInTheDocument()
  })
})
