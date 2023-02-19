/**
 * Title: data
 * Description:
 * Filename: data.ts
 * Path: /utils/data.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 17, 2023
 *
 */

import {
  metadataInterface,
  shieldContextDataInterface,
} from '@/interfaces/utilsInterface'

// Metadata
export const metadata: metadataInterface = {
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
  ],
  icons: {
    icon: '/favicon.ico',
  },
}

// Shield Context Data
export const shieldContextData: shieldContextDataInterface = {
  theme: 'light',
  icons: {},
  options: {},
  selectedIcon: {},
  generateShield: '',
}
