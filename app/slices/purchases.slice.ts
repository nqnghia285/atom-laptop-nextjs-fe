import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { Purchase } from '~/prisma';
import { purchasesAdapter } from '../entities';

export interface PurchasesState extends EntityState<Purchase>, Required<Get> {}

const purchasesSlice = createSlice({
   name: 'purchases',
   initialState: purchasesAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: PurchasesState, { payload: { purchases, skip, take } }: PayloadAction<{ purchases: Purchase[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.addMany(state, purchases)
      },
      addOne(state: PurchasesState, { payload: { purchase, skip, take } }: PayloadAction<{ purchase: Purchase } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.addOne(state, purchase)
      },
      removeAll(state: PurchasesState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return purchasesAdapter.removeAll(state)
      },
      removeMany(state: PurchasesState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.removeMany(state, keys)
      },
      removeOne(state: PurchasesState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.removeOne(state, id)
      },
      setAll(state: PurchasesState, { payload: { purchases, skip, take } }: PayloadAction<{ purchases: Purchase[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.setAll(state, purchases)
      },
      setMany(state: PurchasesState, { payload: { purchases, skip, take } }: PayloadAction<{ purchases: Purchase[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.setMany(state, purchases)
      },
      setOne(state: PurchasesState, { payload: { purchase, skip, take } }: PayloadAction<{ purchase: Purchase } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.setOne(state, purchase)
      },
      updateOne(state: PurchasesState, { payload: { purchase, skip, take } }: PayloadAction<{ purchase: Update<Purchase> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return purchasesAdapter.updateOne(state, purchase)
      },
   }
})

export const purchasesReducer = purchasesSlice.reducer

export const purchasesActions = purchasesSlice.actions

export default purchasesSlice
