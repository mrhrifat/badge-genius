/**
 * Title: TextInputField
 * Description:
 * Filename: TextInputField.tsx
 * Path: /components/dynamic/TextInputField.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Mar 24, 2023
 *
 */

import { TextInputFieldType } from '@/types/componentsTypes'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import { FC } from 'react'

const TextInputField: FC<TextInputFieldType> = ({
  value,
  handleValueChange,
  id,
  label,
  ex,
}) => {
  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        id={id}
        label={label}
        type="text"
        variant="standard"
        value={value}
        onChange={(event) => handleValueChange(event)}
      />
      <FormHelperText id="text">Ex: {ex}</FormHelperText>
    </>
  )
}

export default TextInputField
