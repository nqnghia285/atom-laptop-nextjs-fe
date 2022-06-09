import { discountsSelectorFunctions } from '~/app/entities'
import { discountsActions } from '~/app/slices/discounts.slice'

export function useDiscountsMethods() {
   return {
      actions: discountsActions,
      selectors: discountsSelectorFunctions
   }
}