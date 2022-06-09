import { purchasesSelectorFunctions } from '~/app/entities'
import { purchasesActions } from '~/app/slices/purchases.slice'

export function usePurchasesMethods() {
   return {
      actions: purchasesActions,
      selectors: purchasesSelectorFunctions
   }
}