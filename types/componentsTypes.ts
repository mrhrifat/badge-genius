/**
 * Title: componentsTypes
 * Description:
 * Filename: componentsTypes.ts
 * Path: /types/componentsTypes.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { SelectChangeEvent, SvgIconProps } from '@mui/material'
import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from 'react'

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
export type IconAndOptionType = {
  leftItem: ReactNode
  rightItem: ReactNode
}

// AlertMessage - AlertMessageType
export type AlertMessageType = {
  isCopied: boolean
}

// TotalItem - TotalItemType
export type CustomBadgeType = {
  value: object
  icon: ReactElement<SvgIconProps>
}

// RenderSVG - RenderSVGType
export type BuildSVGLogoType = {
  width: number
  height: number
  title: string
  path: string
}

// FooterIcon - FooterIconType
export type FooterIconType = { id: number; title: string; icon: string }

// FooterIcons - FooterIconsType
export type FooterIconsType = FooterIconType[]

// ShieldFormItems - ShieldFormItemsTypes
export type SheildFormItemsType = string[] | number[]

// TextInputField - TextInputFieldType
export type CustomTextFieldType = {
  value: string | undefined
  id: string
  label: string
  ex: string
  handleValueChange: (
    // eslint-disable-next-line no-unused-vars
    event: ChangeEvent<HTMLInputElement | { id: string; value: string }>
  ) => void
}

// TextInputDialog - TextInputDialogType
export type CustomDialogType = {
  handleClose: () => void
  open: boolean
  subCategoryValue: string
}

export type ListValueType = {
  title: string
}

// ShieldListType - ShieldListType
export type InfoListItemType = {
  icon: string
  title: string
}

// CustomButtonInterface - Custom Button
export type CustomButtonType = {
  title: string
  disable: boolean
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  handleClick?: (shieldContextValue: any) => void
  handleFunc?: boolean
  icon?: ReactNode
}

// ShieldForm - ShieldFormInterface
export type CustomFormType = {
  title: string
  items: SheildFormItemsType
  optionsState: string | number
  handleOptionsChange: (
    // eslint-disable-next-line no-unused-vars
    event:
      | ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
      | SelectChangeEvent<string | number>
  ) => void
  menuProps?: object
  fullWidth?: boolean
}

// RenderIconInterface - Render Icon
export type CustomIconType = {
  icon: string
  width: number
  height: number
  viewBox: string
}

// ToggleKey - ToggleKeyInterface
export type ToggleKey = {
  value: string
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<unknown>, value: string) => void
  options: ToggleKeyOptionsType
}

// useCopyToClipboard - UseCopyToClipboardInterface
export type UseCopyToClipboardType = {
  isCopid: boolean
  setIsCopid: Dispatch<SetStateAction<boolean>>
}
