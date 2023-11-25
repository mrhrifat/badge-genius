/**
 * Title: ShieldContext
 * Description:
 * Filename: ShieldContext.ts
 * Path: /utils/ShieldContext.ts
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */
'use client'

import { BadgeContextType } from '@/types/utilsTypes'
import { ReactNode, createContext, useContext, useState } from 'react'
import * as icons from 'simple-icons'
import { optionsdata } from './data'

export const defaultValue = {
  theme: 'dark',
  setTheme: (): string => 'light',
  options: optionsdata,
  setOptions: () => {},
  badge: '',
  setBadge: (): string => '',
  icons: icons,
}
const Context = createContext<BadgeContextType>(defaultValue)

const BadgeContext = ({ children }: { children: ReactNode }) => {
  // State Declaration for Context API
  const [theme, setTheme] = useState('dark')
  const [options, setOptions] = useState(optionsdata)
  const [badge, setBadge] = useState('')

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        options,
        setOptions,
        badge,
        setBadge,
        icons,
      }}>
      {children}
    </Context.Provider>
  )
}

export default BadgeContext

// eslint-disable-next-line react-hooks/rules-of-hooks
export const badgeContext = () => useContext(Context)
