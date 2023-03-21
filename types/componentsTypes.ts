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
import { ChangeEvent, ReactElement, ReactNode } from 'react'

// HeaderIcons - ItemHeaderIconType
export type ItemHeaderIconType = {
  id: number
  itemTitle: string
}

// HeaderIcons - HeaderIconType
export type HeaderIconType = {
  id: number
  title: string
  icon: string
  url: string
}
// HeaderIcons - HeaderIconsType
export type HeaderIconsType = HeaderIconType[]

// ToggleKey -  ToggleKeyOptionType
export type ToggleKeyOptionType = {
  id: number
  value: string
  title: string
}

// ToggleKey - ToggleKeyOptionsType
export type ToggleKeyOptionsType = ToggleKeyOptionType[]

// SearchIcon - Handle Select Icon
export type HandleSelectIconHandlerType = (
  // eslint-disable-next-line no-unused-vars
  event: ChangeEvent<object>,
  // eslint-disable-next-line no-unused-vars
  value: string | null
) => void

// OptionAndIcon - OptionAndIconType
export type OptionAndIconGridType = {
  firstItem: ReactNode
  secondItem: ReactNode
}

// TotalItem - TotalItemType
export type TotalItemType = {
  value: object | undefined
  icon: ReactElement<SvgIconProps>
}

// RenderSVG - RenderSVGType
export type RenderSVGType = {
  width: number
  height: number
  title: string | null | undefined
  path: string | null | undefined
}

// FooterIcon - FooterIconType
export type FooterIconType = { id: number; title: string; icon: string }

// FooterIcons - FooterIconsType
export type FooterIconsType = FooterIconType[]

// Shield Form Items
export type SheildFormItemsType = string[] | number[]
