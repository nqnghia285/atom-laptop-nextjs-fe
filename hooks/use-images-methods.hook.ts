import { imagesSelectorFunctions } from '~/app/entities'
import { imagesActions } from '~/app/slices/images.slice'

export function useImagesMethods() {
   return {
      actions: imagesActions,
      selectors: imagesSelectorFunctions
   }
}