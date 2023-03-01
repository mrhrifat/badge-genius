import { regex, shieldListValue } from '@/lib/utilsLib'
import ShieldContext from '@/utils/ShieldContext'
import Typography from '@mui/material/Typography'
import React, { FC, useContext } from 'react'

export interface FilterValueInterface {
  title: string
}

const FilterValue: FC<FilterValueInterface> = ({ title }) => {
  const shieldContextValue = useContext(ShieldContext)

  const value: any = shieldListValue(shieldContextValue?.options, title)

  if (regex.test(value) === true) {
    return (
      <a
        href={value}
        target="_blank"
        rel=" noopener noreferrer"
        style={{ color: '#22a6b3' }}>
        Visit Now
      </a>
    )
  }
  return <Typography variant="subtitle1">{value}</Typography>
}

export default React.memo(FilterValue)
