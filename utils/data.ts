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

import { FooterIconType, HeaderIconsType } from '@/types/componentsTypes'
import {
  MetadataType,
  OptionsType,
  ShieldCategoriesType,
  ShieldLabelColorsType,
  ShieldListsShieldPropsType,
  ShieldTypeOptionsType,
} from '@/types/utilsTypes'

// layout - Metadata Data
export const metaData: MetadataType = {
  title: 'Shield Icons',
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
  author: 'Mrh Rifat',
  authors: [
    { name: 'Mrh Rifat' },
    { name: 'Rifat' },
    { name: 'Rakibul Hassan Rifat' },
  ],
  copyright: 'Copyright Mrh Rifat - Shield Icons',
  distribution: 'Global',
  coverage: 'Worldwide',
  rating: 'General',
  owner: 'Mrh Rifat',
  themeColor: 'Light Blye',
  colorScheme: 'light',
  creator: 'Mrh Rifat',
  publisher: 'Mrh Rifat',
}

// page - Options Data
export const optionsdata: OptionsType = {
  title: '',
  svg: '',
  hex: '',
  license: '',
  guidelines: '',
  path: '',
  source: '',
  slug: '',
  labelColor: 'ffffff',
  logoColor: 'ffffff',
  logoWidth: 14,
  style: 'for-the-badge',
}

// Footer - Footer Icons Data
export const footerIcons: FooterIconType = {
  id: 0,
  title: 'GitHub',
  icon: 'github',
}

// Header - Header Icons Data
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

// ShieldOptions - ShieldCategories
export const shieldCategories: ShieldCategoriesType = [
  {
    id: 0,
    title: 'Build',
  },
  {
    id: 1,
    title: 'Code Coverage',
  },
  {
    id: 2,
    title: 'Test Results',
  },
  {
    id: 3,
    title: 'Analysis',
  },
  {
    id: 4,
    title: 'Chat',
  },
  {
    id: 5,
    title: 'Dependencies',
  },
  {
    id: 6,
    title: 'Size',
  },
  {
    id: 7,
    title: 'Downloads',
  },
  {
    id: 8,
    title: 'Funding',
  },
  {
    id: 9,
    title: 'Issue Tracking',
  },
  {
    id: 10,
    title: 'License',
  },
  {
    id: 11,
    title: 'Rating',
  },
  {
    id: 12,
    title: 'Social',
  },
  {
    id: 13,
    title: 'Version',
  },
  {
    id: 14,
    title: 'Platform & Version Support',
  },
  {
    id: 15,
    title: 'Monitoring',
  },
  {
    id: 16,
    title: 'Activity',
  },
  {
    id: 17,
    title: 'Other',
  },
]

// ShieldTypeOptions
export const shieldTypeOptions: ShieldTypeOptionsType = [
  'plastic',
  'flat',
  'flat-square',
  'for-the-badge',
  'social',
]

// LableColors
export const labelColors: ShieldLabelColorsType = [
  '2980b9',
  '2c3e50',
  'd35400',
  'bdc3c7',
  '000000',
  'ffffff',
]

// ShieldLists
export const shieldLists: ShieldListsShieldPropsType = [
  {
    id: 1,
    title: 'Shield Label',
    icon: 'title',
  },
  {
    id: 2,
    title: 'Shield Color',
    icon: 'palette',
  },
  {
    id: 3,
    title: 'Label Color',
    icon: 'format-color-text',
  },
  {
    id: 4,
    title: 'Logo Color',
    icon: 'format-color-flat',
  },
  {
    id: 5,
    title: 'Shield Style',
    icon: 'style',
  },
  {
    id: 6,
    title: 'Shield Width',
    icon: 'aspect-ratio',
  },
  {
    id: 7,
    title: 'Website',
    icon: 'language',
  },
  {
    id: 8,
    title: 'License',
    icon: 'policy',
  },
  {
    id: 9,
    title: 'Guidelines',
    icon: 'gavel',
  },
]
