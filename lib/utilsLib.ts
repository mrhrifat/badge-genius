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
import { renderWebsite } from '@/components/utils/FilterValue'
import {
  HandleWhiteSpaceInterface,
  OptionRenderInterface,
  SimpleIconsInterface,
} from '@/interfaces/utilsInterfaces'
import { GenerateShieldType, OptionsType } from '@/types/utilsTypes'
import {
  subCategoryBadge,
  subCategoryBuild,
  subCategoryFunding,
  subCategorySocial,
} from '@/utils/data'
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

// https://img.shields.io/github/sponsors/mrhrifat?style=plastic
// Generate Shield
export const generateShield: GenerateShieldType = (
  value: OptionsType,
  setShield: Dispatch<SetStateAction<string>>
) => {
  if (value && setShield) {
    const URL = `https://img.shields.io/${
      value.category === 'Badge' ? 'badge' : 'github'
    }/${handleWhiteSpace(value?.title)}-${
      value.hex
    }?style=${shieldTypeOptionToReal(value.style)}&logo=${handleWhiteSpace(
      value.title
    )}&logoColor=${value.logoColor}${
      value.logoWidth !== 14 ? `&logoWidth=${value.logoWidth}` : ''
    }${value.labelColor !== value.hex ? `&labelColor=${value.labelColor}` : ''}`

    setShield(URL.replaceAll(' ', ''))
  }
  return false
}

// Reset To Default
export const resetDefault = (
  value: OptionsType,
  setShield: Dispatch<SetStateAction<string>>
) => {
  value.title = ''
  value.svg = ''
  value.hex = 'FFFFFF'
  value.license = ''
  value.guidelines = ''
  value.path = ''
  value.source = ''
  value.slug = ''
  value.labelColor = 'FFFFFF'
  value.logoColor = 'FFFFFF'
  value.logoWidth = 14
  value.style = 'For The Badge'
  value.category = 'Badge'

  setShield('')
}

// Regex to Options Style
export const paintOptionStyle = (arr: string[]): string[] => {
  const regex = /-/g
  return arr.map((i) => i.replace(regex, ''))
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
    if (title === 'Shield Label') return options?.title
    if (title === 'Shield Category') return options?.category
    if (title === 'Sub Category')
      return options?.subCategory.length >= 25
        ? options?.subCategory.substring(0, 25) + '...'
        : options?.subCategory
    if (title === 'Shield Color') return ColorPalette(options.hex)
    if (title === 'Label Color') return ColorPalette(options?.labelColor)
    if (title === 'Logo Color') return ColorPalette(options?.logoColor)
    if (title === 'Shield Style') return options?.style
    if (title === 'Logo Width') return options?.logoWidth
    if (title === 'Website') return renderWebsite(options?.source)
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

// Convert String Image Data to React Node
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

// PNG Image Processing
export const imageProcessing = (
  value: string | null | undefined,
  title: string | null | undefined
) => {
  if (value && title) {
    const svgNode = svgStringToNode(value)
    svgToPngConverter(svgNode, title)
  }
  return false
}
// Sheild Type Option Convert To Real Value
export const shieldTypeOptionToReal = (type: string) => {
  switch (type) {
    case 'Flat':
      return 'flat'
    case 'Flat Square':
      return 'flat-squre'
    case 'For The Badge':
      return 'for-the-badge'
    case 'Plastic':
      return 'plastic'
    case 'Social':
      return 'social'
    default:
      return 'for-the-badge'
  }
}

// Shield Sub Category Options
export const shieldSubCategoryOptions = (category: string | undefined) => {
  switch (category) {
    case 'Badge':
      return subCategoryBadge
    case 'Build':
      return subCategoryBuild
    case 'Social':
      return subCategorySocial
    case 'Funding':
      return subCategoryFunding
    default:
      return subCategoryBadge
  }
}

// Shield Sub Category State
export const shieldSubCategoryState = (category: string | undefined) => {
  switch (category) {
    case 'Badge':
      return 'None'
    case 'Build':
      return 'AppVeyor'
    case 'Social':
      return 'GitHub Gist Stars'
    case 'Funding':
      return 'Bountysource'
    default:
      return 'None'
  }
}
