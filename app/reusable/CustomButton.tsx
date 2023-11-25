/**
 * Title: CustomButton
 * Description:
 * Filename: CustomButton.tsx
 * Path: /app/reusable/CustomButton.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Mar 15, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
'use client'

import { CustomButtonType } from '@/types/componentsTypes'
import Button from '@mui/material/Button'
import { FC } from 'react'

const CustomButton: FC<CustomButtonType> = ({
  title,
  disable,
  handleClick,
  icon,
}) => {
  return (
    <Button
      aria-labelledby={title}
      aria-label={title}
      sx={{ justifyContent: 'space-around' }}
      disabled={disable}
      variant="contained"
      endIcon={icon}
      onClick={handleClick}>
      {title}
    </Button>
  )
}

export default CustomButton
