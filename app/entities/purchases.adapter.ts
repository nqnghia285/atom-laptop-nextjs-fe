import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { Purchase } from '~/prisma'
import { RootState, store } from '~/app/store'

export const purchasesAdapter = createEntityAdapter<Purchase>({
   selectId: (purchase) => purchase.id,
   sortComparer: (a, b) => a.id - b.id,
})

export const purchasesSelectors = purchasesAdapter.getSelectors<RootState>(
   (state) => state.purchases
)

export const purchasesSelectorFunctions = {
   selectAll: () => purchasesSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      purchasesSelectors.selectById(store.getState(), id),
   selectEntities: () => purchasesSelectors.selectEntities(store.getState()),
   selectIds: () => purchasesSelectors.selectIds(store.getState()),
   selectTotal: () => purchasesSelectors.selectTotal(store.getState()),
}
