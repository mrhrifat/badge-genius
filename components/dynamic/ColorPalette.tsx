/**
 * Title: ColorPalette
 * Description:
 * Filename: ColorPalette.tsx
 * Path: /components/dynamic/ColorPalette.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import CircleIcon from '@mui/icons-material/Circle'
import { ListItemText, Stack } from '@mui/material'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import AlertMessage from './AlertMessage'

const ColorPalette = (color: string) => {
  const [isCopied, handleCopy] = useCopyToClipboard()

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignSelf="center"
        onClick={() => handleCopy(color)}
        sx={{ cursor: 'pointer' }}>
        <ListItemText>{color}</ListItemText>
        <CircleIcon
          sx={{
            color: `#${color}`,
            margin: '4px 0',
            border: '1px solid #22a6b3',
            borderRadius: 25,
            cursor: 'pointer',
          }}
        />
      </Stack>
      <AlertMessage isCopied={isCopied} />
    </>
  )
}
export default ColorPalette
