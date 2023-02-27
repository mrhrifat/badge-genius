/**
 * Title: TotalItem
 * Description:
 * Filename: TotalItem.tsx
 * Path: /components/dynamic/TotalItem.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { optionRender } from '@/lib/utilsLib'
import { TotalItemType } from '@/types/componentsTypes'
import Badge from '@mui/material/Badge'

const TotalItem = ({ value, icon }: TotalItemType) => {
  return (
    <Badge
      badgeContent={optionRender(value).length}
      showZero
      color="primary"
      max={5000}>
      {icon}
    </Badge>
  )
}

export default TotalItem
