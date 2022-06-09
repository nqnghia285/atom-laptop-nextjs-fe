/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { client } from '~/utilities/apollo-client'

export type ApolloClient = typeof client

const apolloClientSlice = createSlice({
   name: 'apollo-client',
   initialState: client,
   reducers: {
      setAxiosClient(state: ApolloClient, action: PayloadAction<ApolloClient>) {
         return action.payload
      },
      reset() {
         return client
      },
   },
})

export const apolloClientReducer = apolloClientSlice.reducer

export const apolloClientActions = apolloClientSlice.actions

export default apolloClientSlice
