/**
 * Title: CustomForm
 * Description:
 * Filename: CustomForm.tsx
 * Path: /app/reusable/CustomForm.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 25, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
'use client'

import { CustomFormType } from '@/types/componentsTypes'
import CircleIcon from '@mui/icons-material/Circle'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FC } from 'react'

const renderColorMenuItem = (title: string, item: string | number) => {
  if (
    title !== 'Shield Category' &&
    title !== 'Shield Style' &&
    title !== 'Shield Width' &&
    title !== 'Logo Width' &&
    title !== 'Shield Sub Category' &&
    title !== 'Image Size Type'
  ) {
    return (
      <CircleIcon
        sx={{
          color: `#${item}`,
          height: 14,
          width: 14,
          border: '1px solid #22a6b3',
          borderRadius: 50,
          marginX: 0.5,
        }}
      />
    )
  }
}

const CustomForm: FC<CustomFormType> = ({
  title,
  items,
  optionsState,
  handleOptionsChange,
  menuProps,
  fullWidth,
}) => {
  return (
    <FormControl fullWidth={fullWidth !== true ? true : false} size="small">
      <InputLabel id={title}>{title}</InputLabel>
      <Select
        name={title}
        labelId={title}
        id={title + 'Select'}
        sx={{
          '& .MuiOutlinedInput-input': {
            padding: '11px',
            display: 'flex',
            alignItems: 'center',
          },
        }}
        value={optionsState}
        label={title}
        onChange={(event) => handleOptionsChange(event)}
        MenuProps={menuProps}>
        {items?.map((item) => (
          <MenuItem
            value={item}
            key={item}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <>
              {item}
              {renderColorMenuItem(title, item)}
            </>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomForm
