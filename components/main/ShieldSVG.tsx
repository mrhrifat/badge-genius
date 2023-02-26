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

import ShieldContext from '@/utils/ShieldContext'
import { Box, List, ListItem, ListItemButton } from '@mui/material'
import { useContext } from 'react'
import AlertMessage from '../dynamic/AlertMessage'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const ShieldSvg = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [isCopied, handleCopy] = useCopyToClipboard()

  return (
    <>
      {shieldContextValue?.options.svg ? (
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ padding: '0 1rem' }}
              onClick={() => {
                const text = 'Not ready yet!'
                shieldContextValue?.options.svg === null
                  ? text
                  : handleCopy(shieldContextValue?.options.svg)
              }}>
              <Box
                width={100}
                sx={{
                  cursor: 'pointer',
                  fill: shieldContextValue?.theme === 'light' ? '#000' : '#fff',
                }}>
                {/* <InlineSVG src={shieldContextValue?.options.svg} /> */}
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
