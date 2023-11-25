/**
 * Title: CustomBadge
 * Description:
 * Filename: CustomBadge.tsx
 * Path: /app/reusable/CustomBadge.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 25, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
import { CustomBadgeType } from '@/types/componentsTypes'
import { optionRender } from '@/utils/utilsLib'
import Badge from '@mui/material/Badge'

const CustomBadge = ({ value, icon }: CustomBadgeType) => {
  return (
    <Badge
      badgeContent={optionRender(value).length}
      showZero
      color="primary"
      max={4000}
      data-testid="badge-total-item">
      {icon}
    </Badge>
  )
}

export default CustomBadge
