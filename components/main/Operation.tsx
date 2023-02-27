/**
 * Title: Operation
 * Description:
 * Filename: Operation.tsx
 * Path: /components/main/Operation.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { Download, ShieldMarkdown, ShieldSvg } from '@/components/main'
import Stack from '@mui/material/Stack'

const Operation = () => {
  return (
    <Stack direction="column" gap={2} alignItems="center">
      <ShieldSvg />
      <ShieldMarkdown />
      <Download />
    </Stack>
  )
}

export default Operation
