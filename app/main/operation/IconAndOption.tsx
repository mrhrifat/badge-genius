/**
* Title: IconAndOption
* Description:
* Filename: IconAndOption.tsx
* Path: /app/main/operation/IconAndOption.tsx
* Author: Mrh Rifat (Programmer)
* Created Date: Feb 25, 2023
* Last Updated Date: Oct 26, 2023
*
*/

import { IconAndOptionType } from '@/types/componentsTypes'
import Grid from '@mui/material/Grid'

const IconAndOption = ({ leftItem, rightItem }: IconAndOptionType) => {
  return (
    <Grid
      container
      gap={2}
      data-testid="option-icon-grid"
      justifyContent="space-evenly">
      <Grid
        item
        xs={2}
        alignSelf="center"
        textAlign="center"
        sx={{
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          padding: 1,
          borderRadius: 2,
        }}>
        {leftItem}
      </Grid>
      <Grid item xs={8}>
        {rightItem}
      </Grid>
    </Grid>
  )
}

export default IconAndOption
