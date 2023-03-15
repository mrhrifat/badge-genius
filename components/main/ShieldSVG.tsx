/**
 * Title: ShieldSVG
 * Description:
 * Filename: ShieldSVG.tsx
 * Path: /components/main/ShieldSVG.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

'use client'

import { AlertMessage, RenderSVG } from '@/components/dynamic'
import ShieldContext from '@/utils/ShieldContext'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { useContext } from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const ShieldSvg = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [isCopied, handleCopy] = useCopyToClipboard()

  const handleClick = () => {
    if (shieldContextValue?.options.svg) {
      handleCopy(shieldContextValue?.options.svg)
    }
    return false
  }

  // Shield Properties List Item
  const shieldLists = (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            padding: '0 1rem',
            cursor: 'pointer',
            fill: (theme) => (theme.palette.mode === 'light' ? '#000' : '#fff'),
          }}
          onClick={handleClick}
          disabled={shieldContextValue?.options.svg === ''}>
          <RenderSVG
            title={shieldContextValue?.options.title}
            path={shieldContextValue?.options.path}
            width={100}
            height={100}
          />
        </ListItemButton>
      </ListItem>
    </List>
  )

  return (
    <>
      {shieldContextValue?.options.svg !== '' ? shieldLists : <></>}
      <AlertMessage isCopied={isCopied} />
    </>
  )
}

export default ShieldSvg
