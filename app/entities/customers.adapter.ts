import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { Customer } from '~/prisma'
import { RootState, store } from '~/app/store'

export const customersAdapter = createEntityAdapter<Customer>({
   selectId: (customer) => customer.id,
   sortComparer: (a, b) => a.createdAt.toISOString().localeCompare(b.createdAt.toISOString()),
})

export const customersSelectors = customersAdapter.getSelectors<RootState>(
   (state) => state.customers
)

export const customersSelectorFunctions = {
   selectAll: () => customersSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      customersSelectors.selectById(store.getState(), id),
   selectEntities: () => customersSelectors.selectEntities(store.getState()),
   selectIds: () => customersSelectors.selectIds(store.getState()),
   selectTotal: () => customersSelectors.selectTotal(store.getState()),
}
