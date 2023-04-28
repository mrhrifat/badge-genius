/**
 * Title: layout
 * Description: Root file to render
 * Filename: layout.tsx
 * Path: /app/layout.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 17, 2023
 *
 */

import '@/styles/globals.css'
import { MetadataType } from '@/types/utilsTypes'
import { dosis } from '@/utils/fonts'
import { ReactNode } from 'react'

// Metadata Data
export const metadata: MetadataType = {
  title: 'Badge Genius',
  description:
    'Build & Download 2441 popular brands Badge, SVG, Hex Code & so on Badge Genius to use in GitHub Markdown or Any Web Pages',
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
    'Badge Genius',
    'Badge',
    'Genius',
  ],
  icons: {
    icon: 'img/logo.png',
    shortcut: 'img/logo.png',
    apple: 'img/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'img/logo.png',
    },
  },
  generator: 'Next.js',
  applicationName: 'Badge Genius',
  referrer: 'origin-when-crossorigin',
  author: 'Mrh Rifat',
  copyright: 'Copyright Mrh Rifat - Badge Genius',
  distribution: 'Global',
  coverage: 'Worldwide',
  rating: 'General',
  owner: 'Mrh Rifat',
  themeColor: 'Light Blye',
  colorScheme: 'light',
  creator: 'Mrh Rifat',
  publisher: 'Mrh Rifat',
}

// Root
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={dosis.className}>
      <head>
        <link rel="manifest" href="manifest.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}
