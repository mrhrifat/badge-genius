/**
 * Title: page
 * Description:
 * Filename: page.tsx
 * Path: /app/page.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Oct 26, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */

import { CssBaseline } from '@mui/material'
import ReactGA from 'react-ga4'
import Root from './Root'
import ThemeProviders from './utils/ThemeProviders'

export default function Home() {
  // Google Analytics
  // eslint-disable-next-line no-undef
  ReactGA.initialize(`${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`)
  return (
    <ThemeProviders>
      <CssBaseline />
      <Root />
    </ThemeProviders>
  )
}
