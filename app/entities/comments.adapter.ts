import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { Comment } from '~/prisma'
import { RootState, store } from '~/app/store'

export const commentsAdapter = createEntityAdapter<Comment>({
   selectId: (comment) => comment.id,
   sortComparer: (a, b) => a.id - b.id,
})

export const commentsSelectors = commentsAdapter.getSelectors<RootState>(
   (state) => state.comments
)

export const commentsSelectorFunctions = {
   selectAll: () => commentsSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      commentsSelectors.selectById(store.getState(), id),
   selectEntities: () => commentsSelectors.selectEntities(store.getState()),
   selectIds: () => commentsSelectors.selectIds(store.getState()),
   selectTotal: () => commentsSelectors.selectTotal(store.getState()),
}
