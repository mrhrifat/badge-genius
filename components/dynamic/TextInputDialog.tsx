/**
 * Title: TextInputDialog
 * Description:
 * Filename: TextInputDialog.tsx
 * Path: /components/dynamic/TextInputDialog.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Mar 23, 2023
 *
 */

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { FC } from 'react'

export type TextInputDialogType = {
  handleClose: () => void
  open: boolean
  subCategoryValue: string | undefined
}

const TextInputDialog: FC<TextInputDialogType> = ({
  handleClose,
  open,
  subCategoryValue,
}) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sub Category Value</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To build your Badge with selected sub category, you need to provide
            all mandotory value.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TextInputDialog
