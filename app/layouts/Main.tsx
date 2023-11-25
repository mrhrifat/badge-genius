/**
 * Title: Main
 * Description:
 * Filename: Main.tsx
 * Path: /app/layouts/Main.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 25, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */

import { Divider, Grid } from '@mui/material'
import BuildReset from '../main/info/BuildReset'
import InfoList from '../main/info/InfoList'
import Options from '../main/operation/Options'
import SearchIcons from '../main/operation/SearchIcon'
import OutputPanel from '../main/output/OutputPanel'

const Main = () => {
  return (
    <section>
      <Grid container gap={0.5} justifyContent="space-between" my={3}>
        <Grid item lg={4} md={4} sm={5} xs={12} className="home">
          <SearchIcons />
          <Options />
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12} className="home">
          <InfoList />
          <Divider />
          <BuildReset />
        </Grid>

        <Grid item lg={3.5} md={3.5} sm={12} xs={12} className="home">
          <OutputPanel />
        </Grid>
      </Grid>
    </section>
  )
}

export default Main
