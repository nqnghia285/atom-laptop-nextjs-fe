import { createSlice } from '@reduxjs/toolkit'
import { laptopAdapter } from '../entities'
import { laptopsExtraReducers } from '../extra-reducers'

const laptopsSlice = createSlice({
   name: 'laptops',
   initialState: laptopAdapter.getInitialState(),
   reducers: {
      addMany: laptopAdapter.addMany,
      addOne: laptopAdapter.addOne,
      removeAll: laptopAdapter.removeAll,
      removeMany: laptopAdapter.removeMany,
      removeOne: laptopAdapter.removeOne,
      setAll: laptopAdapter.setAll,
      setMany: laptopAdapter.setMany,
      setOne: laptopAdapter.setOne,
      updateMany: laptopAdapter.updateMany,
      updateOne: laptopAdapter.updateOne,
      upsertMany: laptopAdapter.upsertMany,
      upsertOne: laptopAdapter.upsertOne,
   },
   extraReducers: laptopsExtraReducers,
})

export const laptopsReducer = laptopsSlice.reducer

export const laptopsActions = laptopsSlice.actions

export default laptopsSlice
