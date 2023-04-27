/* eslint-disable no-undef */
import {
  categoryConversion,
  generateOptionsLogoWidth,
  optionRender,
  shieldSubCategoryOptions,
  shieldSubCategoryState,
  shieldTypeOptionToReal,
  updateLabelColor,
  whiteSpace,
} from '@/lib/utilsLib'
import { activitySubCategory, labelColors } from '@/utils/data'
import { si1password, siFacebook } from 'simple-icons'

// Unit Testing
describe('Unit Testing', () => {
  test('Option Render', () => {
    const obj = { si1password, siFacebook }
    expect(optionRender(obj)).toStrictEqual(['1password', 'Facebook'])
  })

  test('Remove white space & add %20', () => {
    expect(whiteSpace('Facebook Live')).toBe('Facebook%20Live')
  })

  test('Category will return from capitalize to lowercase', () => {
    expect(categoryConversion('Analysis')).toBe('analysis')
  })

  test('Generate 1 - 50 for Option Logo Width', () => {
    expect(generateOptionsLogoWidth()).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ])
  })

  test('Shield Type Option To Real', () => {
    expect(shieldTypeOptionToReal('Flat')).toBe('flat')
  })

  test('Sheild Sub Category State', () => {
    expect(shieldSubCategoryState('Activity')).toBe('Select One')
  })

  test('Shield Sub Category Options', () => {
    expect(shieldSubCategoryOptions('Activity')).toBe(activitySubCategory)
  })

  test('Svg String To Node', () => {
    const svg =
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>42</title><path d="M24 12.42l-4.428 4.415H24zm-4.428-4.417l-4.414 4.418v4.414h4.414V12.42L24 8.003V3.575h-4.428zm-4.414 0l4.414-4.428h-4.414zM0 15.996h8.842v4.43h4.412V12.42H4.428l8.826-8.846H8.842L0 12.421z"/></svg>'

    expect(svg).toBe(svg)
  })
})

// Integration Testing
describe('Integration Testing', () => {
  test('Update Label Color', () => {
    expect(updateLabelColor(labelColors, '#4FE6AE')).toStrictEqual(7)
  })
})
