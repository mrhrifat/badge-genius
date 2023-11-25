/**
 * Title: Options
 * Description:
 * Filename: Options.tsx
 * Path: /app/main/operation/Options.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 25, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */

'use client'

import CustomBadge from '@/app/reusable/CustomBadge'
import CustomIcon from '@/app/reusable/CustomIcon'
import { badgeContext } from '@/utils/BadgeContext'
import {
  labelColors,
  optionIcons,
  shieldCategories,
  shieldTypeOptions,
} from '@/utils/data'
import {
  generateOptionsLogoWidth,
  shieldSubCategoryOptions,
  shieldSubCategoryState,
} from '@/utils/utilsLib'
import { SelectChangeEvent } from '@mui/material'
import Stack from '@mui/material/Stack'
import { ChangeEvent, useState } from 'react'
import TextInputDialog from '../../reusable/CustomDialog'
import CustomForm from '../../reusable/CustomForm'
import IconAndOption from './IconAndOption'

const Options = () => {
  const { options, setOptions } = badgeContext()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
      setOptions({
        ...options,
        category: value as string,
        subCategory: shieldSubCategoryState(value as string),
      })
    } else if (name === 'Shield Sub Category') {
      setOptions({
        ...options,
        subCategory: value as string,
      })
      value !== 'Select One' && handleClickOpen()
    } else if (name === 'Shield Style') {
      setOptions({
        ...options,
        style: value as string,
      })
    } else if (name === 'Shield Color') {
      setOptions({
        ...options,
        hex: value as string,
      })
    } else if (name === 'Label Color') {
      setOptions({
        ...options,
        labelColor: value as string,
      })
    } else if (name === 'Logo Width') {
      setOptions({
        ...options,
        logoWidth: value as string,
      })
    } else if (name === 'Logo Color') {
      setOptions({
        ...options,
        logoColor: value as string,
      })
    }
  }

  // Shield Category
  const renderShieldCategory = (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={shieldCategories}
          icon={
            <CustomIcon
              icon={optionIcons.shieldCategory}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <CustomForm
          title="Shield Category"
          items={shieldCategories}
          optionsState={options.category}
          handleOptionsChange={handleOptionsChange}
          menuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
        />
      }
    />
  )

  // Shield Sub Category
  const renderShieldSubCategory = (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={shieldSubCategoryOptions(options.category)}
          icon={
            <CustomIcon
              icon={optionIcons.shieldCategory}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <CustomForm
          title="Shield Sub Category"
          items={shieldSubCategoryOptions(options.category)}
          optionsState={options.subCategory}
          handleOptionsChange={handleOptionsChange}
          menuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
        />
      }
    />
  )

  // Shield Style
  const renderShieldStyle = (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={shieldTypeOptions}
          icon={
            <CustomIcon
              icon={optionIcons.shieldStyle}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <CustomForm
          title="Shield Style"
          items={shieldTypeOptions}
          optionsState={options.style}
          handleOptionsChange={handleOptionsChange}
        />
      }
    />
  )

  // Shield Color
  const renderShieldColor = (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={labelColors}
          icon={
            <CustomIcon
              icon={optionIcons.shieldColor}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <CustomForm
          title="Shield Color"
          items={labelColors}
          optionsState={options.hex}
          handleOptionsChange={handleOptionsChange}
        />
      }
    />
  )

  // Label Color
  const renderLabelColor = (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={labelColors}
          icon={
            <CustomIcon
              icon={optionIcons.labelColor}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <CustomForm
          title="Label Color"
          items={labelColors}
          optionsState={options.labelColor}
          handleOptionsChange={handleOptionsChange}
        />
      }
    />
  )

  // Logo Color
  const renderLogoColor = (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={labelColors}
          icon={
            <CustomIcon
              icon={optionIcons.logoColor}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <CustomForm
          title="Logo Color"
          items={labelColors}
          optionsState={options.logoColor}
          handleOptionsChange={handleOptionsChange}
        />
      }
    />
  )

  // Logo Width
  const renderLogoWidth = (
    <IconAndOption
      leftItem={
        <CustomBadge
          value={generateOptionsLogoWidth()}
          icon={
            <CustomIcon
              icon={optionIcons.logoWidth}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      rightItem={
        <CustomForm
          title="Logo Width"
          items={generateOptionsLogoWidth()}
          optionsState={options.logoWidth}
          handleOptionsChange={handleOptionsChange}
          menuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        />
      }
    />
  )

  return (
    <>
      <Stack direction="column" gap={2} mt={2}>
        {renderShieldCategory}
        {renderShieldSubCategory}
        {renderShieldStyle}
        {renderShieldColor}
        {renderLabelColor}
        {renderLogoColor}
        {renderLogoWidth}
      </Stack>
      <TextInputDialog
        handleClose={handleClose}
        open={open}
        subCategoryValue={options.subCategory}
      />
    </>
  )
}

export default Options
