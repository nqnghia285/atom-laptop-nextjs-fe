import clsx from 'clsx'
import {
   forwardRef,
   Ref,
   useEffect,
   useImperativeHandle,
   useRef,
   useState,
} from 'react'
import Input from '~/components/Input'
import { useSearch } from '~/hooks'
import styles from '~/styles/components/header/top-header/search.module.css'
import SuggestBox from './SuggestBox'

export interface SearchMethods {
   readonly setOnChange: (callback: (event: Event) => any) => void
   readonly setOnKeyDown: (callback: (event: KeyboardEvent) => any) => any
   readonly setOnSubmit: (callback: (event: SubmitEvent) => any) => void
   readonly value: () => string | undefined
}

function Search(_props: object, ref: Ref<SearchMethods>) {
   const searchFormRef = useRef<HTMLFormElement>(null)
   const searchTextRef = useRef<HTMLInputElement>(null)
   const [key, setKey] = useState('')

   const debouncedValue = useSearch(key)

   useEffect(() => {
      console.log(debouncedValue)
   }, [debouncedValue])

   useEffect(() => {
      const searchText = searchTextRef.current

      function handleKeyUp(ev: KeyboardEvent) {
         setKey((ev.target as HTMLInputElement).value)
      }

      if (searchText) {
         searchText.addEventListener('keyup', handleKeyUp, true)
      }

      return () => searchText?.removeEventListener('keyup', handleKeyUp, true)
   }, [searchTextRef, setKey])

   useImperativeHandle(
      ref,
      () => ({
         setOnChange(calllback) {
            const searchText = searchTextRef.current
            if (searchText) {
               searchText.onchange = calllback
            }
         },
         setOnKeyDown(callback) {
            const searchText = searchTextRef.current
            if (searchText) {
               searchText.onkeydown = callback
            }
         },
         setOnSubmit(callback) {
            const searchForm = searchFormRef.current
            if (searchForm) {
               searchForm.onsubmit = callback
            }
         },
         value() {
            const searchText = searchTextRef.current
            return searchText?.value
         },
      }),
      [searchFormRef, searchTextRef]
   )

   return (
      <>
         <form ref={searchFormRef} role='search' className={styles.search}>
            <div className={styles['search-text']}>
               <Input
                  ref={searchTextRef}
                  type='search'
                  color='info'
                  fontSize='sm'
                  size='full'
                  padding='md'
                  placeholder='Laptop model...'
                  aria-autocomplete='both'
               />

               <SuggestBox searchText={searchTextRef.current?.value ?? ''} />
            </div>

            <button type={'submit'}>
               <i
                  className={clsx(
                     styles['search-icon'],
                     'fa-solid fa-magnifying-glass'
                  )}
               ></i>
            </button>
         </form>
      </>
   )
}

const ForwardRefToSearch = forwardRef(Search)

export default ForwardRefToSearch
