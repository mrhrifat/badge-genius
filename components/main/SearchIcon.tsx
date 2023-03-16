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

import { OptionAndIcon, RenderIcon, TotalItem } from '@/components/dynamic'
import { ShiledListBox } from '@/components/utils'
import {
  generateSimpleIcon,
  optionRender,
  updateLabelColor,
} from '@/lib/utilsLib'
import { HandleSelectIconHandlerType } from '@/types/componentsTypes'
import { labelColors, optionIcons } from '@/utils/data'
import ShieldContext from '@/utils/ShieldContext'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FC, ReactNode, useContext } from 'react'

const SearchIcon: FC = () => {
  const shieldContextValue = useContext(ShieldContext)

  const handleSelectIcon: HandleSelectIconHandlerType = (
    event: ChangeEvent<object>,
    value: string | null
  ) => {
    if (value) {
      const icons = generateSimpleIcon(value, shieldContextValue?.icons)

      const { title, hex, svg, license, guidelines, path, source, slug } = icons

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
      shieldContextValue?.setShield('')
    }
  }

  return (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={shieldContextValue?.icons}
          icon={
            <RenderIcon
              icon={optionIcons.icons}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      lastItem={
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
      }
    />
  )
}

export default SearchIcon
