/**
 * Title: Header
 * Description:
 * Filename: Header.tsx
 * Path: /components/header/Header.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 21, 2023
 *
 */

import { HeaderIcons } from '@/components/dynamic'
import { Theme } from '@/components/header'
import { optionRender } from '@/lib/utilsLib'
import ShieldContext from '@/utils/ShieldContext'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FC, useContext } from 'react'

const Header: FC = () => {
  const shieldContextValue = useContext(ShieldContext)
  return (
    <Box my={3}>
      <Stack
        direction="row"
        // direction={{ xs: 'column', sm: 'row' }}
        gap={1}
        justifyContent="space-between">
        <Typography variant="h5" fontWeight={700} sx={{ letterSpacing: 1 }}>
          Shield Icons
        </Typography>
        <Box alignSelf="center">
          <HeaderIcons />
        </Box>
      </Stack>
      <Stack
        direction="row"
        // direction={{ xs: 'column', sm: 'row' }}
        gap={1}
        justifyContent="space-between">
        <Typography variant="body1">
          Build & Download &nbsp;
          <strong>{optionRender(shieldContextValue?.icons).length}</strong>
          &nbsp;popular brands
          <br />
          Badge,&nbsp;&nbsp;
          <abbr title="Scalable Vector Graphics">SVG,</abbr>
          &nbsp; Hex & so on
        </Typography>
        <Box alignSelf="center">
          <Theme />
        </Box>
      </Stack>
    </Box>
  )
}

export default Header
