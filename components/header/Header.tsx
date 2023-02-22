/**
 * Title: Header
 * Description:
 * Filename: Header.tsx
 * Path: /components/header/Header.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 21, 2023
 *
 */

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import HeaderIcons from '../dynamic/HeaderIcons'
import Theme from './Theme'

const Header: FC = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent={{ xs: 'center', sm: 'space-between' }}
      my={5}
      gap={{ xs: 1 }}>
      <Stack direction="column" gap={1}>
        <Typography variant="h5" fontWeight={700} sx={{ letterSpacing: 1 }}>
          Shield Icons
        </Typography>
        <Typography variant="body1">
          Build & Download 2401 popular brands
          <br />
          Badge,&nbsp;&nbsp;
          <abbr title="Scalable Vector Graphics">SVG,</abbr>
          &nbsp; Hex & so on
        </Typography>
      </Stack>
      <Stack direction="column" gap={1} alignSelf="center">
        <div>
          <HeaderIcons />
        </div>
        <div>
          <Theme />
        </div>
      </Stack>
    </Stack>
  )
}

export default Header
