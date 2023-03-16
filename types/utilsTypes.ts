/**
 * Title: types
 * Description:
 * Filename: types.ts
 * Path: /types/types.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 20, 2023
 *
 */

import { ShieldListShieldPropInterface } from '@/interfaces/utilsInterfaces'
import { Dispatch, SetStateAction } from 'react'

// layout - Metadata Type
export type MetadataType = {
  title: string
  description: string
  keywords: string[]
  icons: object
  generator: string
  applicationName: string
  referrer: string
  themeColor: string
  colorScheme: string
  creator: string
  publisher: string
  copyright: string
  distribution: string
  rating: string
  author: string
  owner: string
  coverage: string
}

// page - Shild Context Value Type
export type ShieldContextValueType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
  options: OptionsType
  setOptions: Dispatch<SetStateAction<OptionsType>>
  shield: string
  setShield: Dispatch<SetStateAction<string>>
  icons: object
}

// page - Options Data Type
export type OptionsType = {
  title: string
  svg: string
  hex: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  license: any
  guidelines: string
  path: string
  source: string
  slug: string
  labelColor: string
  logoColor: string
  logoWidth: number | string
  style: string
  category: string
}

export type ShieldCategoriesType = string[]

// shieldTypeOptions - ShieldTypeOptionsType
export type ShieldTypeOptionsType = string[]

// labelColors - ShieldLabelColorsType
export type ShieldLabelColorsType = string[]

// Shield List Shild Props
export type ShieldListsShieldPropsType = ShieldListShieldPropInterface[]

// GenerateShield
export type GenerateShieldType = (
  // eslint-disable-next-line no-unused-vars
  value: OptionsType,
  // eslint-disable-next-line no-unused-vars
  setShield: Dispatch<SetStateAction<string>>
) => void
