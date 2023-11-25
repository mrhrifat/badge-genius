/**
 * Title: Toggle
 * Description:
 * Filename: Toggle.tsx
 * Path: /app/reusable/Toggle.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 22, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
'use client'

import { ToggleKey, ToggleKeyOptionType } from '@/types/componentsTypes'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { FC } from 'react'

const Toggle: FC<ToggleKey> = ({ value, handleChange, options }: ToggleKey) => {
  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="toggle-button">
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
export default Toggle
