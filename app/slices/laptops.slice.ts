import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { Laptop } from '~/prisma';
import { laptopsAdapter } from '../entities';

export interface LaptopsState extends EntityState<Laptop>, Required<Get> {}

const laptopsSlice = createSlice({
   name: 'laptops',
   initialState: laptopsAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: LaptopsState, { payload: { laptops, skip, take } }: PayloadAction<{ laptops: Laptop[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.addMany(state, laptops)
      },
      addOne(state: LaptopsState, { payload: { laptop, skip, take } }: PayloadAction<{ laptop: Laptop } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.addOne(state, laptop)
      },
      removeAll(state: LaptopsState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return laptopsAdapter.removeAll(state)
      },
      removeMany(state: LaptopsState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.removeMany(state, keys)
      },
      removeOne(state: LaptopsState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.removeOne(state, id)
      },
      setAll(state: LaptopsState, { payload: { laptops, skip, take } }: PayloadAction<{ laptops: Laptop[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.setAll(state, laptops)
      },
      setMany(state: LaptopsState, { payload: { laptops, skip, take } }: PayloadAction<{ laptops: Laptop[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.setMany(state, laptops)
      },
      setOne(state: LaptopsState, { payload: { laptop, skip, take } }: PayloadAction<{ laptop: Laptop } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.setOne(state, laptop)
      },
      updateOne(state: LaptopsState, { payload: { laptop, skip, take } }: PayloadAction<{ laptop: Update<Laptop> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return laptopsAdapter.updateOne(state, laptop)
      },
   }
})

export const laptopsReducer = laptopsSlice.reducer

export const laptopsActions = laptopsSlice.actions

export default laptopsSlice
