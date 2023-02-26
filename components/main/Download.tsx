/**
 * Title: Download
 * Description:
 * Filename: Download.tsx
 * Path: /components/main/Download.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 25, 2023
 *
 */
'use client'

import ShieldContext from '@/utils/ShieldContext'
import DownloadIcon from '@mui/icons-material/Download'
import { Button, Stack } from '@mui/material'
import { saveAs } from 'file-saver'
import { ChangeEvent, useContext, useState } from 'react'
import DownloadLink from 'react-download-link'
import ToggleKey from '../dynamic/ToggleKey'
import SvgToImg from '../utils/SvgToImg'

const Download = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [type, setType] = useState('svg')

  const downloadPNG = (svg: string | Blob, fileName: string) => {
    SvgToImg({
      svg,
      mimetype: 'image/png',
      width: 250,
      height: 250,
      quality: 1,
      outputFormat: 'base64',
    })
      .then((outputData) => {
        const data = atob(outputData as string)
        const dataArray = new Uint8Array(data.length)

        for (let i = 0; i < data.length; i++) {
          dataArray[i] = data.charCodeAt(i)
        }

        const blob = new Blob([dataArray], { type: 'image/png' })
        saveAs(blob, fileName)
      })
      .catch(() => new Error('SVG to PNG Conversion failed!'))
  }

  const handleChange = (event: ChangeEvent<unknown>, value: any) => {
    setType(value)
  }

  return (
    <Stack direction="column" gap={2}>
      <ToggleKey
        value={type}
        handleChange={handleChange}
        options={[
          { id: 0, title: 'SVG', value: 'svg' },
          { id: 1, title: 'PNG', value: 'png' },
        ]}
      />

      {/* <ToggleButtonGroup
                color="primary"
                value={type}
                exclusive
                onChange={handleChange}
                aria-label="Platform">
                <ToggleButton value="svg" sx={{ padding: '5px 20px' }}>SVG</ToggleButton>
                <ToggleButton value="png" sx={{ padding: '5px 20px' }}>PNG</ToggleButton>
            </ToggleButtonGroup> */}

      {type === 'svg' ? (
        <>
          <DownloadLink
            style={{ borderRadius: '0 0 14px 0', textDecoration: 'none' }}
            label={
              <Button
                disabled={shieldContextValue?.options.svg === null}
                fullWidth
                variant="contained"
                endIcon={<DownloadIcon />}>
                Download
              </Button>
            }
            filename={`${shieldContextValue?.options.title}.${type}`}
            exportFile={() => shieldContextValue?.options?.svg}
          />
        </>
      ) : (
        <Button
          fullWidth
          disabled={shieldContextValue?.options.svg === null}
          variant="contained"
          endIcon={<DownloadIcon />}
          onClick={() =>
            shieldContextValue?.options?.svg &&
            downloadPNG(
              shieldContextValue?.options?.svg,
              `${shieldContextValue?.options?.title}.${type}`
            )
          }>
          Download
        </Button>
      )}
    </Stack>
  )
}

export default Download
