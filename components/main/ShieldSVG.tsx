/**
 * Title: ShieldSVG
 * Description:
 * Filename: ShieldSVG.tsx
 * Path: /components/main/ShieldSVG.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { AlertMessage, RenderSVG } from '@/components/dynamic'
import ShieldContext from '@/utils/ShieldContext'
import ContentCopySharpIcon from '@mui/icons-material/ContentCopySharp'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import { useContext, useState } from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const ShieldSvg = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [isCopied, handleCopy] = useCopyToClipboard()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (shieldContextValue?.options.svg) {
      handleCopy(shieldContextValue?.options.svg)
    }
    return false
  }

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Shield Properties List Item
  const shieldLists = (
    <Card
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      sx={{
        background: 'none',
        boxShadow: 'none',
        padding: '0 1rem',
        cursor: 'pointer',
        fill: (theme) => (theme.palette.mode === 'light' ? '#000' : '#fff'),
        opacity: isCopied ? 0.5 : isHovered ? 0.7 : 1, // Update the opacity based on state
        // Add position relative to position copy icon
        position: 'relative',
      }}
      onClick={handleClick}>
      <RenderSVG
        title={shieldContextValue?.options.title}
        path={shieldContextValue?.options.path}
        width={100}
        height={100}
      />
      {isHovered && !isCopied && (
        // Render the copy icon when the card is hovered over
        <IconButton
          sx={{
            position: 'absolute',
            top: '25%',
            right: '30%',
            color: (theme) =>
              theme.palette.mode === 'light' ? '#000' : '#FFF',
          }}>
          <ContentCopySharpIcon />
        </IconButton>
      )}
    </Card>
  )

  return (
    <>
      {shieldContextValue?.options.svg !== '' ? shieldLists : <></>}
      <AlertMessage isCopied={isCopied} />
    </>
  )
}

export default ShieldSvg
