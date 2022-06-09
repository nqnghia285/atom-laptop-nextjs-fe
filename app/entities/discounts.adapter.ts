import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { Discount } from '~/prisma'
import { RootState, store } from '~/app/store'

export const discountsAdapter = createEntityAdapter<Discount>({
   selectId: (discount) => discount.id,
   sortComparer: (a, b) => a.id - b.id,
})

export const discountsSelectors = discountsAdapter.getSelectors<RootState>(
   (state) => state.discounts
)

export const discountsSelectorFunctions = {
   selectAll: () => discountsSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      discountsSelectors.selectById(store.getState(), id),
   selectEntities: () => discountsSelectors.selectEntities(store.getState()),
   selectIds: () => discountsSelectors.selectIds(store.getState()),
   selectTotal: () => discountsSelectors.selectTotal(store.getState()),
}
