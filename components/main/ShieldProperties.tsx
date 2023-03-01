/**
 * Title: ShieldProperties
 * Description:
 * Filename: ShieldProperties.tsx
 * Path: /components/main/ShieldProperties.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

'use client'

import { ShieldList } from '@/components/dynamic'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import { shieldLists } from '../../utils/data'

const ShieldProperties = () => {
  return (
    <Stack direction="column" gap={2}>
      <List>
        {shieldLists.map((shieldList) => (
          <ShieldList
            key={shieldList.id}
            icon={shieldList.icon}
            title={shieldList.title}
          />
        ))}
      </List>
    </Stack>
  )
}

export default ShieldProperties
