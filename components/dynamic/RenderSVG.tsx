/**
 * Title: RenderSVG
 * Description:
 * Filename: RenderSVG.tsx
 * Path: /components/dynamic/RenderSVG.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 27, 2023
 *
 */

import { RenderSVGType } from '@/types/componentsTypes'
import { FC } from 'react'

const RenderSVG: FC<RenderSVGType> = ({ width, height, title, path }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}>
      <title>{title}</title>
      <path d={`${path}`} />
    </svg>
  )
}

export default RenderSVG
