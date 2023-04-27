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
import {
  GenerateShieldType,
  OptionsType,
  SubCategoryArgsType,
} from '@/types/utilsTypes'
import {
  activitySubCategory,
  analysisSubCategory,
  chatSubCategory,
  codeCoverageSubCategory,
  dependenciesSubCategory,
  downloadSubCategory,
  issueTrackingSubCategory,
  licenseSubCategory,
  monitoringSubCategory,
  othersSubCategory,
  platformVersionSupportSubCategory,
  ratingSubCategory,
  sizeSubCategory,
  subCategoryBadge,
  subCategoryBuild,
  subCategoryFunding,
  subCategorySocial,
  testResultSubCategory,
  versionSubCategory,
} from '@/utils/data'
import { Dispatch, SetStateAction } from 'react'

// OptionRender
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const optionRender: OptionRenderInterface = (value: any) =>
  Object.keys(value).map((item) => item.slice(2))

// Handle White Space
export const whiteSpace: HandleWhiteSpaceInterface = (value: string | null) => {
  if (value) {
    const title = new RegExp(/\s|-/g)
    const replaceTitle = value?.replace(title, '%20')
    return replaceTitle
  }
  return false
}

// Generate Social Category Link
export const genSocialCategory = (
  category: string | undefined,
  subCategoryArgs: SubCategoryArgsType | undefined
) => {
  if (category && subCategoryArgs) {
    switch (category) {
      case 'GitHub Gist Stars':
        return `github/gist/stars/${subCategoryArgs.gistId}`
      case 'GitHub Followers':
        return `github/followers/${subCategoryArgs.username}`
      case 'GitHub Forks':
        return `github/forks/${subCategoryArgs.username}/${subCategoryArgs.repo}`
      case 'GitHub Repo Stars':
        return `github/stars/${subCategoryArgs.username}/${subCategoryArgs.repo}`
      case 'GitHub User Stars':
        return `github/stars/${subCategoryArgs.username}`
      case "GitHub Org's Stars":
        return `github/stars/${subCategoryArgs.org}`
      case 'GitHub Watchers':
        return `github/watchers/${subCategoryArgs.username}/${subCategoryArgs.repo}`
      case 'GitLab Forks':
        return `gitlab/forks/${subCategoryArgs.project}+?gitlab_url=https%3A%2F%2Fgitlab.com`
      case 'GitLab Stars':
        return `gitlab/stars/${subCategoryArgs.project}+?gitlab_url=https%3A%2F%2Fgitlab.com`
      case 'HackerNews User Karma':
        return `hackernews/user-karma/${subCategoryArgs.id}`
      case 'Keybase BTC':
        return `keybase/btc/${subCategoryArgs.id}`
      case 'Keybase PGP':
        return `keybase/pgp/${subCategoryArgs.id}`
      case 'Keybase XLM':
        return `keybase/xlm/${subCategoryArgs.id}`
      case 'Keybase ZEC':
        return `keybase/zec/${subCategoryArgs.id}`
      case 'Mastodon Follow':
        return `mastodon/follow/${subCategoryArgs.id}?domain=https%3A%2F%2Fmastodon.social`
      case 'Modrinth Followers':
        return `modrinth/followers/:projectId`
      case 'Subreddit Subscribers':
        return `reddit/subreddit-subscribers/:subreddit`
      case 'Reddit User Karma':
        return `reddit/user-karma/:variant/:user`
      case 'Twitch Status':
        return `twitch/status/:user?style=social`
      case 'Twitter URL':
        return `twitter/url?url=https%3A%2F%2Fshields.io`
      case 'Twitter Follow':
        return `twitter/follow/${subCategoryArgs.username}?label=Follow`
      case 'YouTube Channel Views':
        return `youtube/channel/views/:channelId`
      case 'YouTube Video Comments':
        return `youtube/comments/:videoId`
      case 'YouTube Video Likes':
        return `youtube/likes/:videoId`
      case 'YouTube Channel Subscribers':
        return `youtube/channel/subscribers/:channelId`
      case 'YouTube Video Views':
        return `youtube/views/:videoId`
    }
  }
}

// https://img.shields.io/github/sponsors/mrhrifat?style=plastic

// https://img.shields.io/github/followers/espadrine?logo=github&style=for-the-badge

// https://img.shields.io/github/followers/mrhrifat?GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=FFFFFF&logoWidth=14

// https://img.shields.io/badge/Coinbase-0052FF?style=for-the-badge&logo=Coinbase&logoColor=white?labelColor=abcdef

// Generate Shield
export const generateShield: GenerateShieldType = (
  value: OptionsType,
  setShield: Dispatch<SetStateAction<string>>
) => {
  if (value && setShield) {
    const baseUrl = `https://img.shields.io`
    const logoTitle = whiteSpace(value.title)
    const logoWidth = value.logoWidth !== 14 ? value.logoWidth : 14
    const subCategory = genSocialCategory(
      value.subCategory,
      value.subCategoryArgs
    )
    const category = categoryConversion(value.category)
    const style = shieldTypeOptionToReal(value.style)
    const hex = value.hex

    const URL = `${baseUrl}/${categoryPath(
      category,
      logoTitle,
      hex,
      subCategory
    )}?style=${style}&logo=${logoTitle}&logoColor=${
      value.logoColor
    }&logoWidth=${logoWidth}${
      value.labelColor !== value.hex ? `&labelColor=${value.labelColor}` : ''
    }`

    // return to sheild
    setShield(URL.replaceAll(' ', ''))
  }
  return false
}

export const categoryPath = (
  category: string | undefined,
  logoTitle: string | false,
  hex: string,
  subCategory: string | undefined
) => {
  if (category === 'badge') {
    return `badge/${logoTitle}-${hex}`
  } else if (category !== 'badge') {
    return subCategory
  } else {
    return ''
  }
}

// // Generate Shield
// export const generateShield: GenerateShieldType = (
//   value: OptionsType,
//   setShield: Dispatch<SetStateAction<string>>
// ) => {
//   if (value && setShield) {
//     const URL = `https://img.shields.io${genSocialCategory(
//       value.subCategory
//     )}/${whiteSpace(value?.title)}-${
//       value.hex
//     }?style=${shieldTypeOptionToReal(value.style)}&logo=${whiteSpace(
//       value.title
//     )}&logoColor=${value.logoColor}${
//       value.logoWidth !== 14 ? `&logoWidth=${value.logoWidth}` : ''
//     }${value.labelColor !== value.hex ? `&labelColor=${value.labelColor}` : ''}`

//     setShield(URL.replaceAll(' ', ''))
//   }
//   return false
// }

// Category conversion
export const categoryConversion = (value: string) => {
  switch (value) {
    case 'Activity':
      return 'activity'
    case 'Analysis':
      return 'analysis'
    case 'Badge':
      return 'badge'
    case 'Build':
      return 'build'
    case 'Code Coverage':
      return 'codecoverage'
    case 'Chat':
      return 'Chat'
    case 'Dependencies':
      return 'dependencies'
    case 'Downloads':
      return 'downloads'
    case 'Funding':
      return 'funding'
    case 'Test Results':
      return 'test Results'
    case 'Issue Tracking':
      return 'issuetracking'
    case 'License':
      return 'license'
    case 'Monitoring':
      return 'monitoring'
    case 'Platform & Version Support':
      return 'platform&versionsupport'
    case 'Rating':
      return 'rating'
    case 'Size':
      return 'size'
    case 'Social':
      return 'social'
    case 'Version':
      return 'version'
  }
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
    if (title === 'Website')
      return renderWebsite(
        options?.source.length === 0
          ? 'https://github.com/mrhrifat'
          : options.source
      )
    if (title === 'License') return options?.license
    if (title === 'Guidelines') return options?.guidelines
  }
  return false
}

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
    case 'Activity':
      return activitySubCategory
    case 'Analysis':
      return analysisSubCategory
    case 'Badge':
      return subCategoryBadge
    case 'Build':
      return subCategoryBuild
    case 'Code Coverage':
      return codeCoverageSubCategory
    case 'Chat':
      return chatSubCategory
    case 'Dependencies':
      return dependenciesSubCategory
    case 'Downloads':
      return downloadSubCategory
    case 'Funding':
      return subCategoryFunding
    case 'Test Results':
      return testResultSubCategory
    case 'Issue Tracking':
      return issueTrackingSubCategory
    case 'License':
      return licenseSubCategory
    case 'Monitoring':
      return monitoringSubCategory
    case 'Others':
      return othersSubCategory
    case 'Platform & Version Support':
      return platformVersionSupportSubCategory
    case 'Rating':
      return ratingSubCategory
    case 'Size':
      return sizeSubCategory
    case 'Social':
      return subCategorySocial
    case 'Version':
      return versionSubCategory
    default:
      return subCategoryBadge
  }
}

// Shield Sub Category State
export const shieldSubCategoryState = (category: string | undefined) => {
  switch (category) {
    case 'Activity':
    case 'Analysis':
    case 'Badge':
    case 'Build':
    case 'Code Coverage':
    case 'Chat':
    case 'Dependencies':
    case 'Downloads':
    case 'Funding':
    case 'Test Results':
    case 'Issue Tracking':
    case 'License':
    case 'Monitoring':
    case 'Others':
    case 'Platform & Version Support':
    case 'Rating':
    case 'Size':
    case 'Social':
    case 'Version':
      return 'Select One'
    default:
      return 'Select One'
  }
}
