/**
 * Title: ShieldForm
 * Description:
 * Filename: ShieldForm.tsx
 * Path: /components/dynamic/ShieldForm.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { ShieldFormInterface } from '@/interfaces/componentsInterfaces'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FC } from 'react'

const ShieldForm: FC<ShieldFormInterface> = ({
  title,
  items,
  optionsState,
  handleOptionsChange,
  menuProps,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={title}>{title}</InputLabel>
      <Select
        name={title}
        labelId={title}
        id={title}
        sx={{
          '& .MuiOutlinedInput-input': {
            padding: '11px',
          },
        }}
        value={optionsState}
        label={title}
        onChange={(event) => handleOptionsChange(event)}
        MenuProps={menuProps}>
        {items?.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default ShieldForm
