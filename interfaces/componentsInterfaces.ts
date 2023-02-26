/**
 * Title: componentsInterfaces
 * Description:
 * Filename: componentsInterfaces.ts
 * Path: /interfaces/componentsInterfaces.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import {
  SheildFormItemsType,
  ToggleKeyOptionsType,
} from '@/types/componentsTypes'
import { OptionsType } from '@/types/utilsTypes'
import { SelectChangeEvent, SvgIconProps } from '@mui/material'
import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react'

// Toggle Key Types
export interface ToggleKeyInterface {
  value: string | undefined
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<unknown>, value: string) => void
  options: ToggleKeyOptionsType
}

// Alert Message
export interface AlertMessageInterface {
  isCopied: boolean
}

// Color Palette
export interface ColorPaletteInterface {
  color: string
}

// ShielListInterace
export interface ShielListInterace {
  icon: ReactElement<SvgIconProps> | string
  title: string
  // eslint-disable-next-line no-unused-vars
  value: (options: OptionsType | undefined, title: string) => void
}

// Shield Form
export interface ShieldFormInterface {
  title: string
  items: SheildFormItemsType
  optionsState: string | null | undefined | number
  handleOptionsChange: (
    // eslint-disable-next-line no-unused-vars
    event:
      | ChangeEvent<
          HTMLInputElement | { name?: string | undefined; value: unknown }
        >
      | SelectChangeEvent<string | number | null>
  ) => void
  menuProps?: object
}

// useCopyToClipboard
export interface useCopyToClipboard {
  isCopid: boolean
  // handleCopy: (value: any) => void
  setIsCopid: Dispatch<SetStateAction<boolean>>
}

export interface ShieldListShieldPropInterface {
  id: number
  title: string
  icon: ReactElement<SvgIconProps> | string
  // eslint-disable-next-line no-unused-vars
  value: (options: OptionsType | undefined, title: string) => any
}
