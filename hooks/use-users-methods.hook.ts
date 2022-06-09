import { usersSelectorFunctions } from '~/app/entities'
import { usersActions } from '~/app/slices/users.slice'

export function useUsersMethods() {
   return {
      actions: usersActions,
      selectors: usersSelectorFunctions
   }
}