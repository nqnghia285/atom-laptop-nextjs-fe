import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { Discount } from '~/prisma';
import { discountsAdapter } from '../entities';

export interface DiscountsState extends EntityState<Discount>, Required<Get> {}

const discountsSlice = createSlice({
   name: 'discounts',
   initialState: discountsAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: DiscountsState, { payload: { discounts, skip, take } }: PayloadAction<{ discounts: Discount[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.addMany(state, discounts)
      },
      addOne(state: DiscountsState, { payload: { discount, skip, take } }: PayloadAction<{ discount: Discount } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.addOne(state, discount)
      },
      removeAll(state: DiscountsState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return discountsAdapter.removeAll(state)
      },
      removeMany(state: DiscountsState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.removeMany(state, keys)
      },
      removeOne(state: DiscountsState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.removeOne(state, id)
      },
      setAll(state: DiscountsState, { payload: { discounts, skip, take } }: PayloadAction<{ discounts: Discount[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.setAll(state, discounts)
      },
      setMany(state: DiscountsState, { payload: { discounts, skip, take } }: PayloadAction<{ discounts: Discount[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.setMany(state, discounts)
      },
      setOne(state: DiscountsState, { payload: { discount, skip, take } }: PayloadAction<{ discount: Discount } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.setOne(state, discount)
      },
      updateOne(state: DiscountsState, { payload: { discount, skip, take } }: PayloadAction<{ discount: Update<Discount> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return discountsAdapter.updateOne(state, discount)
      },
   }
})

export const discountsReducer = discountsSlice.reducer

export const discountsActions = discountsSlice.actions

export default discountsSlice
