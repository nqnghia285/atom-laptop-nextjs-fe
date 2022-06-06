import {
   ActionReducerMapBuilder,
   createAsyncThunk,
   EntityState,
} from '@reduxjs/toolkit'
import { Laptop } from '~/prisma'
import { findFirstLaptop, FIND_FIRST_LAPTOP } from '~/utilities/apollo-client'
import { laptopsActions } from '../slices/laptop.slice'

const findFirst = createAsyncThunk(
   'laptops/findFirst',
   async (id: number, { dispatch }) => {
      const laptop = await findFirstLaptop(FIND_FIRST_LAPTOP, {
         where: {
            id,
         },
      })
         .then((res) => (res.isSuccess ? (res.data as Laptop) : null))
         .catch(() => null)

      laptop && dispatch(laptopsActions.addOne)

      return laptop
   }
)

export function laptopsExtraReducers(
   builder: ActionReducerMapBuilder<EntityState<Laptop>>
) {
   builder.addCase(findFirst.fulfilled, (state, action) => {
      console.log(action.payload)
   })
}
