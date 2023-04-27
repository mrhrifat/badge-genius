/**
 * Title: fonts
 * Description:
 * Filename: fonts.ts
 * Path: /utils/fonts.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 17, 2023
 *
 */

import { Dosis } from '@next/font/google'

// TODO: interface/type later
export const dosis = Dosis({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
