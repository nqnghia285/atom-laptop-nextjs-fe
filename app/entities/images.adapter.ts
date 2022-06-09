import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { Image } from '~/prisma'
import { RootState, store } from '~/app/store'

export const imagesAdapter = createEntityAdapter<Image>({
   selectId: (image) => image.id,
   sortComparer: (a, b) => a.id - b.id,
})

export const imagesSelectors = imagesAdapter.getSelectors<RootState>(
   (state) => state.images
)

export const imagesSelectorFunctions = {
   selectAll: () => imagesSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      imagesSelectors.selectById(store.getState(), id),
   selectEntities: () => imagesSelectors.selectEntities(store.getState()),
   selectIds: () => imagesSelectors.selectIds(store.getState()),
   selectTotal: () => imagesSelectors.selectTotal(store.getState()),
}
