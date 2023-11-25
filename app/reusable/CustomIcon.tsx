/**
 * Title: CustomIcon
 * Description:
 * Filename: CustomIcon.tsx
 * Path: /app/reusable/CustomIcon.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Mar 19, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */

import { CustomIconType } from '@/types/componentsTypes'
import Icon from '@mui/material/Icon'
import { FC } from 'react'

const CustomIcon: FC<CustomIconType> = ({ icon, width, height, viewBox }) => {
  return (
    <div>
      <Icon
        sx={{
          fill: (theme) =>
            theme.palette.mode === 'light' ? '#22A6B3' : '#38BDF8',
        }}>
        <svg width={width} height={height} viewBox={viewBox}>
          <path d={icon} />
        </svg>
      </Icon>
    </div>
  )
}

export default CustomIcon
