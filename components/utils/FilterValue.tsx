import { shieldListValue } from '@/lib/utilsLib'
import ShieldContext from '@/utils/ShieldContext'
import Typography from '@mui/material/Typography'
import React, { FC, useContext } from 'react'

export interface FilterValueInterface {
  title: string
}

export const renderWebsite = (value: string) => (
  <a
    href={value}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#22A6B3' }}>
    Visit Now
  </a>
)

const FilterValue: FC<FilterValueInterface> = ({ title }) => {
  const shieldContextValue = useContext(ShieldContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any = shieldListValue(shieldContextValue?.options, title)

  return <Typography variant="subtitle1">{value}</Typography>
}

export default React.memo(FilterValue)
