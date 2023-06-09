/**
 * Title: Root
 * Description:
 * Filename: Root.tsx
 * Path: /components/Root.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 20, 2023
 *
 */
'use client'

import Container from '@mui/material/Container'
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
