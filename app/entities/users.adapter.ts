import { createEntityAdapter, EntityId } from '@reduxjs/toolkit'
import { User } from '~/prisma'
import { RootState, store } from '~/app/store'

export const usersAdapter = createEntityAdapter<User>({
   selectId: (user) => user.id,
   sortComparer: (a, b) => a.createdAt.toISOString().localeCompare(b.createdAt.toISOString()),
})

export const usersSelectors = usersAdapter.getSelectors<RootState>(
   (state) => state.users
)

export const usersSelectorFunctions = {
   selectAll: () => usersSelectors.selectAll(store.getState()),
   selectById: (id: EntityId) =>
      usersSelectors.selectById(store.getState(), id),
   selectEntities: () => usersSelectors.selectEntities(store.getState()),
   selectIds: () => usersSelectors.selectIds(store.getState()),
   selectTotal: () => usersSelectors.selectTotal(store.getState()),
}
