import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { Post } from '~/prisma'
import { RootState, store } from '~/app/store'

export const postsAdapter = createEntityAdapter<Post>({
   selectId: (post) => post.id,
   sortComparer: (a, b) => a.id - b.id,
})

export const postsSelectors = postsAdapter.getSelectors<RootState>(
   (state) => state.posts
)

export const postsSelectorFunctions = {
   selectAll: () => postsSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      postsSelectors.selectById(store.getState(), id),
   selectEntities: () => postsSelectors.selectEntities(store.getState()),
   selectIds: () => postsSelectors.selectIds(store.getState()),
   selectTotal: () => postsSelectors.selectTotal(store.getState()),
}
