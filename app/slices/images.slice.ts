import { createSlice, EntityId, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';
import { Get } from '~/interface';
import { Image } from '~/prisma';
import { imagesAdapter } from '../entities';

export interface ImagesState extends EntityState<Image>, Required<Get> {}

const imagesSlice = createSlice({
   name: 'images',
   initialState: imagesAdapter.getInitialState({
      skip: 0,
      take: 6,
   }),
   reducers: {
      addMany(state: ImagesState, { payload: { images, skip, take } }: PayloadAction<{ images: Image[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.addMany(state, images)
      },
      addOne(state: ImagesState, { payload: { image, skip, take } }: PayloadAction<{ image: Image } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.addOne(state, image)
      },
      removeAll(state: ImagesState, { payload: { skip, take } }: PayloadAction<Get>) {
         if (skip) { state.skip = skip }
         else { state.skip = 0 }

         if (take) { state.take = take }
         else { state.take = 6 }

         return imagesAdapter.removeAll(state)
      },
      removeMany(state: ImagesState, { payload: { keys, skip, take } }: PayloadAction<{ keys: EntityId[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.removeMany(state, keys)
      },
      removeOne(state: ImagesState, { payload: { id, skip, take }}: PayloadAction<{id: EntityId} & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.removeOne(state, id)
      },
      setAll(state: ImagesState, { payload: { images, skip, take } }: PayloadAction<{ images: Image[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.setAll(state, images)
      },
      setMany(state: ImagesState, { payload: { images, skip, take } }: PayloadAction<{ images: Image[] } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.setMany(state, images)
      },
      setOne(state: ImagesState, { payload: { image, skip, take } }: PayloadAction<{ image: Image } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.setOne(state, image)
      },
      updateOne(state: ImagesState, { payload: { image, skip, take } }: PayloadAction<{ image: Update<Image> } & Get>) {
         if (skip) state.skip = skip
         if (take) state.take = take
         return imagesAdapter.updateOne(state, image)
      },
   }
})

export const imagesReducer = imagesSlice.reducer

export const imagesActions = imagesSlice.actions

export default imagesSlice
