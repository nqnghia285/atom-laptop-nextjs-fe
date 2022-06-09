import { commentsSelectorFunctions } from '~/app/entities'
import { commentsActions } from '~/app/slices/comments.slice'

export function useCommentsMethods() {
   return {
      actions: commentsActions,
      selectors: commentsSelectorFunctions
   }
}