/**
 * Title: fonts
 * Description:
 * Filename: fonts.ts
 * Path: /utils/fonts.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 17, 2023
 *
 */

import { Dosis, Roboto } from '@next/font/google'

// TODO: interface/type later
export const dosis = Dosis({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
})
