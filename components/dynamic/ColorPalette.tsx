/**
 * Title: ColorPalette
 * Description:
 * Filename: ColorPalette.tsx
 * Path: /components/dynamic/ColorPalette.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */
import { AlertMessage } from '@/components/dynamic'
import CircleIcon from '@mui/icons-material/Circle'
import ContentCopySharpIcon from '@mui/icons-material/ContentCopySharp'
import IconButton from '@mui/material/IconButton'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import useCopyToClipboard from '../hooks/useCopyToClipboard'

const ColorPalette = (color: string) => {
  const [isCopied, handleCopy] = useCopyToClipboard()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignSelf="center"
        onClick={() => handleCopy(color)}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        sx={{
          cursor: 'pointer',
          opacity: isCopied ? 0.5 : isHovered ? 0.7 : 1, // Update the opacity based on state
          // Add position relative to position copy icon
          position: 'relative',
        }}>
        <CircleIcon
          sx={{
            color: `#${color}`,
            margin: '4px 0',
            border: '1px solid #22a6b3',
            borderRadius: 25,
            cursor: 'pointer',
          }}
        />
        <ListItemText>{color}</ListItemText>
        {isHovered && !isCopied && (
          // Render the copy icon when the card is hovered over
          <IconButton
            sx={{
              position: 'absolute',
              top: '0',
              right: '30%',
              color: (theme) =>
                theme.palette.mode === 'light' ? '#000' : '#FFF',
            }}>
            <ContentCopySharpIcon />
          </IconButton>
        )}
      </Stack>
      <AlertMessage isCopied={isCopied} />
    </>
  )
}
export default ColorPalette
