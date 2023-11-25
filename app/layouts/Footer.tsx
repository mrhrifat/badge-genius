/**
 * Title: Footer
 * Description:
 * Filename: Footer.tsx
 * Path: /app/layouts/Footer.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 25, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
import { footerLiks } from '@/utils/data'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const Footer = () => {
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'center' }}
      my={2}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
          <Typography variant="subtitle1" data-testid="content1">
            An Open Source Project, build & maintained by
          </Typography>
          <a
            href="https://github.com/mrhrifat"
            target="_blank"
            style={{ color: '#fff' }}
            rel="noreferrer">
            Mrh Rifat
          </a>
        </div>
        <Typography variant="subtitle1">
          Kindly support this projects by your donations
        </Typography>
      </div>

      <div>
        {footerLiks.map((item) => (
          <a
            href={item.link}
            key={item.id}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: 5 }}>
            <Image
              src={item.image}
              width={item.w}
              height={28}
              alt={item.title}
            />
          </a>
        ))}
      </div>
      {/* <ReactMarkdown linkTarget="_blank" children={markdown} /> */}
    </Stack>
  )
}

export default Footer
