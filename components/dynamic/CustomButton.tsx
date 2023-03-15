/**
 * Title: CustomButton
 * Description:
 * Filename: CustomButton.tsx
 * Path: /components/dynamic/CustomButton.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Mar 15, 2023
 *
 */

import Button from '@mui/material/Button'
import { FC, ReactNode } from 'react'

export interface CustomButtonInterface {
  title: string
  disable: boolean
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  handleClick?: (shieldContextValue: any) => void
  handleFunc?: boolean
  icon: ReactNode
}

const CustomButton: FC<CustomButtonInterface> = ({
  title,
  disable,
  handleClick,
  icon,
}) => {
  return (
    <Button
      fullWidth
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
