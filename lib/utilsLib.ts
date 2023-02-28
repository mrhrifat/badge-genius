/**
 * Title: utilsLib
 * Description:
 * Filename: utilsLib.ts
 * Path: /lib/utilsLib.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import ColorPalette from '@/components/dynamic/ColorPalette'
import {
  HandleWhiteSpaceInterface,
  OptionRenderInterface,
  SimpleIconsInterface,
} from '@/interfaces/utilsInterfaces'
import { OptionsType } from '@/types/utilsTypes'
import { Dispatch, SetStateAction } from 'react'

// OptionRender
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const optionRender: OptionRenderInterface = (value: any) =>
  Object.keys(value).map((item) => item.slice(2))

// Handle White Space
export const handleWhiteSpace: HandleWhiteSpaceInterface = (
  value: string | null
) => {
  if (value) {
    const title = new RegExp(/\s|-/g)
    const replaceTitle = value?.replace(title, '%20')
    return replaceTitle
  }
  return false
}

// Generate Shield
export const generateShield = (
  value: OptionsType | undefined,
  setShield: Dispatch<SetStateAction<string>> | undefined
) => {
  if (value && setShield) {
    const URL = `https://img.shields.io/badge/${handleWhiteSpace(
      value?.title
    )}-${value.hex}?style=${value.style}&logo=${handleWhiteSpace(
      value.title
    )}&logoColor=${value.logoColor}${
      value.logoWidth !== 14 ? `&logoWidth=${value.logoWidth}` : ''
    }${value.labelColor !== value.hex ? `&labelColor=${value.labelColor}` : ''}`

    setShield(URL.replaceAll(' ', ''))
  }
  return false
}

// Generate Logo Width
export const generateOptionsLogoWidth = (): number[] => {
  const logoWidth: number[] = []
  for (let i = 1; i <= 50; i += 1) {
    logoWidth.push(i)
  }
  return logoWidth
}

// Push Hex to Label Color
export const updateLabelColor = (labelColors: string[], hex: string) => {
  if (labelColors.includes(hex)) return labelColors
  if (!labelColors.includes(hex)) return labelColors.push(hex)

  return false
}

// Shield List value
export const shieldListValue = (
  options: OptionsType | undefined,
  title: string
) => {
  if (options && title) {
    const text = 'Not ready yet'
    if (title === 'Shield Label') return options?.title
    if (title === 'Shield Color')
      return ColorPalette(options.hex === null ? text : options?.hex)
    if (title === 'Label Color')
      return ColorPalette(
        options?.labelColor === null ? text : options?.labelColor
      )
    if (title === 'Logo Color')
      return ColorPalette(
        options?.logoColor === null ? text : options?.logoColor
      )
    if (title === 'Shield Style') return options?.style
    if (title === 'Shield Width') return options?.logoWidth
    if (title === 'Website') return options?.source
    if (title === 'License') return options?.license
    if (title === 'Guidelines') return options?.guidelines
  }
  return false
}

// Regex of URL Check
export const regex =
  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/g

// Generate Simple Icons
export const generateSimpleIcon = (
  event: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icons: any
): SimpleIconsInterface => {
  const prefix = 'si'
  return icons[`${prefix}${event}`]
}

// Download SVG
export const triggerDownload = (imgURL: string, fileName: string) => {
  const a = document.createElement('a')

  a.setAttribute('download', `${fileName}.svg`)
  a.setAttribute('href', imgURL)
  a.setAttribute('target', '_blank')
  a.click()
}

// // Colusion of Color
// export const colorColusion = (options, labelColors, setOptions) => {
//   if (options.labelColor === 'ffffff') {
//     return setOptions({ ...options, logoColor: '000000' })
//   }
//   return false
// }

// Handle Empty Field Search Icon
// export const emptyAlert = (value) => {
//   if (value === null) return value
//   if (value === undefined) {
//     return (
//       <Alert severity="error">This is an error alert — check it out!</Alert>
//     )
//   }
//   return value
// }

// // Download Icons on SVG
// export const downloadSvgImg = (svgData) => {
//   const data = new XMLSerializer().serializeToString(svgData)
//   const svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' })
//   const url = URL.createObjectURL(svgBlob)

//   triggerDownload(url)
// }
