/**
 * Title: ShieldOptions
 * Description:
 * Filename: ShieldOptions.tsx
 * Path: /components/main/ShieldOptions.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import {
  CustomButton,
  OptionAndIcon,
  RenderIcon,
  ShieldForm,
  TotalItem,
} from '@/components/dynamic'
import {
  generateOptionsLogoWidth,
  generateShield,
  resetDefault,
  shieldSubCategoryOptions,
  shieldSubCategoryState,
} from '@/lib/utilsLib'
import { ShieldContextValueType } from '@/types/utilsTypes'
import {
  labelColors,
  optionIcons,
  shieldCategories,
  shieldTypeOptions,
} from '@/utils/data'
import ShieldContext from '@/utils/ShieldContext'
import { SelectChangeEvent } from '@mui/material'
import Stack from '@mui/material/Stack'
import { ChangeEvent, useContext } from 'react'

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
        subCategory: shieldSubCategoryState(value as string),
      })
    } else if (name === 'Shield Sub Category') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        subCategory: value as string,
      })
    } else if (name === 'Shield Style') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        style: value as string,
      })
    } else if (name === 'Shield Color') {
      shieldContextValue?.setOptions({
        ...shieldContextValue?.options,
        hex: value as string,
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

  // Shield Category
  const renderShieldCategory = (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={shieldCategories}
          icon={
            <RenderIcon
              icon={optionIcons.shieldCategory}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      lastItem={
        <ShieldForm
          title="Shield Category"
          items={shieldCategories}
          optionsState={shieldContextValue?.options.category}
          handleOptionsChange={handleOptionsChange}
          menuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
        />
      }
    />
  )

  // Shield Sub Category
  const renderShieldSubCategory = (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={shieldSubCategoryOptions(shieldContextValue?.options.category)}
          icon={
            <RenderIcon
              icon={optionIcons.shieldCategory}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      lastItem={
        <ShieldForm
          title="Shield Sub Category"
          items={shieldSubCategoryOptions(shieldContextValue?.options.category)}
          optionsState={shieldContextValue?.options.subCategory}
          handleOptionsChange={handleOptionsChange}
          menuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
        />
      }
    />
  )

  // Shield Style
  const renderShieldStyle = (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={shieldTypeOptions}
          icon={
            <RenderIcon
              icon={optionIcons.shieldStyle}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
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
  )

  // Shield Color
  const renderShieldColor = (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={labelColors}
          icon={
            <RenderIcon
              icon={optionIcons.shieldColor}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
        />
      }
      lastItem={
        <ShieldForm
          title="Shield Color"
          items={labelColors}
          optionsState={shieldContextValue?.options.hex}
          handleOptionsChange={handleOptionsChange}
        />
      }
    />
  )

  // Label Color
  const renderLabelColor = (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={labelColors}
          icon={
            <RenderIcon
              icon={optionIcons.labelColor}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
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
  )

  // Logo Color
  const renderLogoColor = (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={labelColors}
          icon={
            <RenderIcon
              icon={optionIcons.logoColor}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
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
  )

  // Logo Width
  const renderLogoWidth = (
    <OptionAndIcon
      firstItem={
        <TotalItem
          value={generateOptionsLogoWidth()}
          icon={
            <RenderIcon
              icon={optionIcons.logoWidth}
              width={25}
              height={25}
              viewBox="0 0 450 600"
            />
          }
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

      <Stack direction="column" gap={1} mt={1}>
        <CustomButton
          title={'Generate'}
          disable={shieldContextValue?.options.title === ''}
          handleClick={() => handleGenerateShield(shieldContextValue)}
          // icon={<ShieldIcon />}
        />

        <CustomButton
          title={'Reset'}
          // icon={<ClearAllIcon />}
          disable={shieldContextValue?.options.title === ''}
          handleClick={() => handleResetDefault(shieldContextValue)}
        />
      </Stack>
    </>
  )
}

export default ShieldOptions
