/**
 * Title: ShiledListBox
 * Description:
 * Filename: ShiledListBox.tsx
 * Path: /components/utils/ShiledListBox.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 27, 2023
 *
 */

import ShieldContext from '@/utils/ShieldContext'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useContext } from 'react'
import { ListChildComponentProps, VariableSizeList } from 'react-window'

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props
  const dataSet = data[index]
  const someKey = dataSet[0].key // get the key prop from the data set
  // console.log(dataSet)

  return (
    <Typography
      component="li"
      {...dataSet[0]}
      key={someKey} // pass the key prop directly
      noWrap
      style={{ ...style, padding: 8 }}>
      {dataSet[1]}
    </Typography>
  )
}

// const OuterElementContext = React.createContext({})
// eslint-disable-next-line react/display-name
const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(ShieldContext)
  return <div ref={ref} {...props} {...outerProps} />
})

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null)
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true)
    }
  }, [data])
  return ref
}

// Adapter for react-window
const ShiledListBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children, ...other } = props
  const itemData: React.ReactChild[] = []

  ;(children as React.ReactChild[]).forEach(
    (item: React.ReactChild & { children?: React.ReactChild[] }) => {
      itemData.push(item)
      itemData.push(...(item.children || []))
    }
  )

  const theme = useTheme()
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  })
  const itemCount = itemData.length
  const itemSize = smUp ? 36 : 48

  const getChildSize = (child: React.ReactChild) => {
    // eslint-disable-next-line no-prototype-builtins
    if (child.hasOwnProperty('group')) {
      return 48
    }

    return itemSize
  }

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0)
  }

  const gridRef = useResetCache(itemCount)

  return (
    <div ref={ref}>
      <ShieldContext.Provider value={other as any}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * 8}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}>
          {renderRow}
        </VariableSizeList>
      </ShieldContext.Provider>
    </div>
  )
})

export default ShiledListBox
