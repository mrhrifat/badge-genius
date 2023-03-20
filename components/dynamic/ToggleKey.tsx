/**
 * Title: ToggleKey
 * Description:
 * Filename: ToggleKey.tsx
 * Path: /components/dynamic/ToggleKey.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { ToggleKeyInterface } from '@/interfaces/componentsInterfaces'
import { ToggleKeyOptionType } from '@/types/componentsTypes'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { FC } from 'react'

const ToggleKey: FC<ToggleKeyInterface> = ({
  value,
  handleChange,
  options,
}: ToggleKeyInterface) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform">
      {options.map((option: ToggleKeyOptionType) => (
        <ToggleButton
          key={option.id}
          value={option.value}
          sx={{ padding: '5px 20px' }}>
          {option.title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
export default ToggleKey
