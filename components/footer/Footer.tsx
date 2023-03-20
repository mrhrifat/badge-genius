/**
 * Title: Footer
 * Description:
 * Filename: Footer.tsx
 * Path: /components/footer/Footer.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Stack direction="row" justifyContent="space-between" my={2}>
      <Box>
        <Typography variant="subtitle1">
          An Open Source Project, build & maintained by Rifat.
        </Typography>
        <Typography variant="subtitle1">
          Kindly support this projects by your donations
        </Typography>
      </Box>
    </Stack>
  )
}

export default Footer
