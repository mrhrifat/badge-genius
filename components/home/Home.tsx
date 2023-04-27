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
  GenerateAndReset,
  Operation,
  SearchIcon,
  ShieldOptions,
  ShieldProperties,
} from '@/components/main'
import { homeGridStyle } from '@/themes/theme'
import { Divider, Grid } from '@mui/material'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Grid container gap={0.5} justifyContent="space-between">
      <Grid item lg={4} md={4} sm={5} xs={12} sx={homeGridStyle}>
        <SearchIcon />
        <ShieldOptions />
      </Grid>

      <Grid item lg={4} md={4} sm={6} xs={12} sx={homeGridStyle}>
        <ShieldProperties />
        <Divider />
        <GenerateAndReset />
      </Grid>

      <Grid item lg={3.5} md={3.5} sm={12} xs={12} sx={homeGridStyle}>
        <Operation />
      </Grid>
    </Grid>
  )
}

export default Home
