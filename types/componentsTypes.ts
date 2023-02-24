/**
 * Title: componentsTypes
 * Description:
 * Filename: componentsTypes.ts
 * Path: /types/componentsTypes.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { SvgIconProps } from '@mui/material'
import { ReactElement, ReactNode } from 'react'

// Toggle Key Option
export type ToggleKeyOptionType = {
  id: number
  value: string
  title: string
}

// Toggle Key Options
export type ToggleKeyOptionsType = ToggleKeyOptionType[]

// Total Item
export type TotalItemType = {
  value: object | undefined
  icon: ReactElement<SvgIconProps>
}

// Option And Icon
export type OptionAndIconType = {
  firstItem: ReactNode
  lastItem: ReactNode
}
