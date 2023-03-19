/**
 * Title: ShieldMarkdown
 * Description:
 * Filename: ShieldMarkdown.tsx
 * Path: /components/main/ShieldMarkdown.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

/* eslint-disable react/no-children-prop */
import { AlertMessage } from '@/components/dynamic'
import ShieldContext from '@/utils/ShieldContext'
import ContentCopySharpIcon from '@mui/icons-material/ContentCopySharp'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import { useContext, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const ShieldMarkdown = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [isCopied, handleCopy] = useCopyToClipboard()
  const [isHovered, setIsHovered] = useState(false)

  const markdown = `![](${shieldContextValue?.shield})`

  const handleClick = () => {
    if (shieldContextValue?.shield) {
      handleCopy(shieldContextValue?.shield)
    }
  }

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <Card
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        sx={{
          background: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          opacity: isCopied ? 0.5 : isHovered ? 0.7 : 1, // Update the opacity based on state
          // Add position relative to position copy icon
          position: 'relative',
        }}>
        {shieldContextValue?.shield && <ReactMarkdown children={markdown} />}
        {isHovered && !isCopied && (
          // Render the copy icon when the card is hovered over
          <IconButton
            sx={{
              position: 'absolute',
              top: '17%',
              right: '30%',
              color: (theme) =>
                theme.palette.mode === 'light' ? '#000' : '#FFF',
            }}>
            <ContentCopySharpIcon />
          </IconButton>
        )}
      </Card>

      <AlertMessage isCopied={isCopied} />
    </>
  )
}

export default ShieldMarkdown
