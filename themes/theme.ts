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

export const homeGridStyle = {
  border: '1px solid #EEE',
  padding: 1.5,
  borderRadius: 2,
  boxShadow: '0 20px 27px 0 rgb(0 0 0 / 5%)',
}
