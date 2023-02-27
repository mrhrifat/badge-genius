/**
 * Title: SearchIcon
 * Description:
 * Filename: SearchIcon.tsx
 * Path: /components/main/SearchIcon.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

'use client'

import { OptionAndIcon, TotalItem } from '@/components/dynamic'
import { ShiledListBox } from '@/components/utils'
import {
  generateShield,
  generateSimpleIcon,
  optionRender,
  updateLabelColor,
} from '@/lib/utilsLib'
import { HandleSelectIconHandlerType } from '@/types/componentsTypes'
import { labelColors } from '@/utils/data'
import ShieldContext from '@/utils/ShieldContext'
import BadgeIcon from '@mui/icons-material/Badge'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { ChangeEvent, ReactNode, useContext } from 'react'

const SearchIcon = () => {
  const shieldContextValue = useContext(ShieldContext)

  const handleSelectIcon: HandleSelectIconHandlerType = (
    event: ChangeEvent<object>,
    value: string | null
  ) => {
    if (value) {
      const icons = generateSimpleIcon(value, shieldContextValue?.icons)

      const { title, hex, svg, license, guidelines, path, source, slug } = icons

      shieldContextValue?.setSelectedIcon(value)

      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
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
      generateShield !== null ? shieldContextValue?.setShield('') : ''
    }
  }

  return (
    <OptionAndIcon
      firstItem={
        <>
          <Autocomplete
            id="iconsList"
            options={optionRender(shieldContextValue?.icons)}
            disableListWrap
            ListboxComponent={ShiledListBox}
            onChange={(event, value) => handleSelectIcon(event, value)}
            renderInput={(params) => (
              <TextField {...params} label="Search Icon" />
            )}
            renderOption={(props, option, state) =>
              [props, option, state.index] as ReactNode
            }
          />
        </>
      }
      lastItem={
        <TotalItem value={shieldContextValue?.icons} icon={<BadgeIcon />} />
      }
    />
  )
}

export default SearchIcon
