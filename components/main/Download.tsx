/**
 * Title: Download
 * Description:
 * Filename: Download.tsx
 * Path: /components/main/Download.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */

import { CustomButton, ToggleKey } from '@/components/dynamic'
import { imageProcessing } from '@/lib/utilsLib'
import ShieldContext from '@/utils/ShieldContext'
import DownloadIcon from '@mui/icons-material/Download'
import { ChangeEvent, useContext, useState } from 'react'
import DownloadLink from 'react-download-link'

const Download = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [type, setType] = useState('svg')

  // Handle Type Change
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: ChangeEvent<unknown>, value: any) => {
    setType(value)
  }

  // Render SVG Download
  const renderSvgDownload = (
    <DownloadLink
      style={{
        borderRadius: '0 0 14px 0',
        textDecoration: 'none',
      }}
      label={
        <CustomButton
          title={'Download'}
          disable={shieldContextValue?.options.svg === ''}
          icon={<DownloadIcon />}
        />
      }
      filename={`${shieldContextValue?.options.title}.${type}`}
      exportFile={() => shieldContextValue?.options?.svg}
    />
  )

  // Render PNG Download
  const renderPngDownload = (
    <CustomButton
      title={'Download'}
      disable={shieldContextValue?.options.svg === ''}
      handleClick={() =>
        imageProcessing(
          shieldContextValue?.options.svg,
          shieldContextValue?.options.title
        )
      }
      icon={<DownloadIcon />}
    />
  )

  return (
    <>
      <ToggleKey
        value={type}
        handleChange={handleChange}
        options={[
          { id: 0, title: 'SVG', value: 'svg' },
          { id: 1, title: 'PNG', value: 'png' },
        ]}
      />

      {type === 'svg' ? renderSvgDownload : renderPngDownload}
    </>
  )
}

export default Download
