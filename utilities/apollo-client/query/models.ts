import { FetchPolicy } from '@apollo/client'
import { DocumentNode } from 'graphql'
import { Prisma } from '~/prisma'
import { handleAction } from '~/utilities/apollo-client'

/* Comment */
export function aggregateComment(
   document: DocumentNode,
   args: Prisma.CommentAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Comment', document, args, fetchPolicy)
}

export function countComment(
   document: DocumentNode,
   args: Prisma.CommentCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Comment', document, args, fetchPolicy)
}

export function findFirstComment(
   document: DocumentNode,
   args: Prisma.CommentFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Comment', document, args, fetchPolicy)
}

export function findManyComment(
   document: DocumentNode,
   args: Prisma.CommentFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Comment', document, args, fetchPolicy)
}

export function findUniqueComment(
   document: DocumentNode,
   args: Prisma.CommentFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Comment', document, args, fetchPolicy)
}

export function groupByComment(
   document: DocumentNode,
   args: Prisma.CommentGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Comment', document, args, fetchPolicy)
}

/* Customer */
export function aggregateCustomer(
   document: DocumentNode,
   args: Prisma.CustomerAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Customer', document, args, fetchPolicy)
}

export function countCustomer(
   document: DocumentNode,
   args: Prisma.CustomerCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Customer', document, args, fetchPolicy)
}

export function findFirstCustomer(
   document: DocumentNode,
   args: Prisma.CustomerFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Customer', document, args, fetchPolicy)
}

export function findManyCustomer(
   document: DocumentNode,
   args: Prisma.CustomerFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Customer', document, args, fetchPolicy)
}

export function findUniqueCustomer(
   document: DocumentNode,
   args: Prisma.CustomerFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Customer', document, args, fetchPolicy)
}

export function groupByCustomer(
   document: DocumentNode,
   args: Prisma.CustomerGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Customer', document, args, fetchPolicy)
}

/* Discount */
export function aggregateDiscount(
   document: DocumentNode,
   args: Prisma.DiscountAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Discount', document, args, fetchPolicy)
}

export function countDiscount(
   document: DocumentNode,
   args: Prisma.DiscountCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Discount', document, args, fetchPolicy)
}

export function findFirstDiscount(
   document: DocumentNode,
   args: Prisma.DiscountFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Discount', document, args, fetchPolicy)
}

export function findManyDiscount(
   document: DocumentNode,
   args: Prisma.DiscountFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Discount', document, args, fetchPolicy)
}

export function findUniqueDiscount(
   document: DocumentNode,
   args: Prisma.DiscountFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Discount', document, args, fetchPolicy)
}

export function groupByDiscount(
   document: DocumentNode,
   args: Prisma.DiscountGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Discount', document, args, fetchPolicy)
}

/* Image */
export function aggregateImage(
   document: DocumentNode,
   args: Prisma.ImageAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Image', document, args, fetchPolicy)
}

export function countImage(
   document: DocumentNode,
   args: Prisma.ImageCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Image', document, args, fetchPolicy)
}

export function findFirstImage(
   document: DocumentNode,
   args: Prisma.ImageFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Image', document, args, fetchPolicy)
}

export function findManyImage(
   document: DocumentNode,
   args: Prisma.ImageFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Image', document, args, fetchPolicy)
}

export function findUniqueImage(
   document: DocumentNode,
   args: Prisma.ImageFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Image', document, args, fetchPolicy)
}

export function groupByImage(
   document: DocumentNode,
   args: Prisma.ImageGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Image', document, args, fetchPolicy)
}

/* Laptop */
export function aggregateLaptop(
   document: DocumentNode,
   args: Prisma.LaptopAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Laptop', document, args, fetchPolicy)
}

export function countLaptop(
   document: DocumentNode,
   args: Prisma.LaptopCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Laptop', document, args, fetchPolicy)
}

export function findFirstLaptop(
   document: DocumentNode,
   args: Prisma.LaptopFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Laptop', document, args, fetchPolicy)
}

export function findManyLaptop(
   document: DocumentNode,
   args: Prisma.LaptopFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Laptop', document, args, fetchPolicy)
}

export function findUniqueLaptop(
   document: DocumentNode,
   args: Prisma.LaptopFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Laptop', document, args, fetchPolicy)
}

export function groupByLaptop(
   document: DocumentNode,
   args: Prisma.LaptopGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Laptop', document, args, fetchPolicy)
}

/* Passage */
export function aggregatePassage(
   document: DocumentNode,
   args: Prisma.PassageAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Passage', document, args, fetchPolicy)
}

export function countPassage(
   document: DocumentNode,
   args: Prisma.PassageCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Passage', document, args, fetchPolicy)
}

export function findFirstPassage(
   document: DocumentNode,
   args: Prisma.PassageFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Passage', document, args, fetchPolicy)
}

export function findManyPassage(
   document: DocumentNode,
   args: Prisma.PassageFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Passage', document, args, fetchPolicy)
}

export function findUniquePassage(
   document: DocumentNode,
   args: Prisma.PassageFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Passage', document, args, fetchPolicy)
}

export function groupByPassage(
   document: DocumentNode,
   args: Prisma.PassageGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Passage', document, args, fetchPolicy)
}

/* Person */
export function aggregatePerson(
   document: DocumentNode,
   args: Prisma.PersonAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Person', document, args, fetchPolicy)
}

export function countPerson(
   document: DocumentNode,
   args: Prisma.PersonCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Person', document, args, fetchPolicy)
}

export function findFirstPerson(
   document: DocumentNode,
   args: Prisma.PersonFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Person', document, args, fetchPolicy)
}

export function findManyPerson(
   document: DocumentNode,
   args: Prisma.PersonFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Person', document, args, fetchPolicy)
}

export function findUniquePerson(
   document: DocumentNode,
   args: Prisma.PersonFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Person', document, args, fetchPolicy)
}

export function groupByPerson(
   document: DocumentNode,
   args: Prisma.PersonGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Person', document, args, fetchPolicy)
}

/* Post */
export function aggregatePost(
   document: DocumentNode,
   args: Prisma.PostAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Post', document, args, fetchPolicy)
}

export function countPost(
   document: DocumentNode,
   args: Prisma.PostCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Post', document, args, fetchPolicy)
}

export function findFirstPost(
   document: DocumentNode,
   args: Prisma.PostFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Post', document, args, fetchPolicy)
}

export function findManyPost(
   document: DocumentNode,
   args: Prisma.PostFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Post', document, args, fetchPolicy)
}

export function findUniquePost(
   document: DocumentNode,
   args: Prisma.PostFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Post', document, args, fetchPolicy)
}

export function groupByPost(
   document: DocumentNode,
   args: Prisma.PostGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Post', document, args, fetchPolicy)
}

/* PriceMap */
export function aggregatePriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'PriceMap', document, args, fetchPolicy)
}

export function countPriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'PriceMap', document, args, fetchPolicy)
}

export function findFirstPriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'PriceMap', document, args, fetchPolicy)
}

export function findManyPriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'PriceMap', document, args, fetchPolicy)
}

export function findUniquePriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'PriceMap', document, args, fetchPolicy)
}

export function groupByPriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'PriceMap', document, args, fetchPolicy)
}

/* Purchase */
export function aggregatePurchase(
   document: DocumentNode,
   args: Prisma.PurchaseAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Purchase', document, args, fetchPolicy)
}

export function countPurchase(
   document: DocumentNode,
   args: Prisma.PurchaseCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Purchase', document, args, fetchPolicy)
}

export function findFirstPurchase(
   document: DocumentNode,
   args: Prisma.PurchaseFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Purchase', document, args, fetchPolicy)
}

export function findManyPurchase(
   document: DocumentNode,
   args: Prisma.PurchaseFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Purchase', document, args, fetchPolicy)
}

export function findUniquePurchase(
   document: DocumentNode,
   args: Prisma.PurchaseFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Purchase', document, args, fetchPolicy)
}

export function groupByPurchase(
   document: DocumentNode,
   args: Prisma.PurchaseGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Purchase', document, args, fetchPolicy)
}

/* User */
export function aggregateUser(
   document: DocumentNode,
   args: Prisma.UserAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'User', document, args, fetchPolicy)
}

export function countUser(
   document: DocumentNode,
   args: Prisma.UserCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'User', document, args, fetchPolicy)
}

export function findFirstUser(
   document: DocumentNode,
   args: Prisma.UserFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'User', document, args, fetchPolicy)
}

export function findManyUser(
   document: DocumentNode,
   args: Prisma.UserFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'User', document, args, fetchPolicy)
}

export function findUniqueUser(
   document: DocumentNode,
   args: Prisma.UserFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'User', document, args, fetchPolicy)
}

export function groupByUser(
   document: DocumentNode,
   args: Prisma.UserGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'User', document, args, fetchPolicy)
}

/* Video */
export function aggregateVideo(
   document: DocumentNode,
   args: Prisma.VideoAggregateArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'aggregate', 'Video', document, args, fetchPolicy)
}

export function countVideo(
   document: DocumentNode,
   args: Prisma.VideoCountArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'count', 'Video', document, args, fetchPolicy)
}

export function findFirstVideo(
   document: DocumentNode,
   args: Prisma.VideoFindFirstArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findFirst', 'Video', document, args, fetchPolicy)
}

export function findManyVideo(
   document: DocumentNode,
   args: Prisma.VideoFindManyArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findMany', 'Video', document, args, fetchPolicy)
}

export function findUniqueVideo(
   document: DocumentNode,
   args: Prisma.VideoFindUniqueArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'findUnique', 'Video', document, args, fetchPolicy)
}

export function groupByVideo(
   document: DocumentNode,
   args: Prisma.VideoGroupByArgs,
   fetchPolicy: FetchPolicy = 'cache-first'
) {
   return handleAction('query', 'groupBy', 'Video', document, args, fetchPolicy)
}