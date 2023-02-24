import { optionRender } from '@/lib/utilsLib'
import ShieldContext from '@/utils/ShieldContext'
import BadgeIcon from '@mui/icons-material/Badge'
import { Autocomplete, TextField } from '@mui/material'
import React, { useContext } from 'react'
import OptionAndIcon from '../dynamic/OptionAndIcon'
import TotalItem from '../dynamic/TotalItem'
import { default as ShiledListBox } from '../utils/ShiledListBox'

const SearchIcon = () => {
  const shieldContextValue = useContext(ShieldContext)
  console.log(typeof shieldContextValue?.icons)

  //   const handleSelectIcon = (e) => {
  //     const { title, hex, svg, license, guidelines, path, source, slug } =
  //       generateSimpleIcon(e, icons)

  //     setSelectedIcon(e)
  //     setOptions({
  //       ...options,
  //       title,
  //       svg,
  //       hex,
  //       license,
  //       guidelines,
  //       path,
  //       source,
  //       slug,
  //       labelColor: hex,
  //     })
  //     updateLabelColor(labelColors, hex)
  //     generateShield !== null ? setGenerateShield(null) : ''
  //   }

  return (
    <OptionAndIcon
      firstItem={
        <>
          <Autocomplete
            id="iconsList"
            options={optionRender(shieldContextValue?.icons)}
            disableListWrap
            ListboxComponent={ShiledListBox}
            renderInput={(params) => (
              <TextField {...params} label="Search Icon" />
            )}
            renderOption={(props, option, state) =>
              [props, option, state.index] as React.ReactNode
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
