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
import Box from '@mui/material/Box'
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

  return (
    <>
      {shieldContextValue?.options.svg !== null ? (
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: '0 1rem' }} onClick={handleClick}>
              <Box
                width={100}
                sx={{
                  cursor: 'pointer',
                  fill: shieldContextValue?.theme === 'light' ? '#000' : '#fff',
                }}>
                {/* <InlineSVG src={shieldContextValue?.options.svg} /> */}
                <RenderSVG
                  title={shieldContextValue?.options.title}
                  path={shieldContextValue?.options.path}
                  width={100}
                  height={100}
                />
              </Box>
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <></>
      )}
      <AlertMessage isCopied={isCopied} />
    </>
  )
}

export default ShieldSvg
