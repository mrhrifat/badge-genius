/**
 * Title: TextInputDialog
 * Description:
 * Filename: TextInputDialog.tsx
 * Path: /components/dynamic/TextInputDialog.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Mar 23, 2023
 *
 */

import { genSocialCategory } from '@/lib/utilsLib'
import { TextInputDialogType } from '@/types/componentsTypes'
import ShieldContext from '@/utils/ShieldContext'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ChangeEvent, FC, useContext } from 'react'
import TextInputField from './TextInputField'

const TextInputDialog: FC<TextInputDialogType> = ({
  handleClose,
  open,
  // subCategoryValue,
}) => {
  const shieldContextValue = useContext(ShieldContext)

  const handleValueChange = (
    event: ChangeEvent<HTMLInputElement | { id: string; value: string }>
  ) => {
    const inputElement = event.target as HTMLInputElement // type guard to ensure event target is an HTMLInputElement
    const { id, value } = inputElement

    if (id === 'username') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        subCategoryArgs: {
          ...shieldContextValue.options.subCategoryArgs,
          username: value,
        },
      })
    } else if (id === 'gistid') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        subCategoryArgs: {
          ...shieldContextValue.options.subCategoryArgs,
          gistId: value,
        },
      })
    } else if (id === 'repo') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        subCategoryArgs: {
          ...shieldContextValue.options.subCategoryArgs,
          repo: value,
        },
      })
    } else if (id === 'org') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        subCategoryArgs: {
          ...shieldContextValue.options.subCategoryArgs,
          org: value,
        },
      })
    } else if (id === 'project') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        subCategoryArgs: {
          ...shieldContextValue.options.subCategoryArgs,
          project: value,
        },
      })
    } else if (id === 'id') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        subCategoryArgs: {
          ...shieldContextValue.options.subCategoryArgs,
          id: value,
        },
      })
    }
  }

  const handleSubmit = () => {
    handleClose()
    genSocialCategory(
      shieldContextValue?.options.category,
      shieldContextValue?.options.subCategoryArgs
    )
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
            value={shieldContextValue?.options.subCategoryArgs.username}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'gistId'}
            label={'Gist Id'}
            value={shieldContextValue?.options.subCategoryArgs.gistId}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'repo'}
            label={'Repo'}
            value={shieldContextValue?.options.subCategoryArgs.repo}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'org'}
            label={'Org'}
            value={shieldContextValue?.options.subCategoryArgs.org}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'project'}
            label={'Project'}
            value={shieldContextValue?.options.subCategoryArgs.project}
            handleValueChange={handleValueChange}
            ex={'github'}
          />

          <TextInputField
            id={'id'}
            label={'Id'}
            value={shieldContextValue?.options.subCategoryArgs.id}
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

export default TextInputDialog
