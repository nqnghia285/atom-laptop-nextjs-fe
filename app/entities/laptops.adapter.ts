import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { Laptop } from 'prisma'
import { RootState, store } from '../store'

export const laptopsAdapter = createEntityAdapter<Laptop>({
   selectId: (laptop) => laptop.id,
   sortComparer: (a, b) => a.id - b.id,
})

export const laptopsSelectors = laptopsAdapter.getSelectors<RootState>(
   (state) => state.laptops
)

export const laptopsSelectorFunctions = {
   selectAll: () => laptopsSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      laptopsSelectors.selectById(store.getState(), id),
   selectEntities: () => laptopsSelectors.selectEntities(store.getState()),
   selectIds: () => laptopsSelectors.selectIds(store.getState()),
   selectTotal: () => laptopsSelectors.selectTotal(store.getState()),
}
