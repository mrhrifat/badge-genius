'use client'

import { dosis } from '@/utils/fonts'
import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F6F7FA',
    },
    primary: {
      main: '#22A6B3',
    },
  },
  typography: {
    fontFamily: dosis.style.fontFamily,
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0F172A',
    },
    primary: {
      main: '#38BDF8',
    },
  },
  typography: {
    fontFamily: dosis.style.fontFamily,
  },
})

