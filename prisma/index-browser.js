
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.6.0
 * Query Engine version: dc520b92b1ebb2d28dc3161f9f82e875bd35d727
 */
Prisma.prismaVersion = {
  client: "3.6.0",
  engine: "dc520b92b1ebb2d28dc3161f9f82e875bd35d727"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.PersonScalarFieldEnum = makeEnum({
  id: 'id',
  fullname: 'fullname',
  gender: 'gender',
  phone: 'phone',
  email: 'email',
  address: 'address',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaptopScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  brand: 'brand',
  model: 'model',
  material: 'material',
  display: 'display',
  cpu: 'cpu',
  ram: 'ram',
  graphicCard: 'graphicCard',
  ports: 'ports',
  wifi: 'wifi',
  storage: 'storage',
  webcam: 'webcam',
  fans: 'fans',
  speakers: 'speakers',
  keyboard: 'keyboard',
  security: 'security',
  adapter: 'adapter',
  battery: 'battery',
  specialFeatures: 'specialFeatures',
  dimensionsAndWeight: 'dimensionsAndWeight',
  origin: 'origin',
  releaseDate: 'releaseDate',
  sold: 'sold',
  stopSelling: 'stopSelling',
  os: 'os',
  priceMapId: 'priceMapId',
  defaultImageId: 'defaultImageId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  rank: 'rank',
  content: 'content',
  authorId: 'authorId',
  isStaff: 'isStaff',
  laptopId: 'laptopId',
  commentId: 'commentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PriceMapScalarFieldEnum = makeEnum({
  id: 'id',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DiscountScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PurchaseScalarFieldEnum = makeEnum({
  id: 'id',
  customerId: 'customerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PassageScalarFieldEnum = makeEnum({
  id: 'id',
  header: 'header',
  content: 'content',
  postId: 'postId'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  authorId: 'authorId',
  defaultImageId: 'defaultImageId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImageScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  mimeType: 'mimeType',
  data: 'data',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VideoScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.PersonOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  fullname: 'fullname',
  phone: 'phone',
  email: 'email',
  address: 'address'
});

exports.Prisma.CustomerOrderByRelevanceFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  id: 'id',
  password: 'password'
});

exports.Prisma.LaptopOrderByRelevanceFieldEnum = makeEnum({
  title: 'title',
  brand: 'brand',
  model: 'model',
  material: 'material',
  display: 'display',
  cpu: 'cpu',
  ram: 'ram',
  graphicCard: 'graphicCard',
  ports: 'ports',
  wifi: 'wifi',
  storage: 'storage',
  webcam: 'webcam',
  fans: 'fans',
  speakers: 'speakers',
  keyboard: 'keyboard',
  security: 'security',
  adapter: 'adapter',
  battery: 'battery',
  specialFeatures: 'specialFeatures',
  dimensionsAndWeight: 'dimensionsAndWeight',
  origin: 'origin'
});

exports.Prisma.CommentOrderByRelevanceFieldEnum = makeEnum({
  content: 'content',
  authorId: 'authorId'
});

exports.Prisma.PurchaseOrderByRelevanceFieldEnum = makeEnum({
  customerId: 'customerId'
});

exports.Prisma.PassageOrderByRelevanceFieldEnum = makeEnum({
  header: 'header',
  content: 'content'
});

exports.Prisma.PostOrderByRelevanceFieldEnum = makeEnum({
  title: 'title',
  authorId: 'authorId'
});

exports.Prisma.ImageOrderByRelevanceFieldEnum = makeEnum({
  title: 'title'
});

exports.Prisma.VideoOrderByRelevanceFieldEnum = makeEnum({
  title: 'title',
  url: 'url'
});
exports.Gender = makeEnum({
  MALE: 'MALE',
  FEMALE: 'FEMALE'
});

exports.Role = makeEnum({
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
});

exports.OS = makeEnum({
  FREEDOS: 'FREEDOS',
  WINDOWS: 'WINDOWS',
  MACOS: 'MACOS',
  LINUX: 'LINUX',
  ANDROID: 'ANDROID'
});

exports.Rank = makeEnum({
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE'
});

exports.MimeType = makeEnum({
  gif: 'gif',
  jpeg: 'jpeg',
  pipeg: 'pipeg',
  png: 'png',
  svg: 'svg'
});

exports.Prisma.ModelName = makeEnum({
  Person: 'Person',
  Customer: 'Customer',
  User: 'User',
  Laptop: 'Laptop',
  Comment: 'Comment',
  PriceMap: 'PriceMap',
  Discount: 'Discount',
  Purchase: 'Purchase',
  Passage: 'Passage',
  Post: 'Post',
  Image: 'Image',
  Video: 'Video'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
