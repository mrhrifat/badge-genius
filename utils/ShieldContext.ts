import { shieldContextType } from '@/types/utilsType'
import React from 'react'
import { shieldContextData } from './data'

const SheildContext: shieldContextType = React.createContext(shieldContextData)

export default SheildContext
