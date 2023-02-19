'use client'

import Root from '@/components/Root'
import { lightTheme } from '@/themes/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

export default function Home() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Root text="Page > Root" />
    </ThemeProvider>
  )
}
