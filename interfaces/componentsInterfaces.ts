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

// ToggleKey - ToggleKeyInterface
export interface ToggleKeyInterface {
  value: string | undefined
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<unknown>, value: string) => void
  options: ToggleKeyOptionsType
}

// AlertMessage - AlertMessageInterface
export interface AlertMessageInterface {
  isCopied: boolean
}

// ColorPalette - ColorPaletteInterface
export interface ColorPaletteInterface {
  color: string
}

// ShieldForm - ShieldFormInterface
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

// ShieldListInterace - ShielListInterace
export interface ShielListInterace {
  icon: ReactElement<SvgIconProps> | string
  title: string
  // eslint-disable-next-line no-unused-vars
  value: (options: OptionsType | undefined, title: string) => void
}

// useCopyToClipboard - UseCopyToClipboardInterface
export interface UseCopyToClipboardInterface {
  isCopid: boolean
  setIsCopid: Dispatch<SetStateAction<boolean>>
}
