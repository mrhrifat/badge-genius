/**
 * Title: layout
 * Description: Root file to render
 * Filename: layout.tsx
 * Path: /app/layout.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 17, 2023
 *
 */

import { metadataInterface } from '@/interfaces/utilsInterface'
import '@/styles/globals.css'
import { metadata as Metadata } from '@/utils/data'
import { dosis } from '@/utils/fonts'
import Head from 'next/head'
import React from 'react'

// Metadata
export const metadata: metadataInterface = Metadata

// Root
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dosis.className}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>{children}</body>
    </html>
  )
}
