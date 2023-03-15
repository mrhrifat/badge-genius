/**
 * Title: CustomButton
 * Description:
 * Filename: CustomButton.tsx
 * Path: /components/dynamic/CustomButton.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Mar 15, 2023
 *
 */

import { CustomButtonInterface } from '@/interfaces/componentsInterfaces'
import Button from '@mui/material/Button'
import { FC } from 'react'

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
