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
  const loading = '...'

  if (options && title) {
    if (title === 'Shield Label') return options?.title

    if (
      options.hex === null ||
      options.labelColor === null ||
      options.logoColor === null
    ) {
      return loading
    } else {
      if (title === 'Shield Color') return ColorPalette(options.hex)
      if (title === 'Label Color') return ColorPalette(options?.labelColor)
      if (title === 'Logo Color') return ColorPalette(options?.logoColor)
    }
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

export const svgStringToNode = (svgString: string): Node => {
  const parser = new DOMParser()
  const svg = parser.parseFromString(svgString, 'image/svg+xml').documentElement
  return svg
}

// SVG to PNG Converter
export const svgToPngConverter = (svg: Node, title: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgDataBase64 = btoa(unescape(encodeURIComponent(svgData)))
    const svgDataUrl = `data:image/svg+xml;charset=utf-8;base64,${svgDataBase64}`

    const image = new Image()

    image.addEventListener('load', () => {
      const width = '200'
      const height = '200'
      const canvas = document.createElement('canvas')

      canvas.setAttribute('width', width)
      canvas.setAttribute('height', height)

      const context = canvas.getContext('2d')
      if (!context) {
        reject(new Error('Failed to create canvas context'))
        return
      }

      context.drawImage(image, 0, 0, Number(width), Number(height))

      const a = document.createElement('a')
      a.setAttribute('download', `${title}.png`)
      a.setAttribute('href', canvas.toDataURL('image/png'))
      a.click()

      resolve()
    })

    image.addEventListener('error', () => {
      reject(new Error('Failed to load image'))
    })

    image.src = svgDataUrl
  })
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
