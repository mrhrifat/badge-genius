/**
 * Title: CustomTextField
 * Description:
 * Filename: CustomTextField.tsx
 * Path: /app/reusable/CustomTextField.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Mar 24, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
'use client'
import { CustomTextFieldType } from '@/types/componentsTypes'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import { FC } from 'react'

const CustomTextField: FC<CustomTextFieldType> = ({
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

export default CustomTextField
