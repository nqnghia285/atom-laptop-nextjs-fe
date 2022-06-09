import type { NextPage } from 'next'
import { ImageProps } from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { breadcrumbsActions } from '~/app/slices/breadcrumbs.slice'
import { useAppDispatch } from '~/app/store'
import Alert, { AlertMethods } from '~/components/Alert'
import { BreadcrumbsPath } from '~/components/Breadcrumbs'
import Button from '~/components/Button'
import Card from '~/components/Card'
import { HeaderMethods } from '~/components/Header'
import DefaultLayout from '~/components/layout/DefaultLayout'
import MessageIcon from '~/components/Message/MessageIcon'
import { useApolloClientSelector, useUsersMethods } from '~/hooks'
import { User } from '~/prisma'
import { FIND_MANY_USER } from '~/utilities/apollo-client'
import { usersSelectors } from '~/app/entities'
import { store, RootState } from '~/app/store'

const Home: NextPage = () => {
   const messageRef = useRef<HTMLElement>(null)
   const headerMethodsRef = useRef<HeaderMethods>(null)
   const loginBGPath = useMemo(() => '/images/bg-login.jpg', [])
   const slideChildren = useMemo<ImageProps[]>(
      () => [
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
      ],
      [loginBGPath]
   )

   const breadcrumbsPath = {
      homePiece: {
         icon: 'fa-solid fa-house-chimney',
         path: '/',
      },
   } as BreadcrumbsPath

   const dispath = useAppDispatch()

   dispath(breadcrumbsActions.setBreadCrumbs(breadcrumbsPath))

   const usersMethods = useUsersMethods()
   const alertMethodsRef = useRef<AlertMethods>(null)
   const btnRef = useRef<HTMLButtonElement>(null)
   const dispatch = useDispatch()
   const apolloClient = useApolloClientSelector()
   const [content, setContent] = useState('')

   useEffect(() => {
      const alertMethods = alertMethodsRef.current
      alertMethods?.show()
      const btn = btnRef.current
      if (btn) {
         btn.onclick = async () => {
            const res = await apolloClient.query.user.findMany(FIND_MANY_USER, {
               skip: 0,
               take: 10
            }, 'network-only')

            console.log('findManyUser', res)

            if (res?.isSuccess) {
               dispatch(usersMethods.actions.addMany(res.data as User[]))
               setContent(JSON.stringify(usersMethods.selectors.selectAll()))
            }
         }
      }
   }, [alertMethodsRef, apolloClient.query.user, dispatch, usersMethods.actions, usersMethods.selectors])

   return (
      <DefaultLayout
         className=''
         head={
            <>
               <title>Atom</title>
               <meta name='description' content='Atom is a shop loptop' />
               <link rel='icon' href='/favicon.ico' />
            </>
         }
      >
         <MessageIcon ref={messageRef} />
         {/* <CarouselWithThumbsController
            slideChildren={slideChildren}
            className='fixed top-32 left-96 w-[300px] h-fit p-3 bg-white'
         />
         <CarouselWithAutoSwipe
            slideChildren={slideChildren}
            className='fixed top-96 left-96 w-[300px] h-fit p-3 bg-white'
         /> */}
         <Card
            title='Card name'
            description='sdffgb gghghghfghhh ghh'
            imageProps={{
               src: loginBGPath,
               alt: '',
               width: '120px',
               height: '60px',
            }}
            titleClassName='text-lg my-0 mb-0'
            descriptionClassName='text-sm my-0 mb-0'
            containerClassName='p-2 m-0'
         />
         <Alert
            ref={alertMethodsRef}
            type='info'
            title='User list'
            content={content}
         />
         <Button ref={btnRef}>Fetch</Button>
      </DefaultLayout>
   )
}

export default Home
