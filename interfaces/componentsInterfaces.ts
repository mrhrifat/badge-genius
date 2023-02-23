/**
 * Title: componentsInterfaces
 * Description:
 * Filename: componentsInterfaces.ts
 * Path: /interfaces/componentsInterfaces.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { ToggleKeyOptionsType } from '@/types/componentsTypes'
import { ChangeEvent } from 'react'

// Toggle Key Types
export interface ToggleKeyInterface {
  value: string | undefined
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<unknown>, value: string) => void
  options: ToggleKeyOptionsType
}
