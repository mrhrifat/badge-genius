/**
 * Title: useCopyToClipboard
 * Description:
 * Filename: useCopyToClipboard.tsx
 * Path: /app/hooks/useCopyToClipboard.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 25, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
import { useCallback, useEffect, useState } from 'react'

const useCopyToClipboard = (): [boolean, (text: string) => void] => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback((text: string) => {
    if (text !== null && text !== undefined) {
      navigator.clipboard.writeText(text)
      setIsCopied(true)
    }
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => setIsCopied(false), 1500)
      return () => clearTimeout(timeoutId)
    }
  }, [isCopied])

  return [isCopied, handleCopy]
}

export default useCopyToClipboard
