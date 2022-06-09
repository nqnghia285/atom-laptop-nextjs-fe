import { customersSelectorFunctions } from '~/app/entities'
import { customersActions } from '~/app/slices/customers.slice'

export function useCustomersMethods() {
   return {
      actions: customersActions,
      selectors: customersSelectorFunctions
   }
}