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
  OptionIconGrid,
  RenderIcon,
  ShieldForm,
  TotalItem,
} from '@/components/dynamic'
import {
  generateOptionsLogoWidth,
  shieldSubCategoryOptions,
  shieldSubCategoryState,
} from '@/lib/utilsLib'
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

  // Shield Category
  const renderShieldCategory = (
    <OptionIconGrid
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
      secondItem={
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
    <OptionIconGrid
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
      secondItem={
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
    <OptionIconGrid
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
      secondItem={
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
    <OptionIconGrid
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
      secondItem={
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
    <OptionIconGrid
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
      secondItem={
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
    <OptionIconGrid
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
      secondItem={
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
    <OptionIconGrid
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
      secondItem={
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
    </>
  )
}

export default ShieldOptions
