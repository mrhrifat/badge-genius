import { TotalItem } from '@/components/dynamic'
import {
  generateOptionsLogoWidth,
  shieldSubCategoryOptions,
} from '@/lib/utilsLib'
import { labelColors, shieldCategories, shieldTypeOptions } from '@/utils/data'
import IconButton from '@mui/material/IconButton'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Render total item of option of badge', () => {
  it('should render shield categories item no', () => {
    render(<TotalItem icon={<IconButton />} value={shieldCategories} />)
    const badge = screen.getByTestId('badge-total-item')
    expect(badge).toHaveTextContent(/1/)
  })

  it('should render shield sub category item no', () => {
    render(
      <TotalItem
        icon={<IconButton />}
        value={shieldSubCategoryOptions('github')}
      />
    )
    const badge = screen.getByTestId('badge-total-item')
    expect(badge).toHaveTextContent(/1/)
  })

  it('should render shield style', () => {
    render(<TotalItem icon={<IconButton />} value={shieldTypeOptions} />)
    const badge = screen.getByTestId('badge-total-item')
    expect(badge).toHaveTextContent(/5/)
  })

  it('should render shield colors item no', () => {
    render(<TotalItem icon={<IconButton />} value={labelColors} />)
    const badge = screen.getByTestId('badge-total-item')
    expect(badge).toHaveTextContent(/6/)
  })

  it('should render label color item no', () => {
    render(<TotalItem icon={<IconButton />} value={labelColors} />)
    const badge = screen.getByTestId('badge-total-item')
    expect(badge).toHaveTextContent(/6/)
  })

  it('should render logo color item no', () => {
    render(<TotalItem icon={<IconButton />} value={labelColors} />)
    const badge = screen.getByTestId('badge-total-item')
    expect(badge).toHaveTextContent(/6/)
  })

  it('should render logo width no', () => {
    render(
      <TotalItem icon={<IconButton />} value={generateOptionsLogoWidth()} />
    )
    const badge = screen.getByTestId('badge-total-item')
    expect(badge).toHaveTextContent(/50/)
    expect(badge).not.toHaveTextContent(/20/)
  })
})
