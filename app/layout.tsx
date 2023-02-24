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

import { dosis } from '@/utils/fonts'
import Script from 'next/script'
import React from 'react'
Script
// Metadata
export const metadata = {
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
  stylesheet: 'https://fonts.googleapis.com/icon?family=Material+Icons',
}

// Root
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dosis.className}>
      <body>{children}</body>
    </html>
  )
}
