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
import { AlertMessage } from '@/components/dynamic'
import ShieldContext from '@/utils/ShieldContext'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
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
