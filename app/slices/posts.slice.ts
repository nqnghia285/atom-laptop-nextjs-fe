import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { Post } from '~/prisma';
import { postsAdapter } from '../entities';

export interface PostsState extends EntityState<Post>, Required<Get> {}

const postsSlice = createSlice({
   name: 'posts',
   initialState: postsAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: PostsState, { payload: { posts, skip, take } }: PayloadAction<{ posts: Post[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.addMany(state, posts)
      },
      addOne(state: PostsState, { payload: { post, skip, take } }: PayloadAction<{ post: Post } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.addOne(state, post)
      },
      removeAll(state: PostsState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return postsAdapter.removeAll(state)
      },
      removeMany(state: PostsState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.removeMany(state, keys)
      },
      removeOne(state: PostsState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.removeOne(state, id)
      },
      setAll(state: PostsState, { payload: { posts, skip, take } }: PayloadAction<{ posts: Post[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.setAll(state, posts)
      },
      setMany(state: PostsState, { payload: { posts, skip, take } }: PayloadAction<{ posts: Post[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.setMany(state, posts)
      },
      setOne(state: PostsState, { payload: { post, skip, take } }: PayloadAction<{ post: Post } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.setOne(state, post)
      },
      updateOne(state: PostsState, { payload: { post, skip, take } }: PayloadAction<{ post: Update<Post> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return postsAdapter.updateOne(state, post)
      },
   }
})

export const postsReducer = postsSlice.reducer

export const postsActions = postsSlice.actions

export default postsSlice
