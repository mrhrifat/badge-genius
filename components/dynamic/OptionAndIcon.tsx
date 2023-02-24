import { OptionAndIconType } from '@/types/componentsTypes'
import { Grid } from '@mui/material'

const OptionAndIcon = ({ firstItem, lastItem }: OptionAndIconType) => {
  return (
    <Grid container>
      <Grid item xs={10}>
        {firstItem}
      </Grid>
      <Grid item xs={2} alignSelf="center" textAlign="center">
        {lastItem}
      </Grid>
    </Grid>
  )
}

export default OptionAndIcon
