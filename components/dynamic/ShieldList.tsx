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
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { FC } from 'react'

const ShieldList: FC<ShielListInterace> = ({ icon, title, value }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
      <FilterValue value={value} />
      <Divider />
    </>
  )
}

export default ShieldList
