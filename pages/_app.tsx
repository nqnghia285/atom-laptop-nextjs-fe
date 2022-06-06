import { ApolloProvider } from '@apollo/client'
import 'antd/dist/antd.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import type { AppProps } from 'next/app'
import wrapper from '~/app/store'
import { apolloClient } from '~/utilities/apollo-client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ApolloProvider client={apolloClient}>
         <Component {...pageProps} />
      </ApolloProvider>
   )
}

export default wrapper.withRedux(MyApp)
