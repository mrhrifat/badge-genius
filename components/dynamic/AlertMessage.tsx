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
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { FC } from 'react'

const AlertMessage: FC<AlertMessageInterface> = ({ isCopied }) => {
  return (
    <Snackbar
      open={isCopied}
      autoHideDuration={2000}
      data-testid="snackbar"
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity="success" sx={{ width: '100%' }}>
        Successfully Copied!
      </Alert>
    </Snackbar>
  )
}

export default AlertMessage
