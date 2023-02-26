/**
 * Title: ShieldMarkdown
 * Description:
 * Filename: ShieldMarkdown.tsx
 * Path: /components/main/ShieldMarkdown.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

'use client'

/* eslint-disable react/no-children-prop */
import ShieldContext from '@/utils/ShieldContext'
import { List, ListItem, ListItemButton } from '@mui/material'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import AlertMessage from '../dynamic/AlertMessage'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const ShieldMarkdown = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [isCopied, handleCopy] = useCopyToClipboard()
  const markdown = `![](${shieldContextValue?.shield})`
  const handleClick = () => {
    const text = 'Not ready yet'
    handleCopy(
      shieldContextValue?.shield === undefined
        ? text
        : shieldContextValue?.shield
    )
  }

  return (
    <>
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton sx={{ padding: '0 1rem' }} onClick={handleClick}>
            {shieldContextValue?.shield && (
              <ReactMarkdown children={markdown} />
            )}
          </ListItemButton>
        </ListItem>
      </List>

      <AlertMessage isCopied={isCopied} />
    </>
  )
}

export default ShieldMarkdown
