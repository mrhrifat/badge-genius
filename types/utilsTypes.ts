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
import { SimpleIcon } from 'simple-icons/types'

// Metadata
export type MetadataType = {
  title: string
  viewport: object
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
  stylesheet: string
}

// Shild Context Value
export type ShieldContextValueType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
  options: object
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
  license: string | null
  guidelines: string | null
  path: string | null
  source: string | null
  slug: string | null
  labelColor: string | null
  logoColor: string | null
  logoWidth: number
  style: string
}

export type ShieldTypeOptionsType = string[]

export type shieldLabelColorsType = string[]

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

// ComponentType<SvgIconProps>

// Footer Icon Type
export type FooterIconType = { id: number; title: string; icon: string }
// Footer Icons Type
export type FooterIconsType = FooterIconType[]

// Simple Icons
export type SimpleIconsType = {
  title: string
  slug: string
  hex: string
  source: string
  svg: string
  path: string
  guidelines: string
  license: {
    type: string
    url: string
  }
}
