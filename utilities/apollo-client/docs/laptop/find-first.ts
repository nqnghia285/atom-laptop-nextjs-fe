import { gql } from '@apollo/client'

export const FIND_FIRST_LAPTOP = gql`
   query (
      $cursor: LaptopWhereUniqueInput
      $distinct: [LaptopScalarFieldEnum!]
      $orderBy: [LaptopOrderByWithRelationAndSearchRelevanceInput!]
      $rejectOnNotFound: Boolean
      $skip: Int
      $take: Int
      $where: LaptopWhereInput
   ) {
      findFirstLaptop(
         cursor: $cursor
         distinct: $distinct
         orderBy: $orderBy
         rejectOnNotFound: $rejectOnNotFound
         skip: $skip
         take: $take
         where: $where
      ) {
         adapter
         battery
         brand
         comments
         cpu
         createdAt
         defaultImage
         defaultImageId
         dimensionsAndWeight
         discounts
         display
         fans
         graphicCard
         id
         images
         keyboard
         material
         model
         origin
         os
         ports
         posts
         price
         priceMap
         priceMapId
         purchases
         ram
         rating
         releaseDate
         security
         sold
         speakers
         specialFeatures
         stopSelling
         storage
         title
         updatedAt
         videos
         webcam
         wifi
      }
   }
`
