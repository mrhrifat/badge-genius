import { ChangeEvent } from 'react'

// Toggle Key Option
export type ToggleKeyOptionType = {
  id: number
  value: string
  title: string
}

// Toggle Key Options
export type ToggleKeyOptionsType = ToggleKeyOptionType[]

// Toggle Key Types
export interface ToggleKeyType {
  value: string | undefined
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<unknown>, value: string) => void
  options: ToggleKeyOptionsType
}
