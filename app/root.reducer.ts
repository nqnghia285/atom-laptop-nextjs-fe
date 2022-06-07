import { axiosClientReducer } from './slices/axios-client.slice'
import { breadcrumbsReducer } from './slices/breadcrumbs.slice'
import { laptopsReducer } from './slices/laptop.slice'

const rootReducer = {
   axiosclient: axiosClientReducer,
   breadcrumbs: breadcrumbsReducer,
   laptops: laptopsReducer,
}

export default rootReducer
