import { DocumentNode } from 'graphql'
import { Response } from '~/interface'
import { Prisma } from '~/prisma'
import { query } from '../../apollo-client.config'

export function findFirstLaptop(
   document: DocumentNode,
   args: Prisma.LaptopFindFirstArgs
) {
   return query({
      query: document,
      variables: args,
   }).then<Response>((res) => {
      if (res.data) {
         return res.data.findFirstLaptop
      } else {
         return {
            action: 'findFirstLaptop',
            data: null,
            isSuccess: false,
            errors: res.errors,
            message: res.errors?.[0]?.message,
         }
      }
   })
}
