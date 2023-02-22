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
import Header from './header/Header'

const Root: FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
    </Container>
  )
}

export default Root
