/**
 * Title: HeaderIcons
 * Description:
 * Filename: HeaderIcons.tsx
 * Path: /components/dynamic/HeaderIcons.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { HeaderIconType } from '@/types/componentsTypes'
import { headerIcons } from '@/utils/data'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'
import { FC } from 'react'

const HeaderIcons: FC = () => {
  return (
    <>
      {headerIcons.map((headerIcon: HeaderIconType) => (
        <Tooltip title={headerIcon.title} key={headerIcon.title}>
          <Link href={headerIcon.url} target="_blank">
            <IconButton
              aria-label={headerIcon.title}
              color="primary"
              sx={{
                fill: (theme) =>
                  theme.palette.mode === 'light' ? '#22A6B3' : '#38BDF8',
              }}>
              <svg height="21" width="21" viewBox="0 0 512 512">
                <path d={headerIcon.icon} />
              </svg>
            </IconButton>
          </Link>
        </Tooltip>
      ))}
    </>
  )
}

export default HeaderIcons
