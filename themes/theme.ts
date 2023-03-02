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
      default: '#0F172A',
    },
    primary: {
      main: '#38BDF8',
    },
  },
  typography: {
    fontFamily: [dosis.style.fontFamily, roboto.style.fontFamily].join(''),
  },
})

export const homeGridStyle = {
  border: '1px solid #EEE',
  padding: 3,
  borderRadius: 3,
  boxShadow: '0 20px 27px 0 rgb(0 0 0 / 5%)',
}
