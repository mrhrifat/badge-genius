import { Icon } from '@mui/material'
import { FC } from 'react'

export interface RenderIconInterface {
  icon: string
  width: number
  height: number
  viewBox: string
}

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
          theme.palette.mode === 'light' ? '#38BDF8' : '#22A6B3',
      }}>
      <svg width={width} height={height} viewBox={viewBox}>
        <path d={icon} />
      </svg>
    </Icon>
  )
}

export default RenderIcon
