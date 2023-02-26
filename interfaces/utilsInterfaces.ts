// /**

// Option Render (Simple Icon)
export interface OptionRenderInterface {
  // eslint-disable-next-line no-unused-vars
  (value: object | undefined): string[]
}

// Simple Icons
export interface SimpleIconsInterface {
  title: string
  slug: string
  hex: string
  source: string
  svg: string
  path: string
  guidelines: string
  license?:
    | string
    | null
    | {
        type: string
        url: string
      }
    | undefined
}
