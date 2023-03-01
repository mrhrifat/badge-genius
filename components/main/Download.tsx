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

import { ToggleKey } from '@/components/dynamic'
import { svgStringToNode, svgToPngConverter } from '@/lib/utilsLib'
import ShieldContext from '@/utils/ShieldContext'
import DownloadIcon from '@mui/icons-material/Download'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { ChangeEvent, useContext, useState } from 'react'
import DownloadLink from 'react-download-link'

const Download = () => {
  const shieldContextValue = useContext(ShieldContext)
  const [type, setType] = useState('svg')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: ChangeEvent<unknown>, value: any) => {
    setType(value)
  }

  const imageProcessing = (
    value: string | null | undefined,
    title: string | null | undefined
  ) => {
    if (value && title) {
      const svgNode = svgStringToNode(value)
      svgToPngConverter(svgNode, title)
    }
    return false
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
            imageProcessing(
              shieldContextValue?.options.svg,
              shieldContextValue?.options.title
            )
          }>
          Download
        </Button>
      )}
    </Stack>
  )
}

export default Download
