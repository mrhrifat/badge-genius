import { dosis, roboto } from '@/utils/fonts'
import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F8F9FA',
    },
    primary: {
      main: '#22A6B3',
    },
  },
  typography: {
    fontFamily: [dosis.style.fontFamily, roboto.style.fontFamily].join(''),
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    primary: {
      main: '#90CAF9',
    },
  },
  typography: {
    fontFamily: [dosis.style.fontFamily, roboto.style.fontFamily].join(''),
  },
})