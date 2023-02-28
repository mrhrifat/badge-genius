/**
 * Title: page
 * Description:
 * Filename: page.tsx
 * Path: /app/page.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

'use client'

import Root from '@/components/Root'
import { darkTheme, lightTheme } from '@/themes/theme'
import { optionsdata } from '@/utils/data'
import { emotionCache } from '@/utils/emotionCache'
import ShieldContext from '@/utils/ShieldContext'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import * as icons from 'simple-icons'

export default function Home() {
  const [theme, setTheme] = useState('light')
  const [options, setOptions] = useState(optionsdata)
  const [shield, setShield] = useState('')
  const [selectedIcon, setSelectedIcon] = useState(icons.si1password)

  return (
    <ShieldContext.Provider
      value={{
        theme,
        setTheme,
        options,
        setOptions,
        shield,
        setShield,
        selectedIcon,
        setSelectedIcon,
        icons,
      }}>
      <ShieldContext.Consumer>
        {() => (
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <CssBaseline />
              <Root />
            </ThemeProvider>
          </CacheProvider>
        )}
      </ShieldContext.Consumer>
    </ShieldContext.Provider>
  )
}
