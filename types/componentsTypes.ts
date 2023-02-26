/**
 * Title: componentsTypes
 * Description:
 * Filename: componentsTypes.ts
 * Path: /types/componentsTypes.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { ShieldListShieldPropInterface } from '@/interfaces/componentsInterfaces'
import { SvgIconProps } from '@mui/material'
import { ChangeEvent, ReactElement, ReactNode } from 'react'

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

// Shield List Shild Props
export type ShieldListsShieldPropsType = ShieldListShieldPropInterface[]

// Search Icon Handle Select Icon
export type HandleSelectIconHandlerType = (
  // eslint-disable-next-line no-unused-vars
  event: ChangeEvent<object>,
  // eslint-disable-next-line no-unused-vars
  value: string | null
) => void

export type ItemHeaderIconType = {
  id: number
  itemTitle: string
}

export type HeaderIconType = {
  id: number
  title: string
  icon: string
  url: string
  item?: ItemHeaderIconType[]
}
export type HeaderIconsType = HeaderIconType[]

// Footer Icon Type
export type FooterIconType = { id: number; title: string; icon: string }
// Footer Icons Type
export type FooterIconsType = FooterIconType[]

// Shield Form Items
export type SheildFormItemsType = string[] | number[]
