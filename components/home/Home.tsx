/**
 * Title: Home
 * Description:
 * Filename: Home.tsx
 * Path: /components/home/Home.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { Grid } from '@mui/material'
import { FC } from 'react'
import Operation from '../main/Operation'
import SearchIcon from '../main/SearchIcon'
import ShieldOptions from '../main/ShieldOptions'
import ShieldProperties from '../main/ShieldProperties'

const Home: FC = () => {
  return (
    <Grid container gap={1} justifyContent="space-between">
      <Grid item md={3} sm={5} xs={12}>
        <SearchIcon />
        <ShieldOptions />
      </Grid>

      <Grid item md={5} sm={6} xs={12}>
        <ShieldProperties />
      </Grid>

      <Grid item md={3} sm={12} xs={12}>
        <Operation />
      </Grid>
    </Grid>
  )
}

export default Home
