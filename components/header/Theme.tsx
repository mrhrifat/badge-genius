/**
 * Title: Theme
 * Description:
 * Filename: Theme.tsx
 * Path: /components/header/Theme.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 21, 2023
 *
 */

import ShieldContext from '@/utils/ShieldContext'
import { ChangeEvent, FC, useContext } from 'react'
import ToggleKey from '../dynamic/ToggleKey'

const Theme: FC = () => {
  const shieldContextValue = useContext(ShieldContext)

  const handleChange = (event: ChangeEvent<unknown>, value: string) => {
    shieldContextValue?.setTheme(value)
  }

  return (
    <div>
      <ToggleKey
        value={shieldContextValue?.theme}
        handleChange={handleChange}
        options={[
          { id: 0, title: 'Light', value: 'light' },
          { id: 1, title: 'Dark', value: 'dark' },
        ]}
      />
    </div>
  )
}

export default Theme
