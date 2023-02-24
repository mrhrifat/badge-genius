/**
 * Title: utilsLib
 * Description:
 * Filename: utilsLib.ts
 * Path: /lib/utilsLib.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { OptionRenderInterface } from '@/interfaces/utilsInterfaces'

// Options Render (Simple Icon)
export const optionRender: OptionRenderInterface = (value) =>
  Object.keys(value).map((item) => item.slice(2))
