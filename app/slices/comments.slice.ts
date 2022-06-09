import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { Comment } from '~/prisma';
import { commentsAdapter } from '../entities';
   
export interface CommentsState extends EntityState<Comment>, Required<Get> {}

const commentsSlice = createSlice({
   name: 'comments',
   initialState: commentsAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: CommentsState, { payload: { comments, skip, take } }: PayloadAction<{ comments: Comment[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.addMany(state, comments)
      },
      addOne(state: CommentsState, { payload: { comment, skip, take } }: PayloadAction<{ comment: Comment } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.addOne(state, comment)
      },
      removeAll(state: CommentsState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return commentsAdapter.removeAll(state)
      },
      removeMany(state: CommentsState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.removeMany(state, keys)
      },
      removeOne(state: CommentsState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.removeOne(state, id)
      },
      setAll(state: CommentsState, { payload: { comments, skip, take } }: PayloadAction<{ comments: Comment[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.setAll(state, comments)
      },
      setMany(state: CommentsState, { payload: { comments, skip, take } }: PayloadAction<{ comments: Comment[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.setMany(state, comments)
      },
      setOne(state: CommentsState, { payload: { comment, skip, take } }: PayloadAction<{ comment: Comment } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.setOne(state, comment)
      },
      updateOne(state: CommentsState, { payload: { comment, skip, take } }: PayloadAction<{ comment: Update<Comment> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return commentsAdapter.updateOne(state, comment)
      },
   }
})

export const commentsReducer = commentsSlice.reducer

export const commentsActions = commentsSlice.actions

export default commentsSlice
