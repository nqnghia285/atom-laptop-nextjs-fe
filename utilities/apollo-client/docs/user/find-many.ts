import { gql } from '@apollo/client'

export const FIND_MANY_USER = gql`
   query (
      $cursor: UserWhereUniqueInput
      $distinct: [UserScalarFieldEnum!]
      $orderBy: [UserOrderByWithRelationAndSearchRelevanceInput!]
      $skip: Int
      $take: Int
      $where: UserWhereInput
   ) {
      findManyUser(
         cursor: $cursor
         distinct: $distinct
         orderBy: $orderBy
         skip: $skip
         take: $take
         where: $where
      ) {
         createdAt
         id
         profile {
            address
            email
            fullname
            gender
            phone
         }
         role
         updatedAt
      }
   }
`
