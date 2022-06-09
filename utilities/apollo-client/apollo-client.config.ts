import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { sha256 } from 'crypto-hash'
import { LSKeys } from '~/interface'

function getAuthorization() {
   const authToken = typeof window !== 'undefined'
   ? `Bearer ${JSON.parse(window.localStorage.getItem(LSKeys.AUTHORIZATION))}`
   : 'null'
   return authToken
}

const link = new HttpLink({
   uri: process.env.apiUrl,
   credentials: 'include',
   useGETForQueries: true,
   headers: {
      Authorization: getAuthorization()
   }
})

console.log(link)

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
   // ssrMode: true,
   link: from([
      errorLink,
      persistedQueryLink,
      link
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
