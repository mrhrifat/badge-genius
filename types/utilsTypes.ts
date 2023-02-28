/**
 * Title: types
 * Description:
 * Filename: types.ts
 * Path: /types/types.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 20, 2023
 *
 */

import { Dispatch, SetStateAction } from 'react'
import { SimpleIcon } from 'simple-icons'

// Metadata
export type MetadataType = {
  title: string
  description: string
  keywords: string[]
  icons: object
  generator: string
  applicationName: string
  referrer: string
  authors: object[]
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

// Shild Context Value
export type ShieldContextValueType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
  options: OptionsType
  setOptions: Dispatch<SetStateAction<OptionsType>>
  shield: string
  setShield: Dispatch<SetStateAction<string>>
  selectedIcon: object
  setSelectedIcon: Dispatch<SetStateAction<SimpleIcon>>
  icons: object
}

// Options
export type OptionsType = {
  title: string | null
  svg: string | null
  hex: string | null
  license: string | null | undefined | object
  guidelines: string | null
  path: string | null
  source: string | null
  slug: string | null
  labelColor: string | null
  logoColor: string | null
  logoWidth: number | string
  style: string
}

export type ShieldTypeOptionsType = string[]

export type shieldLabelColorsType = string[]
