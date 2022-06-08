/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloError } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useRef, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import Alert, { AlertMethods } from '~/components/Alert'
import IconInputBox from '~/components/IconInputBox'
import SpinnerButton, { SpinnerButtonMethods } from '~/components/SpinnerButton'
import { useAxiosClientSelector } from '~/hooks'
import { IUserInfo, LSKeys } from '~/interface'
import styles from '~/styles/pages/login.module.css'
import { generateErrorMessage } from '~/utilities'
import apolloClient from '~/utilities/apollo-client'

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {},
   }
}

const Login: NextPage = () => {
   const userrnameRef = useRef<HTMLInputElement>(null)
   const passwordRef = useRef<HTMLInputElement>(null)
   const spinnerButtonMethodsRef = useRef<SpinnerButtonMethods>(null)
   const alertMethodsRef = useRef<AlertMethods>(null)
   const router = useRouter()
   const [errorMessage, setErrorMessage] = useState<ApolloError>()
   const [profile, setProfile] = useLocalStorage<IUserInfo | null>(
      LSKeys.PROFILE,
      null
   )
   const [authorization, setAuthorization] = useLocalStorage<string | null>(
      LSKeys.AUTHORIZATION,
      null
   )
   const axiosClient = useAxiosClientSelector()

   if (profile) {
      router.push('/')
   }

   function handleSubmit(ev: FormEvent) {
      ev.preventDefault()

      const spinnerButtonMethods = spinnerButtonMethodsRef.current
      const alertMethods = alertMethodsRef.current
      const username = userrnameRef.current
      const password = passwordRef.current

      if (username && password) {
         spinnerButtonMethods?.showSpinner()
         spinnerButtonMethods?.disabled()

         apolloClient.query.login(username.value, password.value)
            .then(({ data, isSuccess, message }) => {
               if (isSuccess) {
                  setProfile(data.profile as IUserInfo)
                  setAuthorization(data.accessToken as string)
                  router.push('/')
               } else {
                  setErrorMessage({
                     name: 'Message',
                     message: message ?? '',
                     clientErrors: [],
                     extraInfo: [],
                     graphQLErrors: [],
                     networkError: null,
                  })
                  spinnerButtonMethods?.hiddenSpinner()
                  spinnerButtonMethods?.enabled()
                  alertMethods?.show()
               }
            })
            .catch((errors: ApolloError) => {
               setErrorMessage(errors)
               spinnerButtonMethods?.hiddenSpinner()
               spinnerButtonMethods?.enabled()
               alertMethods?.show()
            })        
      }
   }

   useEffect(() => {
      const username = userrnameRef.current
      const password = passwordRef.current
      const alertMethods = alertMethodsRef.current

      function hiddenAlert() {
         alertMethods?.hidden()
      }

      if (username && password) {
         username.onkeydown = hiddenAlert

         password.onkeydown = hiddenAlert
      }
   }, [userrnameRef, passwordRef, alertMethodsRef])

   return (
      <div className={styles['login-container']}>
         <Head>
            <title>Log In</title>
            <meta name='description' content='Login form of Atom website' />
         </Head>

         <form className={styles.login} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Log In</h2>
            <IconInputBox
               ref={userrnameRef}
               id='username'
               icon='fa-solid fa-user'
               type='text'
               color='info'
               size='full'
               fontSize='md'
               padding='md'
               placeholder='Username'
               tabIndex={1}
               required
            />
            <IconInputBox
               ref={passwordRef}
               id='password'
               icon='fa-solid fa-key'
               type='password'
               color='info'
               size='full'
               fontSize='md'
               padding='md'
               placeholder='Password'
               tabIndex={2}
               required
            />
            <div className='flex flex-row w-full h-fit space-x-2'>
               <SpinnerButton
                  ref={spinnerButtonMethodsRef}
                  type='submit'
                  color='info'
                  size='fit'
                  fontSize='md'
                  padding='xl'
               >
                  Login
               </SpinnerButton>
               <span className='flex text-white h-full w-1/2 justify-end self-center'>
                  <Link href={'/'} passHref>
                     <a className='flex hover:text-sky-400 active:text-red-500 space-x-1'>
                        <i className='fa-solid fa-house-chimney self-center'></i>
                        <i className='fa-solid fa-reply self-center'></i>
                     </a>
                  </Link>
               </span>
            </div>
         </form>
         <Alert
            ref={alertMethodsRef}
            type='error'
            title='Error'
            content={generateErrorMessage(errorMessage)}
         />
      </div>
   )
}

export default Login
