import { breadcrumbsReducer } from './slices/breadcrumbs.slice'
import { laptopsReducer } from './slices/laptop.slice'

const rootReducer = {
   breadcrumbs: breadcrumbsReducer,
   laptops: laptopsReducer,
}

export default rootReducer
