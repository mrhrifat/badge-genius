/**
 * Title: Footer
 * Description:
 * Filename: Footer.tsx
 * Path: /components/footer/Footer.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */
/* eslint-disable react/no-children-prop */
import { markdown } from '@/utils/data'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const Footer = () => {
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'center' }}
      my={2}>
      <Box>
        <Typography variant="subtitle1" data-testid="content1">
          An Open Source Project, build & maintained by
          <Link
            href="https://github.com/mrhrifat"
            target="_blank"
            style={{ color: '#fff' }}>
            Mrh Rifat
          </Link>
        </Typography>
        <Typography variant="subtitle1">
          Kindly support this projects by your donations
        </Typography>
      </Box>
      <ReactMarkdown linkTarget="_blank" children={markdown} />
    </Stack>
  )
}

export default Footer
