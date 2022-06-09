import { useSelector } from 'react-redux'
import { ApolloClient } from '~/app/slices/apollo-client.slice'
import { RootState } from '~/app/store'

export function useApolloClientSelector() {
   return useSelector<RootState, ApolloClient>((state) => state.apolloClient)
}
