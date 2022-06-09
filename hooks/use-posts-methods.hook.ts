import { postsSelectorFunctions } from '~/app/entities'
import { postsActions } from '~/app/slices/posts.slice'

export function usePostsMethods() {
   return {
      actions: postsActions,
      selectors: postsSelectorFunctions
   }
}