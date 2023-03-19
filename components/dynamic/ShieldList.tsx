/**
 * Title: ShieldList
 * Description:
 * Filename: ShieldList.tsx
 * Path: /components/dynamic/ShieldList.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { FilterValue } from '@/components/utils'
import { ShielListInterace } from '@/interfaces/componentsInterfaces'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { FC } from 'react'

const ShieldList: FC<ShielListInterace> = ({ icon, title }) => {
  return (
    <>
      <ListItem disablePadding id={title + 'ListItem'}>
        <ListItemIcon
          sx={{
            fill: (theme) =>
              theme.palette.mode === 'light' ? '#22A6B3' : '#38BDF8',
          }}>
          <svg width="21" height="21" viewBox="0 0 512 512">
            <path d={icon} />
          </svg>
        </ListItemIcon>
        <ListItemText primary={title} />
        <FilterValue title={title} />
      </ListItem>
    </>
  )
}

export default ShieldList
