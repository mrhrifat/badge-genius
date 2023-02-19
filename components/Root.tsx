import { Typography } from '@mui/material'
import React from 'react'

export interface IRoot {
  text: string
}

const Root: React.FC<IRoot> = ({ text }) => {
  return <Typography>{text}</Typography>
}

export default Root
