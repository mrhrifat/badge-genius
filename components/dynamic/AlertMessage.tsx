/**
 * Title: AlertMessage
 * Description:
 * Filename: AlertMessage.tsx
 * Path: /components/dynamic/AlertMessage.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { AlertMessageInterface } from '@/interfaces/componentsInterfaces'
import { Alert, Snackbar } from '@mui/material'
import { FC } from 'react'

const AlertMessage: FC<AlertMessageInterface> = ({ isCopied }) => {
  return (
    <Snackbar
      open={isCopied}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity="success" sx={{ width: '100%' }}>
        Successfully Copied!
      </Alert>
    </Snackbar>
  )
}

export default AlertMessage
