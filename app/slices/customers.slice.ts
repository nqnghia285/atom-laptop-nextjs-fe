import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { Customer } from '~/prisma';
import { customersAdapter } from '../entities';

export interface CustomersState extends EntityState<Customer>, Required<Get> {}

const customersSlice = createSlice({
   name: 'customers',
   initialState: customersAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: CustomersState, { payload: { customers, skip, take } }: PayloadAction<{ customers: Customer[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.addMany(state, customers)
      },
      addOne(state: CustomersState, { payload: { customer, skip, take } }: PayloadAction<{ customer: Customer } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.addOne(state, customer)
      },
      removeAll(state: CustomersState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return customersAdapter.removeAll(state)
      },
      removeMany(state: CustomersState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.removeMany(state, keys)
      },
      removeOne(state: CustomersState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.removeOne(state, id)
      },
      setAll(state: CustomersState, { payload: { customers, skip, take } }: PayloadAction<{ customers: Customer[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.setAll(state, customers)
      },
      setMany(state: CustomersState, { payload: { customers, skip, take } }: PayloadAction<{ customers: Customer[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.setMany(state, customers)
      },
      setOne(state: CustomersState, { payload: { customer, skip, take } }: PayloadAction<{ customer: Customer } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.setOne(state, customer)
      },
      updateOne(state: CustomersState, { payload: { customer, skip, take } }: PayloadAction<{ customer: Update<Customer> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return customersAdapter.updateOne(state, customer)
      },
   }
})

export const customersReducer = customersSlice.reducer

export const customersActions = customersSlice.actions

export default customersSlice
