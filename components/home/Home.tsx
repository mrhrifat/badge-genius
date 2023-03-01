/**
 * Title: Home
 * Description:
 * Filename: Home.tsx
 * Path: /components/home/Home.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import {
  Operation,
  SearchIcon,
  ShieldOptions,
  ShieldProperties,
} from '@/components/main'
import { homeGridStyle } from '@/themes/theme'
import { Grid } from '@mui/material'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Grid container gap={1} justifyContent="space-between">
      <Grid item md={3} sm={5} xs={12} sx={homeGridStyle}>
        <SearchIcon />
        <ShieldOptions />
      </Grid>

      <Grid item md={5} sm={6} xs={12} sx={homeGridStyle}>
        <ShieldProperties />
      </Grid>

      <Grid item md={3} sm={12} xs={12} sx={homeGridStyle}>
        <Operation />
      </Grid>
    </Grid>
  )
}

export default Home
