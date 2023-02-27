import { regex } from '@/lib/utilsLib'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface FilterValueInterface {
  value: any
}

const FilterValue: FC<FilterValueInterface> = ({ value }) => {
  if (regex.test(value) === true)
    return (
      <a
        href={value}
        target="_blank"
        rel=" noopener noreferrer"
        style={{ color: '#22a6b3' }}>
        Visit Now
      </a>
    )
  return <Typography variant="subtitle1">{value}</Typography>
}

export default FilterValue
