/**
 * Title: OptionAndIcon
 * Description:
 * Filename: OptionAndIcon.tsx
 * Path: /components/dynamic/OptionAndIcon.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { OptionAndIconType } from '@/types/componentsTypes'
import Grid from '@mui/material/Grid'

const OptionAndIcon = ({ firstItem, lastItem }: OptionAndIconType) => {
  return (
    <Grid container gap={1}>
      <Grid item xs={2} alignSelf="center" textAlign="center">
        {firstItem}
      </Grid>
      <Grid item xs={9}>
        {lastItem}
      </Grid>
    </Grid>
  )
}

export default OptionAndIcon
