/**
 * Title: Root
 * Description:
 * Filename: Root.tsx
 * Path: /components/Root.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 20, 2023
 *
 */

import { Container } from '@mui/material'
import { FC } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Home from './home/Home'

const Root: FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Home />
      <Footer />
    </Container>
  )
}

export default Root
