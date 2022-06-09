import { 
   apolloClientReducer, 
   axiosClientReducer, 
   breadcrumbsReducer, 
   commentsReducer, 
   customersReducer, 
   discountsReducer, 
   imagesReducer, 
   laptopsReducer, 
   postsReducer, 
   purchasesReducer, 
   usersReducer 
} from './slices'

const rootReducer = {
   apolloClient: apolloClientReducer,
   axiosclient: axiosClientReducer,
   breadcrumbs: breadcrumbsReducer,
   comments: commentsReducer,
   customers: customersReducer,
   discounts: discountsReducer,
   images: imagesReducer,
   laptops: laptopsReducer,
   posts: postsReducer,
   purchases: purchasesReducer,
   users: usersReducer,
}

export default rootReducer
