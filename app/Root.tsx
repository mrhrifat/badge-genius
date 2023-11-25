/**
 * Title: Root
 * Description:
 * Filename: Root.tsx
 * Path: /app/Root.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 20, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */

import Container from '@mui/material/Container'
import { FC } from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'

const Root: FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default Root
