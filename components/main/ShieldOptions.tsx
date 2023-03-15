/**
 * Title: ShieldOptions
 * Description:
 * Filename: ShieldOptions.tsx
 * Path: /components/main/ShieldOptions.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

'use client'

import { OptionAndIcon, ShieldForm, TotalItem } from '@/components/dynamic'
import {
  generateOptionsLogoWidth,
  generateShield,
  resetDefault,
} from '@/lib/utilsLib'
import { ShieldContextValueType } from '@/types/utilsTypes'
import { labelColors, shieldCategories, shieldTypeOptions } from '@/utils/data'
import ShieldContext from '@/utils/ShieldContext'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import CategoryIcon from '@mui/icons-material/Category'
import ClearAllIcon from '@mui/icons-material/ClearAll'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'
import ShieldIcon from '@mui/icons-material/Shield'
import StyleIcon from '@mui/icons-material/Style'
import { SelectChangeEvent } from '@mui/material'
import Stack from '@mui/material/Stack'
import { ChangeEvent, useContext } from 'react'
import CustomButton from '../dynamic/CustomButton'

const ShieldOptions = () => {
  const shieldContextValue = useContext(ShieldContext)

  generateOptionsLogoWidth()

  // Handle Option State Change
  const handleOptionsChange = (
    event:
      | ChangeEvent<
          HTMLInputElement | { name?: string | undefined; value: unknown }
        >
      | SelectChangeEvent<string | number | null>
  ) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    const { value, name } = event.target
    if (name === 'Shield Category') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        category: value as string,
      })
    } else if (name === 'Shield Style') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        style: value as string,
      })
    } else if (name === 'Label Color') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        labelColor: value as string,
      })
    } else if (name === 'Logo Width') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        logoWidth: value as string,
      })
    } else if (name === 'Logo Color') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        logoColor: value as string,
      })
    }
  }

  // Handle Reset Default
  const handleResetDefault = (
    shieldContextValue: ShieldContextValueType | null
  ) => {
    if (shieldContextValue?.options !== undefined) {
      resetDefault(shieldContextValue?.options, shieldContextValue?.setShield)
    }
    return false
  }

  // Handle Generate Shield
  const handleGenerateShield = (
    shieldContextValue: ShieldContextValueType | null
  ) => {
    if (shieldContextValue?.options) {
      generateShield(shieldContextValue?.options, shieldContextValue?.setShield)
    }
    return false
  }

  return (
    <Stack direction="column" gap={2} mt={2}>
      <OptionAndIcon
        firstItem={
          <TotalItem
            value={shieldCategories}
            icon={<CategoryIcon color="action" />}
          />
        }
        lastItem={
          <ShieldForm
            title="Shield Category"
            items={shieldCategories}
            optionsState={shieldContextValue?.options.category}
            handleOptionsChange={handleOptionsChange}
          />
        }
      />

      <OptionAndIcon
        firstItem={
          <TotalItem
            value={shieldTypeOptions}
            icon={<StyleIcon color="action" />}
          />
        }
        lastItem={
          <ShieldForm
            title="Shield Style"
            items={shieldTypeOptions}
            optionsState={shieldContextValue?.options.style}
            handleOptionsChange={handleOptionsChange}
          />
        }
      />

      <OptionAndIcon
        firstItem={
          <TotalItem
            value={labelColors}
            icon={<FormatColorTextIcon color="action" />}
          />
        }
        lastItem={
          <ShieldForm
            title="Label Color"
            items={labelColors}
            optionsState={shieldContextValue?.options.labelColor}
            handleOptionsChange={handleOptionsChange}
          />
        }
      />

      <OptionAndIcon
        firstItem={
          <TotalItem
            value={labelColors}
            icon={<FormatColorFillIcon color="action" />}
          />
        }
        lastItem={
          <ShieldForm
            title="Logo Color"
            items={labelColors}
            optionsState={shieldContextValue?.options.logoColor}
            handleOptionsChange={handleOptionsChange}
          />
        }
      />

      <OptionAndIcon
        firstItem={
          <TotalItem
            value={generateOptionsLogoWidth()}
            icon={<AspectRatioIcon color="action" />}
          />
        }
        lastItem={
          <ShieldForm
            title="Logo Width"
            items={generateOptionsLogoWidth()}
            optionsState={shieldContextValue?.options.logoWidth}
            handleOptionsChange={handleOptionsChange}
            menuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
          />
        }
      />

      <CustomButton
        title={'Generate Shield'}
        disable={shieldContextValue?.options.title === ''}
        handleClick={() => handleGenerateShield(shieldContextValue)}
        icon={<ShieldIcon />}
      />

      <CustomButton
        title="Reset Default"
        icon={<ClearAllIcon />}
        disable={shieldContextValue?.options.title === ''}
        handleClick={() => handleResetDefault(shieldContextValue)}
      />
    </Stack>
  )
}

export default ShieldOptions
