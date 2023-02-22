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
