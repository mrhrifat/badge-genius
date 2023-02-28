/**
 * Title: utilsInterfaces
 * Description:
 * Filename: utilsInterfaces.ts
 * Path: /interfaces/utilsInterfaces.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 28, 2023
 *
 */

import { OptionsType } from '@/types/utilsTypes'
import { SvgIconProps } from '@mui/material'
import { ReactElement } from 'react'

// SimpleIcons - SimpleIconsInterface
export interface SimpleIconsInterface {
  title: string
  slug: string
  hex: string
  source: string
  svg: string
  path: string
  guidelines: string
  license?:
    | string
    | null
    | {
        type: string
        url: string
      }
    | undefined
}

// shieldLists - ShieldListShieldPropInterface
export interface ShieldListShieldPropInterface {
  id: number
  title: string
  icon: ReactElement<SvgIconProps> | string
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  value: (options: OptionsType | undefined, title: string) => any
}

// OptionRender - OptionRenderInterface
export interface OptionRenderInterface {
  // eslint-disable-next-line no-unused-vars
  (value: object | undefined): string[]
}

// HandleWhiteSpace - HandleWhiteSpaceInterface
export interface HandleWhiteSpaceInterface {
  // eslint-disable-next-line no-unused-vars
  (value: string | null): string | false
}
