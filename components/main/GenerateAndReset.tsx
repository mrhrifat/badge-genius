/**
 * Title: GenerateAndReset
 * Description:
 * Filename: GenerateAndReset.tsx
 * Path: /components/main/GenerateAndReset.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Mar 19, 2023
 *
 */

import { generateShield, resetDefault } from '@/lib/utilsLib'
import { ShieldContextValueType } from '@/types/utilsTypes'
import ShieldContext from '@/utils/ShieldContext'
import Stack from '@mui/material/Stack'
import { useContext } from 'react'
import { CustomButton } from '../dynamic'

const GenerateAndReset = () => {
  const shieldContextValue = useContext(ShieldContext)

  // Handle Generate Shield
  const handleGenerateShield = (
    shieldContextValue: ShieldContextValueType | null
  ) => {
    if (shieldContextValue?.options) {
      generateShield(shieldContextValue?.options, shieldContextValue?.setShield)
    }
    return false
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

  return (
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
  )
}

export default GenerateAndReset
