/**
 * Title: CustomDialog
 * Description:
 * Filename: CustomDialog.tsx
 * Path: /app/reusable/CustomDialog.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Mar 23, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
'use client'

import { CustomDialogType } from '@/types/componentsTypes'
import { badgeContext } from '@/utils/BadgeContext'
import { genSocialCategory } from '@/utils/utilsLib'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ChangeEvent, FC } from 'react'
import TextInputField from './CustomTextField'

const CustomDialog: FC<CustomDialogType> = ({
  handleClose,
  open,
  // subCategoryValue,
}) => {
  const { options, setOptions } = badgeContext()

  const handleValueChange = (
    event: ChangeEvent<HTMLInputElement | { id: string; value: string }>
  ) => {
    const inputElement = event.target as HTMLInputElement // type guard to ensure event target is an HTMLInputElement
    const { id, value } = inputElement

    if (id === 'username') {
      setOptions({
        ...options,
        subCategoryArgs: {
          ...options.subCategoryArgs,
          username: value,
        },
      })
    } else if (id === 'gistid') {
      setOptions({
        ...options,
        subCategoryArgs: {
          ...options.subCategoryArgs,
          gistId: value,
        },
      })
    } else if (id === 'repo') {
      setOptions({
        ...options,
        subCategoryArgs: {
          ...options.subCategoryArgs,
          repo: value,
        },
      })
    } else if (id === 'org') {
      setOptions({
        ...options,
        subCategoryArgs: {
          ...options.subCategoryArgs,
          org: value,
        },
      })
    } else if (id === 'project') {
      setOptions({
        ...options,
        subCategoryArgs: {
          ...options.subCategoryArgs,
          project: value,
        },
      })
    } else if (id === 'id') {
      setOptions({
        ...options,
        subCategoryArgs: {
          ...options.subCategoryArgs,
          id: value,
        },
      })
    }
  }

  const handleSubmit = () => {
    handleClose()
    genSocialCategory(options.category, options.subCategoryArgs)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sub Category Value</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To build your Badge with selected sub category, you need to provide
            all mandotory value.
          </DialogContentText>

          <TextInputField
            id={'username'}
            label={'User Name'}
            value={options.subCategoryArgs.username}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'gistId'}
            label={'Gist Id'}
            value={options.subCategoryArgs.gistId}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'repo'}
            label={'Repo'}
            value={options.subCategoryArgs.repo}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'org'}
            label={'Org'}
            value={options.subCategoryArgs.org}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'project'}
            label={'Project'}
            value={options.subCategoryArgs.project}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'id'}
            label={'Id'}
            value={options.subCategoryArgs.id}
            handleValueChange={handleValueChange}
            ex={'github'}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CustomDialog
