/**
 * Title: data
 * Description:
 * Filename: data.ts
 * Path: /utils/data.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 17, 2023
 *
 */
'use client'

import {
  HeaderIconsType,
  MetadataType,
  OptionsType,
  shieldLabelColorsType,
  ShieldTypeOptionsType,
} from '@/types/utilsTypes'

export const metaData: MetadataType = {
  title: 'Shield Icons',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  description:
    'Build & Download 2401 popular brands Badge, SVG, Hex Code & so on Shield Icons to use in GitHub Markdown or Any Web Pages',
  keywords: [
    'Shield Icons',
    'Simple Icons',
    'Simple',
    'Icons',
    'Brands',
    'SVG',
    'Hex',
    'Code',
    'Sheild',
    'Simple',
    'Webpage',
    'Github',
    'Markdown',
    'Github Profile Readme',
    'Readme',
    'Icons',
    'Icon',
    'Github page',
    'Github pages',
    'Readme Profile',
    'Next.js',
    'React',
    'JavaScript',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  generator: 'Next.js',
  applicationName: 'Shield Icons',
  referrer: 'origin-when-crossorigin',
  authors: [{ name: 'Mrh Rifat' }],
  themeColor: 'Light Blye',
  colorScheme: 'light',
  creator: 'Mrh Rifat',
  publisher: 'Mrh Rifat',
}

// // Option Object
export const optionsdata: OptionsType = {
  title: null,
  svg: null,
  hex: null,
  license: null,
  guidelines: null,
  path: null,
  source: null,
  slug: null,
  labelColor: 'ffffff',
  logoColor: 'ffffff',
  logoWidth: 14,
  style: 'for-the-badge',
}

// Footer Icons Data
export const footerIcons = {
  id: 0,
  title: 'GitHub',
  icon: 'github',
}

// Header Icons Data
export const headerIcons: HeaderIconsType = [
  {
    id: 0,
    title: 'GitHub',
    icon: 'github',
    url: 'https://github.com/mrhrifat/shield-icons',
  },
  {
    id: 1,
    title: 'Star',
    icon: 'starborder',
    url: 'https://github.com/mrhrifat/shield-icons',
  },
  {
    id: 2,
    title: 'License',
    icon: 'gavel',
    url: 'https://github.com/mrhrifat/shield-icons/blob/master/LICENSE.md',
  },
  {
    id: 3,
    title: '3rd Party Extension',
    icon: 'extension',
    url: '',
    item: [
      { id: 0, itemTitle: 'Simple Icons' },
      { id: 1, itemTitle: 'Sheild IO' },
    ],
  },
]

// // Options
export const shieldTypeOptions: ShieldTypeOptionsType = [
  'plastic',
  'flat',
  'flat-square',
  'for-the-badge',
  'social',
]
export const shieldLabelColors: shieldLabelColorsType = [
  '2980b9',
  '2c3e50',
  'd35400',
  'bdc3c7',
  '000000',
  'ffffff',
]
