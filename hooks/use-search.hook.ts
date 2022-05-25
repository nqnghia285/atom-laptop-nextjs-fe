import { useEffect, useState } from 'react'

export function useSearch(key: string, delay = 500) {
   const [debouncedValue, setDebouncedValue] = useState(key)

   useEffect(() => {
      const timeOutIndex = setTimeout(() => setDebouncedValue(key), delay)

      return () => {
         clearTimeout(timeOutIndex)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [key])

   return debouncedValue
}
