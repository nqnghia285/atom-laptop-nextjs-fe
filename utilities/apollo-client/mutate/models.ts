import { DocumentNode } from 'graphql'
import { Prisma } from '~/prisma'
import { handleAction } from '~/utilities/apollo-client'

/* Comment */
export function createComment(
   document: DocumentNode,
   args: Prisma.CommentCreateArgs
) {
   return handleAction('mutate', 'create', 'Comment', document, args)
}

export function createManyComment(
   document: DocumentNode,
   args: Prisma.CommentCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Comment', document, args)
}

export function deleteComment(
   document: DocumentNode,
   args: Prisma.CommentDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Comment', document, args)
}

export function deleteManyComment(
   document: DocumentNode,
   args: Prisma.CommentDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Comment', document, args)
}

export function updateComment(
   document: DocumentNode,
   args: Prisma.CommentGroupByArgs
) {
   return handleAction('mutate', 'update', 'Comment', document, args)
}

/* Customer */
export function createCustomer(
   document: DocumentNode,
   args: Prisma.CustomerCreateArgs
) {
   return handleAction('mutate', 'create', 'Customer', document, args)
}

export function createManyCustomer(
   document: DocumentNode,
   args: Prisma.CustomerCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Customer', document, args)
}

export function deleteCustomer(
   document: DocumentNode,
   args: Prisma.CustomerDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Customer', document, args)
}

export function deleteManyCustomer(
   document: DocumentNode,
   args: Prisma.CustomerDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Customer', document, args)
}

export function updateCustomer(
   document: DocumentNode,
   args: Prisma.CustomerGroupByArgs
) {
   return handleAction('mutate', 'update', 'Customer', document, args)
}

/* Discount */
export function createDiscount(
   document: DocumentNode,
   args: Prisma.DiscountCreateArgs
) {
   return handleAction('mutate', 'create', 'Discount', document, args)
}

export function createManyDiscount(
   document: DocumentNode,
   args: Prisma.DiscountCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Discount', document, args)
}

export function deleteDiscount(
   document: DocumentNode,
   args: Prisma.DiscountDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Discount', document, args)
}

export function deleteManyDiscount(
   document: DocumentNode,
   args: Prisma.DiscountDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Discount', document, args)
}

export function updateDiscount(
   document: DocumentNode,
   args: Prisma.DiscountGroupByArgs
) {
   return handleAction('mutate', 'update', 'Discount', document, args)
}

/* Image */
export function createImage(
   document: DocumentNode,
   args: Prisma.ImageCreateArgs
) {
   return handleAction('mutate', 'create', 'Image', document, args)
}

export function createManyImage(
   document: DocumentNode,
   args: Prisma.ImageCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Image', document, args)
}

export function deleteImage(
   document: DocumentNode,
   args: Prisma.ImageDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Image', document, args)
}

export function deleteManyImage(
   document: DocumentNode,
   args: Prisma.ImageDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Image', document, args)
}

export function updateImage(
   document: DocumentNode,
   args: Prisma.ImageGroupByArgs
) {
   return handleAction('mutate', 'update', 'Image', document, args)
}

/* Laptop */
export function createLaptop(
   document: DocumentNode,
   args: Prisma.LaptopCreateArgs
) {
   return handleAction('mutate', 'create', 'Laptop', document, args)
}

export function createManyLaptop(
   document: DocumentNode,
   args: Prisma.LaptopCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Laptop', document, args)
}

export function deleteLaptop(
   document: DocumentNode,
   args: Prisma.LaptopDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Laptop', document, args)
}

export function deleteManyLaptop(
   document: DocumentNode,
   args: Prisma.LaptopDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Laptop', document, args)
}

export function updateLaptop(
   document: DocumentNode,
   args: Prisma.LaptopGroupByArgs
) {
   return handleAction('mutate', 'update', 'Laptop', document, args)
}

/* Passage */
export function createPassage(
   document: DocumentNode,
   args: Prisma.PassageCreateArgs
) {
   return handleAction('mutate', 'create', 'Passage', document, args)
}

export function createManyPassage(
   document: DocumentNode,
   args: Prisma.PassageCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Passage', document, args)
}

export function deletePassage(
   document: DocumentNode,
   args: Prisma.PassageDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Passage', document, args)
}

export function deleteManyPassage(
   document: DocumentNode,
   args: Prisma.PassageDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Passage', document, args)
}

export function updatePassage(
   document: DocumentNode,
   args: Prisma.PassageGroupByArgs
) {
   return handleAction('mutate', 'update', 'Passage', document, args)
}

/* Person */
export function createPerson(
   document: DocumentNode,
   args: Prisma.PersonCreateArgs
) {
   return handleAction('mutate', 'create', 'Person', document, args)
}

export function createManyPerson(
   document: DocumentNode,
   args: Prisma.PersonCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Person', document, args)
}

export function deletePerson(
   document: DocumentNode,
   args: Prisma.PersonDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Person', document, args)
}

export function deleteManyPerson(
   document: DocumentNode,
   args: Prisma.PersonDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Person', document, args)
}

export function updatePerson(
   document: DocumentNode,
   args: Prisma.PersonGroupByArgs
) {
   return handleAction('mutate', 'update', 'Person', document, args)
}

/* Post */
export function createPost(
   document: DocumentNode,
   args: Prisma.PostCreateArgs
) {
   return handleAction('mutate', 'create', 'Post', document, args)
}

export function createManyPost(
   document: DocumentNode,
   args: Prisma.PostCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Post', document, args)
}

export function deletePost(
   document: DocumentNode,
   args: Prisma.PostDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Post', document, args)
}

export function deleteManyPost(
   document: DocumentNode,
   args: Prisma.PostDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Post', document, args)
}

export function updatePost(
   document: DocumentNode,
   args: Prisma.PostGroupByArgs
) {
   return handleAction('mutate', 'update', 'Post', document, args)
}

/* PriceMap */
export function createPriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapCreateArgs
) {
   return handleAction('mutate', 'create', 'PriceMap', document, args)
}

export function createManyPriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'PriceMap', document, args)
}

export function deletePriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapDeleteArgs
) {
   return handleAction('mutate', 'delete', 'PriceMap', document, args)
}

export function deleteManyPriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'PriceMap', document, args)
}

export function updatePriceMap(
   document: DocumentNode,
   args: Prisma.PriceMapGroupByArgs
) {
   return handleAction('mutate', 'update', 'PriceMap', document, args)
}

/* Purchase */
export function createPurchase(
   document: DocumentNode,
   args: Prisma.PurchaseCreateArgs
) {
   return handleAction('mutate', 'create', 'Purchase', document, args)
}

export function createManyPurchase(
   document: DocumentNode,
   args: Prisma.PurchaseCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Purchase', document, args)
}

export function deletePurchase(
   document: DocumentNode,
   args: Prisma.PurchaseDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Purchase', document, args)
}

export function deleteManyPurchase(
   document: DocumentNode,
   args: Prisma.PurchaseDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Purchase', document, args)
}

export function updatePurchase(
   document: DocumentNode,
   args: Prisma.PurchaseGroupByArgs
) {
   return handleAction('mutate', 'update', 'Purchase', document, args)
}

/* User */
export function createUser(
   document: DocumentNode,
   args: Prisma.UserCreateArgs
) {
   return handleAction('mutate', 'create', 'User', document, args)
}

export function createManyUser(
   document: DocumentNode,
   args: Prisma.UserCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'User', document, args)
}

export function deleteUser(
   document: DocumentNode,
   args: Prisma.UserDeleteArgs
) {
   return handleAction('mutate', 'delete', 'User', document, args)
}

export function deleteManyUser(
   document: DocumentNode,
   args: Prisma.UserDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'User', document, args)
}

export function updateUser(
   document: DocumentNode,
   args: Prisma.UserGroupByArgs
) {
   return handleAction('mutate', 'update', 'User', document, args)
}

/* Video */
export function createVideo(
   document: DocumentNode,
   args: Prisma.VideoCreateArgs
) {
   return handleAction('mutate', 'create', 'Video', document, args)
}

export function createManyVideo(
   document: DocumentNode,
   args: Prisma.VideoCreateManyArgs
) {
   return handleAction('mutate', 'createMany', 'Video', document, args)
}

export function deleteVideo(
   document: DocumentNode,
   args: Prisma.VideoDeleteArgs
) {
   return handleAction('mutate', 'delete', 'Video', document, args)
}

export function deleteManyVideo(
   document: DocumentNode,
   args: Prisma.VideoDeleteManyArgs
) {
   return handleAction('mutate', 'deleteMany', 'Video', document, args)
}

export function updateVideo(
   document: DocumentNode,
   args: Prisma.VideoGroupByArgs
) {
   return handleAction('mutate', 'update', 'Video', document, args)
}