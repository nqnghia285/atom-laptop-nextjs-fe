/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import client from '~/utilities/axios-client'

export type AxiosClient = typeof client

const axiosClientSlice = createSlice({
   name: 'axios-client',
   initialState: client,
   reducers: {
      setAxiosClient(state: AxiosClient, action: PayloadAction<AxiosClient>) {
         return action.payload
      },
      reset() {
         return client
      },
   },
})

export const axiosClientReducer = axiosClientSlice.reducer

export const axiosClientActions = axiosClientSlice.actions

export default axiosClientSlice
