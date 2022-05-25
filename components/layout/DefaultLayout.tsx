import clsx from 'clsx'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

export interface DefaultProps {
   className?: string
   head?: ReactNode
   children?: ReactNode
}

function DefaultLayout({ className, children, head }: DefaultProps) {
   return (
      <div
         style={{
            overflowY: 'scroll',
            overflowX: 'hidden',
         }}
         className='max-w-full h-fit flex flex-col justify-center items-center'
      >
         {/* Head */}
         <Head>{head}</Head>

         {/* Header */}
         <Header />

         {/* Content */}
         <main className={clsx('w-full h-fit', className)}>{children}</main>

         {/* Footer */}
         <Footer />
      </div>
   )
}

export default DefaultLayout
