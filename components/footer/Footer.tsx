/**
 * Title: Footer
 * Description:
 * Filename: Footer.tsx
 * Path: /components/footer/Footer.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import GitHubIcon from '@mui/icons-material/GitHub'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
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
      <Box>
        <Tooltip title="GitHub">
          <IconButton aria-label="github" color="primary">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  )
}

export default Footer
