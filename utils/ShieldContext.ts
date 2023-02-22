/**
* Title: ShieldContext
* Description:
* Filename: ShieldContext.ts
* Path: /utils/ShieldContext.ts
* Author: Mrh Rifat (Programmer)
* Date: Feb 22, 2023
*
*/

import { ShieldContextValueType } from '@/types/utilsTypes'
import { createContext } from 'react'

const ShieldContext = createContext<ShieldContextValueType | null>(null)

export default ShieldContext
