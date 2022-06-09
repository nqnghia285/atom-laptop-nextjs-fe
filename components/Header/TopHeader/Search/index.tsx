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
   const searchTextInputRef = useRef<HTMLInputElement>(null)
   const [key, setKey] = useState('')

   const searchText = useSearch(key)

   useEffect(() => {
      console.log(searchText)
   }, [searchText])

   useEffect(() => {
      const searchTextInput = searchTextInputRef.current

      function handleKeyUp(ev: KeyboardEvent) {
         setKey((ev.target as HTMLInputElement).value)
      }

      if (searchTextInput) {
         searchTextInput.addEventListener('keyup', handleKeyUp, true)
      }

      return () => searchTextInput?.removeEventListener('keyup', handleKeyUp, true)
   }, [searchTextInputRef, setKey])

   useImperativeHandle(
      ref,
      () => ({
         setOnChange(calllback) {
            const searchTextInput = searchTextInputRef.current
            if (searchTextInput) {
               searchTextInput.onchange = calllback
            }
         },
         setOnKeyDown(callback) {
            const searchTextInput = searchTextInputRef.current
            if (searchTextInput) {
               searchTextInput.onkeydown = callback
            }
         },
         setOnSubmit(callback) {
            const searchForm = searchFormRef.current
            if (searchForm) {
               searchForm.onsubmit = callback
            }
         },
         value() {
            const searchTextInput = searchTextInputRef.current
            return searchTextInput?.value
         },
      }),
      [searchFormRef, searchTextInputRef]
   )

   return (
      <>
         <form ref={searchFormRef} role='search' className={styles.search}>
            <div className={styles['search-text']}>
               <Input
                  ref={searchTextInputRef}
                  type='search'
                  color='info'
                  fontSize='sm'
                  size='full'
                  padding='md'
                  placeholder='Laptop model...'
                  aria-autocomplete='both'
               />

               <SuggestBox searchText={searchText} />
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
