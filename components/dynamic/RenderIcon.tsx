import { RenderIconInterface } from '@/interfaces/componentsInterfaces'
import Icon from '@mui/material/Icon'
import { FC } from 'react'

const RenderIcon: FC<RenderIconInterface> = ({
  icon,
  width,
  height,
  viewBox,
}) => {
  return (
    <Icon
      sx={{
        fill: (theme) =>
          theme.palette.mode === 'light' ? '#22A6B3' : '#38BDF8',
      }}>
      <svg width={width} height={height} viewBox={viewBox}>
        <path d={icon} />
      </svg>
    </Icon>
  )
}

export default RenderIcon
