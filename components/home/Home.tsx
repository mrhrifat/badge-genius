import { Grid } from '@mui/material'
import SearchIcon from '../main/SearchIcon'

const Home = () => {
  return (
    <Grid container gap={1} justifyContent="space-between">
      <Grid item md={3} sm={5} xs={12}>
        <SearchIcon />
      </Grid>
    </Grid>
  )
}

export default Home
