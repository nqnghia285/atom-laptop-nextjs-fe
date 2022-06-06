import { ApolloClient, from, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { createUploadLink } from 'apollo-upload-client'
import { sha256 } from 'crypto-hash'

const uploadLink = createUploadLink({
   uri: process.env.apiUrl,
   credentials: 'include',
   useGETForQueries: true
})

const persistedQueryLink = createPersistedQueryLink({ 
   sha256,
   useGETForHashedQueries: true
 })

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
         console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
         )
      )

   if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const apolloClient = new ApolloClient({
   ssrMode: true,
   link: from([
      errorLink,
      persistedQueryLink, 
      uploadLink
   ]),
   cache: new InMemoryCache(),
   connectToDevTools: true,
   defaultOptions: {
      query: {
         errorPolicy: 'all',
         fetchPolicy: 'cache-first',
      },
      mutate: {
         errorPolicy: 'all',
         fetchPolicy: 'network-only',
      },
      watchQuery: {
         errorPolicy: 'all',
         fetchPolicy: 'cache-first',
      },
   },
})

export const query = apolloClient.query

export const mutate = apolloClient.mutate

export default apolloClient
