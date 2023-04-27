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
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FC, useContext } from 'react'

const Header: FC = () => {
  const shieldContextValue = useContext(ShieldContext)

  return (
    <Box my={5}>
      <Stack direction="row" gap={1} justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ letterSpacing: 1 }}
          data-testid="appName">
          Badge Genius
        </Typography>
        <Box alignSelf="center">
          <HeaderIcons />
        </Box>
      </Stack>

      <Stack direction="row" gap={1} justifyContent="space-between">
        <div>
          <Typography variant="body1" data-testid="tagLine1">
            Build & Download&nbsp;
            <strong data-testid="simpleIconsNo">
              {shieldContextValue?.icons &&
                optionRender(shieldContextValue?.icons).length}
            </strong>
            &nbsp;popular brands
          </Typography>
          <Typography variant="body1" data-testid="tagLine2">
            Badge,&nbsp;&nbsp;
            <abbr title="Scalable Vector Graphics">SVG,</abbr>
            &nbsp; HEX & so on
          </Typography>
        </div>
        <Box alignSelf="center">
          <Theme />
        </Box>
      </Stack>
    </Box>
  )
}

export default Header
