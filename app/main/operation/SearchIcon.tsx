/**
 * Title: SearchIcon
 * Description:
 * Filename: SearchIcon.tsx
 * Path: /app/main/operation/SearchIcon.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 25, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */

'use client'

import CustomBadge from '@/app/reusable/CustomBadge'
import CustomIcon from '@/app/reusable/CustomIcon'
import { HandleSelectIconHandlerType } from '@/types/componentsTypes'
import { badgeContext } from '@/utils/BadgeContext'
import { labelColors, optionIcons } from '@/utils/data'
import {
  generateSimpleIcon,
  optionRender,
  updateLabelColor,
} from '@/utils/utilsLib'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FC, ReactNode } from 'react'
import IconsList from '../../utils/IconsList'
import IconAndOption from './IconAndOption'

const SearchIcons: FC = () => {
  const { options, icons, setBadge, setOptions } = badgeContext()

  const handleSelectIcon: HandleSelectIconHandlerType = (
    event: ChangeEvent<object>,
    value: string | null
  ) => {
    if (value) {
      const { title, hex, svg, license, guidelines, path, source, slug } =
        generateSimpleIcon(value, icons)

      setOptions({
        ...options,
        title,
        svg,
        hex,
        license,
        guidelines,
        path,
        source,
        slug,
        labelColor: hex,
      })

      updateLabelColor(labelColors, hex)
      setBadge('')
    }
  }

  return (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={icons}
          icon={
            <CustomIcon
              icon={optionIcons.icons}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <Autocomplete
          id="iconsList"
          options={optionRender(icons)}
          disableListWrap
          ListboxComponent={IconsList}
          onChange={(event, value) => handleSelectIcon(event, value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Icon"
              sx={{
                '& .MuiOutlinedInput-root': {
                  padding: '4px',
                },
              }}
            />
          )}
          renderOption={(props, option, state) =>
            [props, option, state.index] as ReactNode
          }
        />
      }
    />
  )
}

export default SearchIcons
