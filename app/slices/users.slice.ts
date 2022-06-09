import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { User } from '~/prisma';
import { usersAdapter } from '../entities';

export interface UsersState extends EntityState<User>, Required<Get> {}

const usersSlice = createSlice({
   name: 'users',
   initialState: usersAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: UsersState, { payload: { users, skip, take } }: PayloadAction<{ users: User[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.addMany(state, users)
      },
      addOne(state: UsersState, { payload: { user, skip, take } }: PayloadAction<{ user: User } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.addOne(state, user)
      },
      removeAll(state: UsersState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return usersAdapter.removeAll(state)
      },
      removeMany(state: UsersState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.removeMany(state, keys)
      },
      removeOne(state: UsersState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.removeOne(state, id)
      },
      setAll(state: UsersState, { payload: { users, skip, take } }: PayloadAction<{ users: User[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.setAll(state, users)
      },
      setMany(state: UsersState, { payload: { users, skip, take } }: PayloadAction<{ users: User[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.setMany(state, users)
      },
      setOne(state: UsersState, { payload: { user, skip, take } }: PayloadAction<{ user: User } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.setOne(state, user)
      },
      updateOne(state: UsersState, { payload: { user, skip, take } }: PayloadAction<{ user: Update<User> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return usersAdapter.updateOne(state, user)
      },
   }
})

export const usersReducer = usersSlice.reducer

export const usersActions = usersSlice.actions

export default usersSlice
