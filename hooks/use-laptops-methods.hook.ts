import { laptopsSelectorFunctions } from '~/app/entities'
import { laptopsActions } from '~/app/slices/laptops.slice'

export function useLaptopsMethods() {
   return {
      actions: laptopsActions,
      selectors: laptopsSelectorFunctions
   }
}