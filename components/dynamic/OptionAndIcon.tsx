/**
 * Title: OptionAndIcon
 * Description:
 * Filename: OptionAndIcon.tsx
 * Path: /components/dynamic/OptionAndIcon.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { OptionAndIconGridType } from '@/types/componentsTypes'
import Grid from '@mui/material/Grid'

const OptionAndIcon = ({ firstItem, secondItem }: OptionAndIconGridType) => {
  return (
    <Grid container gap={2}>
      <Grid item xs={2} alignSelf="center" textAlign="center">
        {firstItem}
      </Grid>
      <Grid item xs={8}>
        {secondItem}
      </Grid>
    </Grid>
  )
}

export default OptionAndIcon
