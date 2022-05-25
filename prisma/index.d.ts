
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Person
 * 
 */
export type Person = {
  /**
   * @FieldType('Scalars.GraphQLUUID')
   */
  id: string
  /**
   * @Validator.Length(1, 60)
   */
  fullname: string
  gender: Gender
  /**
   * @FieldType('Scalars.GraphQLPhoneNumber')
   */
  phone: string
  /**
   * @FieldType('Scalars.GraphQLEmailAddress')
   * @Validator.MaxLength(30)
   */
  email: string | null
  /**
   * @Validator.MaxLength(255)
   */
  address: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Customer
 * 
 */
export type Customer = {
  /**
   * @FieldType('Scalars.GraphQLUUID')
   */
  id: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  /**
   * @FieldType('Scalars.GraphQLUUID')
   */
  id: string
  /**
   * @HideField({ output: true })
   * @Validator.Length(1, 20)
   */
  password: string
  role: Role
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Laptop
 * 
 */
export type Laptop = {
  id: number
  /**
   * @Validator.MaxLength(255)
   */
  title: string
  /**
   * @Validator.MaxLength(255)
   */
  brand: string
  /**
   * @Validator.MaxLength(255)
   */
  model: string
  /**
   * @Validator.MaxLength(255)
   */
  material: string
  /**
   * @Validator.MaxLength(255)
   */
  display: string
  /**
   * @Validator.MaxLength(255)
   */
  cpu: string
  /**
   * @Validator.MaxLength(255)
   */
  ram: string
  /**
   * @Validator.MaxLength(255)
   */
  graphicCard: string
  /**
   * @Validator.MaxLength(255)
   */
  ports: string
  /**
   * @Validator.MaxLength(255)
   */
  wifi: string
  /**
   * @Validator.MaxLength(255)
   */
  storage: string
  /**
   * @Validator.MaxLength(255)
   */
  webcam: string
  /**
   * @Validator.MaxLength(255)
   */
  fans: string
  /**
   * @Validator.MaxLength(255)
   */
  speakers: string
  /**
   * @Validator.MaxLength(255)
   */
  keyboard: string
  /**
   * @Validator.MaxLength(255)
   */
  security: string
  /**
   * @Validator.MaxLength(255)
   */
  adapter: string
  /**
   * @Validator.MaxLength(255)
   */
  battery: string
  /**
   * @Validator.MaxLength(255)
   */
  specialFeatures: string
  /**
   * @Validator.MaxLength(255)
   */
  dimensionsAndWeight: string
  /**
   * @Validator.MaxLength(255)
   */
  origin: string
  releaseDate: Date
  sold: number
  stopSelling: boolean
  os: OS
  priceMapId: number | null
  defaultImageId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: number
  rank: Rank
  /**
   * @Validator.MaxLength(400)
   */
  content: string
  /**
   * @FieldType('Scalars.GraphQLUUID')
   */
  authorId: string
  isStaff: boolean
  laptopId: number
  commentId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PriceMap
 * 
 */
export type PriceMap = {
  id: number
  price: Prisma.Decimal
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Discount
 * 
 */
export type Discount = {
  id: number
  value: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Purchase
 * 
 */
export type Purchase = {
  id: number
  /**
   * @FieldType('Scalars.GraphQLUUID')
   */
  customerId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Passage
 * 
 */
export type Passage = {
  id: number
  /**
   * @Validator.MaxLength(250)
   */
  header: string
  content: string
  postId: number
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  /**
   * @Validator.MaxLength(255)
   */
  title: string
  /**
   * @FieldType('Scalars.GraphQLUUID')
   */
  authorId: string
  defaultImageId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Image
 * 
 */
export type Image = {
  id: number
  /**
   * @Validator.MaxLength(255)
   */
  title: string
  mimeType: MimeType
  /**
   * @FieldType('TD.Base64')
   */
  data: Buffer
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Video
 * 
 */
export type Video = {
  id: number
  /**
   * @Validator.MaxLength(255)
   */
  title: string
  /**
   * @FieldType('Scalars.GraphQLURL')
   */
  url: string
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OS: {
  FREEDOS: 'FREEDOS',
  WINDOWS: 'WINDOWS',
  MACOS: 'MACOS',
  LINUX: 'LINUX',
  ANDROID: 'ANDROID'
};

export type OS = (typeof OS)[keyof typeof OS]


export const Rank: {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE'
};

export type Rank = (typeof Rank)[keyof typeof Rank]


export const MimeType: {
  gif: 'gif',
  jpeg: 'jpeg',
  pipeg: 'pipeg',
  png: 'png',
  svg: 'svg'
};

export type MimeType = (typeof MimeType)[keyof typeof MimeType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more People
 * const people = await prisma.person.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more People
   * const people = await prisma.person.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<GlobalReject>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.laptop`: Exposes CRUD operations for the **Laptop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laptops
    * const laptops = await prisma.laptop.findMany()
    * ```
    */
  get laptop(): Prisma.LaptopDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.priceMap`: Exposes CRUD operations for the **PriceMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceMaps
    * const priceMaps = await prisma.priceMap.findMany()
    * ```
    */
  get priceMap(): Prisma.PriceMapDelegate<GlobalReject>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discount.findMany()
    * ```
    */
  get discount(): Prisma.DiscountDelegate<GlobalReject>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<GlobalReject>;

  /**
   * `prisma.passage`: Exposes CRUD operations for the **Passage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passages
    * const passages = await prisma.passage.findMany()
    * ```
    */
  get passage(): Prisma.PassageDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.6.0
   * Query Engine version: dc520b92b1ebb2d28dc3161f9f82e875bd35d727
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonCountOutputType
   */


  export type PersonCountOutputType = {
    comments: number
  }

  export type PersonCountOutputTypeSelect = {
    comments?: boolean
  }

  export type PersonCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PersonCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PersonCountOutputType
    : S extends undefined
    ? never
    : S extends PersonCountOutputTypeArgs
    ?'include' extends U
    ? PersonCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PersonCountOutputType ?PersonCountOutputType [P]
  : 
     never
  } 
    : PersonCountOutputType
  : PersonCountOutputType




  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     * 
    **/
    select?: PersonCountOutputTypeSelect | null
  }



  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    purchases: number
  }

  export type CustomerCountOutputTypeSelect = {
    purchases?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CustomerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CustomerCountOutputType
    : S extends undefined
    ? never
    : S extends CustomerCountOutputTypeArgs
    ?'include' extends U
    ? CustomerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CustomerCountOutputType ?CustomerCountOutputType [P]
  : 
     never
  } 
    : CustomerCountOutputType
  : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     * 
    **/
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect = {
    posts?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type LaptopCountOutputType
   */


  export type LaptopCountOutputType = {
    discounts: number
    purchases: number
    posts: number
    comments: number
    images: number
    videos: number
  }

  export type LaptopCountOutputTypeSelect = {
    discounts?: boolean
    purchases?: boolean
    posts?: boolean
    comments?: boolean
    images?: boolean
    videos?: boolean
  }

  export type LaptopCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LaptopCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LaptopCountOutputType
    : S extends undefined
    ? never
    : S extends LaptopCountOutputTypeArgs
    ?'include' extends U
    ? LaptopCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof LaptopCountOutputType ?LaptopCountOutputType [P]
  : 
     never
  } 
    : LaptopCountOutputType
  : LaptopCountOutputType




  // Custom InputTypes

  /**
   * LaptopCountOutputType without action
   */
  export type LaptopCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LaptopCountOutputType
     * 
    **/
    select?: LaptopCountOutputTypeSelect | null
  }



  /**
   * Count Type CommentCountOutputType
   */


  export type CommentCountOutputType = {
    comments: number
  }

  export type CommentCountOutputTypeSelect = {
    comments?: boolean
  }

  export type CommentCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CommentCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CommentCountOutputType
    : S extends undefined
    ? never
    : S extends CommentCountOutputTypeArgs
    ?'include' extends U
    ? CommentCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CommentCountOutputType ?CommentCountOutputType [P]
  : 
     never
  } 
    : CommentCountOutputType
  : CommentCountOutputType




  // Custom InputTypes

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     * 
    **/
    select?: CommentCountOutputTypeSelect | null
  }



  /**
   * Count Type PriceMapCountOutputType
   */


  export type PriceMapCountOutputType = {
    laptops: number
  }

  export type PriceMapCountOutputTypeSelect = {
    laptops?: boolean
  }

  export type PriceMapCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PriceMapCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PriceMapCountOutputType
    : S extends undefined
    ? never
    : S extends PriceMapCountOutputTypeArgs
    ?'include' extends U
    ? PriceMapCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PriceMapCountOutputType ?PriceMapCountOutputType [P]
  : 
     never
  } 
    : PriceMapCountOutputType
  : PriceMapCountOutputType




  // Custom InputTypes

  /**
   * PriceMapCountOutputType without action
   */
  export type PriceMapCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PriceMapCountOutputType
     * 
    **/
    select?: PriceMapCountOutputTypeSelect | null
  }



  /**
   * Count Type DiscountCountOutputType
   */


  export type DiscountCountOutputType = {
    laptops: number
  }

  export type DiscountCountOutputTypeSelect = {
    laptops?: boolean
  }

  export type DiscountCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DiscountCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DiscountCountOutputType
    : S extends undefined
    ? never
    : S extends DiscountCountOutputTypeArgs
    ?'include' extends U
    ? DiscountCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DiscountCountOutputType ?DiscountCountOutputType [P]
  : 
     never
  } 
    : DiscountCountOutputType
  : DiscountCountOutputType




  // Custom InputTypes

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DiscountCountOutputType
     * 
    **/
    select?: DiscountCountOutputTypeSelect | null
  }



  /**
   * Count Type PurchaseCountOutputType
   */


  export type PurchaseCountOutputType = {
    laptops: number
  }

  export type PurchaseCountOutputTypeSelect = {
    laptops?: boolean
  }

  export type PurchaseCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PurchaseCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PurchaseCountOutputType
    : S extends undefined
    ? never
    : S extends PurchaseCountOutputTypeArgs
    ?'include' extends U
    ? PurchaseCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PurchaseCountOutputType ?PurchaseCountOutputType [P]
  : 
     never
  } 
    : PurchaseCountOutputType
  : PurchaseCountOutputType




  // Custom InputTypes

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     * 
    **/
    select?: PurchaseCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    passages: number
    laptops: number
    images: number
    videos: number
  }

  export type PostCountOutputTypeSelect = {
    passages?: boolean
    laptops?: boolean
    images?: boolean
    videos?: boolean
  }

  export type PostCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PostCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PostCountOutputType
    : S extends undefined
    ? never
    : S extends PostCountOutputTypeArgs
    ?'include' extends U
    ? PostCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostCountOutputType ?PostCountOutputType [P]
  : 
     never
  } 
    : PostCountOutputType
  : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     * 
    **/
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type ImageCountOutputType
   */


  export type ImageCountOutputType = {
    laptops: number
    post: number
    defaultLaptops: number
    defaultPosts: number
  }

  export type ImageCountOutputTypeSelect = {
    laptops?: boolean
    post?: boolean
    defaultLaptops?: boolean
    defaultPosts?: boolean
  }

  export type ImageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ImageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ImageCountOutputType
    : S extends undefined
    ? never
    : S extends ImageCountOutputTypeArgs
    ?'include' extends U
    ? ImageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ImageCountOutputType ?ImageCountOutputType [P]
  : 
     never
  } 
    : ImageCountOutputType
  : ImageCountOutputType




  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     * 
    **/
    select?: ImageCountOutputTypeSelect | null
  }



  /**
   * Count Type VideoCountOutputType
   */


  export type VideoCountOutputType = {
    laptops: number
    post: number
  }

  export type VideoCountOutputTypeSelect = {
    laptops?: boolean
    post?: boolean
  }

  export type VideoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | VideoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? VideoCountOutputType
    : S extends undefined
    ? never
    : S extends VideoCountOutputTypeArgs
    ?'include' extends U
    ? VideoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof VideoCountOutputType ?VideoCountOutputType [P]
  : 
     never
  } 
    : VideoCountOutputType
  : VideoCountOutputType




  // Custom InputTypes

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     * 
    **/
    select?: VideoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    gender: Gender | null
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    gender: Gender | null
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    fullname: number
    gender: number
    phone: number
    email: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    fullname?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    fullname?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    fullname?: true
    gender?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs = {
    /**
     * Filter which Person to aggregate.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs = {
    where?: PersonWhereInput
    orderBy?: Enumerable<PersonOrderByWithAggregationInput>
    by: Array<PersonScalarFieldEnum>
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: string
    fullname: string
    gender: Gender
    phone: string
    email: string | null
    address: string
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Promise<
    Array<
      PickArray<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect = {
    id?: boolean
    fullname?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    user?: boolean | UserArgs
    customer?: boolean | CustomerArgs
    comments?: boolean | CommentFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | PersonCountOutputTypeArgs
  }

  export type PersonInclude = {
    user?: boolean | UserArgs
    customer?: boolean | CustomerArgs
    comments?: boolean | CommentFindManyArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }

  export type PersonGetPayload<
    S extends boolean | null | undefined | PersonArgs,
    U = keyof S
      > = S extends true
        ? Person
    : S extends undefined
    ? never
    : S extends PersonArgs | PersonFindManyArgs
    ?'include' extends U
    ? Person  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> | null :
        P extends 'customer'
        ? CustomerGetPayload<S['include'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PersonCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Person ?Person [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> | null :
        P extends 'customer'
        ? CustomerGetPayload<S['select'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PersonCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Person
  : Person


  type PersonCountArgs = Merge<
    Omit<PersonFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }
  >

  export interface PersonDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Person'> extends True ? CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>> : CheckSelect<T, Prisma__PersonClient<Person | null >, Prisma__PersonClient<PersonGetPayload<T> | null >>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Person'> extends True ? CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>> : CheckSelect<T, Prisma__PersonClient<Person | null >, Prisma__PersonClient<PersonGetPayload<T> | null >>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs>(
      args?: SelectSubset<T, PersonFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Person>>, PrismaPromise<Array<PersonGetPayload<T>>>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs>(
      args: SelectSubset<T, PersonCreateArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs>(
      args?: SelectSubset<T, PersonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs>(
      args: SelectSubset<T, PersonDeleteArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs>(
      args: SelectSubset<T, PersonUpdateArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs>(
      args?: SelectSubset<T, PersonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs>(
      args: SelectSubset<T, PersonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs>(
      args: SelectSubset<T, PersonUpsertArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    customer<T extends CustomerArgs = {}>(args?: Subset<T, CustomerArgs>): CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Throw an Error if a Person can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Throw an Error if a Person can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     * 
    **/
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which People to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person create
   */
  export type PersonCreateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to create a Person.
     * 
    **/
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs = {
    data: Enumerable<PersonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to update a Person.
     * 
    **/
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs = {
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The filter to search for the Person to update in case it exists.
     * 
    **/
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     * 
    **/
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter which Person to delete.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs = {
    where?: PersonWhereInput
  }


  /**
   * Person without action
   */
  export type PersonArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
  }



  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: Array<CustomerScalarFieldEnum>
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Promise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    profile?: boolean | PersonArgs
    purchases?: boolean | PurchaseFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerInclude = {
    profile?: boolean | PersonArgs
    purchases?: boolean | PurchaseFindManyArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<
    S extends boolean | null | undefined | CustomerArgs,
    U = keyof S
      > = S extends true
        ? Customer
    : S extends undefined
    ? never
    : S extends CustomerArgs | CustomerFindManyArgs
    ?'include' extends U
    ? Customer  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'profile'
        ? PersonGetPayload<S['include'][P]> :
        P extends 'purchases'
        ? Array < PurchaseGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CustomerCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Customer ?Customer [P]
  : 
          P extends 'profile'
        ? PersonGetPayload<S['select'][P]> :
        P extends 'purchases'
        ? Array < PurchaseGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CustomerCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Customer
  : Customer


  type CustomerCountArgs = Merge<
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }
  >

  export interface CustomerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>> : CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>> : CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Customer>>, PrismaPromise<Array<CustomerGetPayload<T>>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): CheckSelect<T, Prisma__CustomerClient<Customer>, Prisma__CustomerClient<CustomerGetPayload<T>>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends PersonArgs = {}>(args?: Subset<T, PersonArgs>): CheckSelect<T, Prisma__PersonClient<Person | null >, Prisma__PersonClient<PersonGetPayload<T> | null >>;

    purchases<T extends PurchaseFindManyArgs = {}>(args?: Subset<T, PurchaseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Purchase>>, PrismaPromise<Array<PurchaseGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Throw an Error if a Customer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Throw an Error if a Customer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Customer to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     * 
    **/
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     * 
    **/
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<CustomerOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     * 
    **/
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     * 
    **/
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     * 
    **/
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     * 
    **/
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     * 
    **/
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     * 
    **/
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    where?: CustomerWhereInput
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     * 
    **/
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CustomerInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    password: string | null
    role: Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    password: string | null
    role: Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    password: string
    role: Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    profile?: boolean | PersonArgs
    password?: boolean
    role?: boolean
    posts?: boolean | PostFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    profile?: boolean | PersonArgs
    posts?: boolean | PostFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'profile'
        ? PersonGetPayload<S['include'][P]> :
        P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'profile'
        ? PersonGetPayload<S['select'][P]> :
        P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    profile<T extends PersonArgs = {}>(args?: Subset<T, PersonArgs>): CheckSelect<T, Prisma__PersonClient<Person | null >, Prisma__PersonClient<PersonGetPayload<T> | null >>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Laptop
   */


  export type AggregateLaptop = {
    _count: LaptopCountAggregateOutputType | null
    _avg: LaptopAvgAggregateOutputType | null
    _sum: LaptopSumAggregateOutputType | null
    _min: LaptopMinAggregateOutputType | null
    _max: LaptopMaxAggregateOutputType | null
  }

  export type LaptopAvgAggregateOutputType = {
    id: number | null
    sold: number | null
    priceMapId: number | null
    defaultImageId: number | null
  }

  export type LaptopSumAggregateOutputType = {
    id: number | null
    sold: number | null
    priceMapId: number | null
    defaultImageId: number | null
  }

  export type LaptopMinAggregateOutputType = {
    id: number | null
    title: string | null
    brand: string | null
    model: string | null
    material: string | null
    display: string | null
    cpu: string | null
    ram: string | null
    graphicCard: string | null
    ports: string | null
    wifi: string | null
    storage: string | null
    webcam: string | null
    fans: string | null
    speakers: string | null
    keyboard: string | null
    security: string | null
    adapter: string | null
    battery: string | null
    specialFeatures: string | null
    dimensionsAndWeight: string | null
    origin: string | null
    releaseDate: Date | null
    sold: number | null
    stopSelling: boolean | null
    os: OS | null
    priceMapId: number | null
    defaultImageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaptopMaxAggregateOutputType = {
    id: number | null
    title: string | null
    brand: string | null
    model: string | null
    material: string | null
    display: string | null
    cpu: string | null
    ram: string | null
    graphicCard: string | null
    ports: string | null
    wifi: string | null
    storage: string | null
    webcam: string | null
    fans: string | null
    speakers: string | null
    keyboard: string | null
    security: string | null
    adapter: string | null
    battery: string | null
    specialFeatures: string | null
    dimensionsAndWeight: string | null
    origin: string | null
    releaseDate: Date | null
    sold: number | null
    stopSelling: boolean | null
    os: OS | null
    priceMapId: number | null
    defaultImageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaptopCountAggregateOutputType = {
    id: number
    title: number
    brand: number
    model: number
    material: number
    display: number
    cpu: number
    ram: number
    graphicCard: number
    ports: number
    wifi: number
    storage: number
    webcam: number
    fans: number
    speakers: number
    keyboard: number
    security: number
    adapter: number
    battery: number
    specialFeatures: number
    dimensionsAndWeight: number
    origin: number
    releaseDate: number
    sold: number
    stopSelling: number
    os: number
    priceMapId: number
    defaultImageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LaptopAvgAggregateInputType = {
    id?: true
    sold?: true
    priceMapId?: true
    defaultImageId?: true
  }

  export type LaptopSumAggregateInputType = {
    id?: true
    sold?: true
    priceMapId?: true
    defaultImageId?: true
  }

  export type LaptopMinAggregateInputType = {
    id?: true
    title?: true
    brand?: true
    model?: true
    material?: true
    display?: true
    cpu?: true
    ram?: true
    graphicCard?: true
    ports?: true
    wifi?: true
    storage?: true
    webcam?: true
    fans?: true
    speakers?: true
    keyboard?: true
    security?: true
    adapter?: true
    battery?: true
    specialFeatures?: true
    dimensionsAndWeight?: true
    origin?: true
    releaseDate?: true
    sold?: true
    stopSelling?: true
    os?: true
    priceMapId?: true
    defaultImageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaptopMaxAggregateInputType = {
    id?: true
    title?: true
    brand?: true
    model?: true
    material?: true
    display?: true
    cpu?: true
    ram?: true
    graphicCard?: true
    ports?: true
    wifi?: true
    storage?: true
    webcam?: true
    fans?: true
    speakers?: true
    keyboard?: true
    security?: true
    adapter?: true
    battery?: true
    specialFeatures?: true
    dimensionsAndWeight?: true
    origin?: true
    releaseDate?: true
    sold?: true
    stopSelling?: true
    os?: true
    priceMapId?: true
    defaultImageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaptopCountAggregateInputType = {
    id?: true
    title?: true
    brand?: true
    model?: true
    material?: true
    display?: true
    cpu?: true
    ram?: true
    graphicCard?: true
    ports?: true
    wifi?: true
    storage?: true
    webcam?: true
    fans?: true
    speakers?: true
    keyboard?: true
    security?: true
    adapter?: true
    battery?: true
    specialFeatures?: true
    dimensionsAndWeight?: true
    origin?: true
    releaseDate?: true
    sold?: true
    stopSelling?: true
    os?: true
    priceMapId?: true
    defaultImageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LaptopAggregateArgs = {
    /**
     * Filter which Laptop to aggregate.
     * 
    **/
    where?: LaptopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laptops to fetch.
     * 
    **/
    orderBy?: Enumerable<LaptopOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LaptopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laptops from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laptops.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laptops
    **/
    _count?: true | LaptopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaptopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaptopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaptopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaptopMaxAggregateInputType
  }

  export type GetLaptopAggregateType<T extends LaptopAggregateArgs> = {
        [P in keyof T & keyof AggregateLaptop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaptop[P]>
      : GetScalarType<T[P], AggregateLaptop[P]>
  }




  export type LaptopGroupByArgs = {
    where?: LaptopWhereInput
    orderBy?: Enumerable<LaptopOrderByWithAggregationInput>
    by: Array<LaptopScalarFieldEnum>
    having?: LaptopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaptopCountAggregateInputType | true
    _avg?: LaptopAvgAggregateInputType
    _sum?: LaptopSumAggregateInputType
    _min?: LaptopMinAggregateInputType
    _max?: LaptopMaxAggregateInputType
  }


  export type LaptopGroupByOutputType = {
    id: number
    title: string
    brand: string
    model: string
    material: string
    display: string
    cpu: string
    ram: string
    graphicCard: string
    ports: string
    wifi: string
    storage: string
    webcam: string
    fans: string
    speakers: string
    keyboard: string
    security: string
    adapter: string
    battery: string
    specialFeatures: string
    dimensionsAndWeight: string
    origin: string
    releaseDate: Date
    sold: number
    stopSelling: boolean
    os: OS
    priceMapId: number | null
    defaultImageId: number | null
    createdAt: Date
    updatedAt: Date
    _count: LaptopCountAggregateOutputType | null
    _avg: LaptopAvgAggregateOutputType | null
    _sum: LaptopSumAggregateOutputType | null
    _min: LaptopMinAggregateOutputType | null
    _max: LaptopMaxAggregateOutputType | null
  }

  type GetLaptopGroupByPayload<T extends LaptopGroupByArgs> = Promise<
    Array<
      PickArray<LaptopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaptopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaptopGroupByOutputType[P]>
            : GetScalarType<T[P], LaptopGroupByOutputType[P]>
        }
      >
    >


  export type LaptopSelect = {
    id?: boolean
    title?: boolean
    brand?: boolean
    model?: boolean
    material?: boolean
    display?: boolean
    cpu?: boolean
    ram?: boolean
    graphicCard?: boolean
    ports?: boolean
    wifi?: boolean
    storage?: boolean
    webcam?: boolean
    fans?: boolean
    speakers?: boolean
    keyboard?: boolean
    security?: boolean
    adapter?: boolean
    battery?: boolean
    specialFeatures?: boolean
    dimensionsAndWeight?: boolean
    origin?: boolean
    releaseDate?: boolean
    sold?: boolean
    stopSelling?: boolean
    os?: boolean
    priceMap?: boolean | PriceMapArgs
    priceMapId?: boolean
    discounts?: boolean | DiscountFindManyArgs
    defaultImage?: boolean | ImageArgs
    defaultImageId?: boolean
    purchases?: boolean | PurchaseFindManyArgs
    posts?: boolean | PostFindManyArgs
    comments?: boolean | CommentFindManyArgs
    images?: boolean | ImageFindManyArgs
    videos?: boolean | VideoFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | LaptopCountOutputTypeArgs
  }

  export type LaptopInclude = {
    priceMap?: boolean | PriceMapArgs
    discounts?: boolean | DiscountFindManyArgs
    defaultImage?: boolean | ImageArgs
    purchases?: boolean | PurchaseFindManyArgs
    posts?: boolean | PostFindManyArgs
    comments?: boolean | CommentFindManyArgs
    images?: boolean | ImageFindManyArgs
    videos?: boolean | VideoFindManyArgs
    _count?: boolean | LaptopCountOutputTypeArgs
  }

  export type LaptopGetPayload<
    S extends boolean | null | undefined | LaptopArgs,
    U = keyof S
      > = S extends true
        ? Laptop
    : S extends undefined
    ? never
    : S extends LaptopArgs | LaptopFindManyArgs
    ?'include' extends U
    ? Laptop  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'priceMap'
        ? PriceMapGetPayload<S['include'][P]> | null :
        P extends 'discounts'
        ? Array < DiscountGetPayload<S['include'][P]>>  :
        P extends 'defaultImage'
        ? ImageGetPayload<S['include'][P]> | null :
        P extends 'purchases'
        ? Array < PurchaseGetPayload<S['include'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'images'
        ? Array < ImageGetPayload<S['include'][P]>>  :
        P extends 'videos'
        ? Array < VideoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? LaptopCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Laptop ?Laptop [P]
  : 
          P extends 'priceMap'
        ? PriceMapGetPayload<S['select'][P]> | null :
        P extends 'discounts'
        ? Array < DiscountGetPayload<S['select'][P]>>  :
        P extends 'defaultImage'
        ? ImageGetPayload<S['select'][P]> | null :
        P extends 'purchases'
        ? Array < PurchaseGetPayload<S['select'][P]>>  :
        P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'images'
        ? Array < ImageGetPayload<S['select'][P]>>  :
        P extends 'videos'
        ? Array < VideoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? LaptopCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Laptop
  : Laptop


  type LaptopCountArgs = Merge<
    Omit<LaptopFindManyArgs, 'select' | 'include'> & {
      select?: LaptopCountAggregateInputType | true
    }
  >

  export interface LaptopDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Laptop that matches the filter.
     * @param {LaptopFindUniqueArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LaptopFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LaptopFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Laptop'> extends True ? CheckSelect<T, Prisma__LaptopClient<Laptop>, Prisma__LaptopClient<LaptopGetPayload<T>>> : CheckSelect<T, Prisma__LaptopClient<Laptop | null >, Prisma__LaptopClient<LaptopGetPayload<T> | null >>

    /**
     * Find the first Laptop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopFindFirstArgs} args - Arguments to find a Laptop
     * @example
     * // Get one Laptop
     * const laptop = await prisma.laptop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LaptopFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LaptopFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Laptop'> extends True ? CheckSelect<T, Prisma__LaptopClient<Laptop>, Prisma__LaptopClient<LaptopGetPayload<T>>> : CheckSelect<T, Prisma__LaptopClient<Laptop | null >, Prisma__LaptopClient<LaptopGetPayload<T> | null >>

    /**
     * Find zero or more Laptops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laptops
     * const laptops = await prisma.laptop.findMany()
     * 
     * // Get first 10 Laptops
     * const laptops = await prisma.laptop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laptopWithIdOnly = await prisma.laptop.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LaptopFindManyArgs>(
      args?: SelectSubset<T, LaptopFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>

    /**
     * Create a Laptop.
     * @param {LaptopCreateArgs} args - Arguments to create a Laptop.
     * @example
     * // Create one Laptop
     * const Laptop = await prisma.laptop.create({
     *   data: {
     *     // ... data to create a Laptop
     *   }
     * })
     * 
    **/
    create<T extends LaptopCreateArgs>(
      args: SelectSubset<T, LaptopCreateArgs>
    ): CheckSelect<T, Prisma__LaptopClient<Laptop>, Prisma__LaptopClient<LaptopGetPayload<T>>>

    /**
     * Create many Laptops.
     *     @param {LaptopCreateManyArgs} args - Arguments to create many Laptops.
     *     @example
     *     // Create many Laptops
     *     const laptop = await prisma.laptop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LaptopCreateManyArgs>(
      args?: SelectSubset<T, LaptopCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Laptop.
     * @param {LaptopDeleteArgs} args - Arguments to delete one Laptop.
     * @example
     * // Delete one Laptop
     * const Laptop = await prisma.laptop.delete({
     *   where: {
     *     // ... filter to delete one Laptop
     *   }
     * })
     * 
    **/
    delete<T extends LaptopDeleteArgs>(
      args: SelectSubset<T, LaptopDeleteArgs>
    ): CheckSelect<T, Prisma__LaptopClient<Laptop>, Prisma__LaptopClient<LaptopGetPayload<T>>>

    /**
     * Update one Laptop.
     * @param {LaptopUpdateArgs} args - Arguments to update one Laptop.
     * @example
     * // Update one Laptop
     * const laptop = await prisma.laptop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LaptopUpdateArgs>(
      args: SelectSubset<T, LaptopUpdateArgs>
    ): CheckSelect<T, Prisma__LaptopClient<Laptop>, Prisma__LaptopClient<LaptopGetPayload<T>>>

    /**
     * Delete zero or more Laptops.
     * @param {LaptopDeleteManyArgs} args - Arguments to filter Laptops to delete.
     * @example
     * // Delete a few Laptops
     * const { count } = await prisma.laptop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LaptopDeleteManyArgs>(
      args?: SelectSubset<T, LaptopDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laptops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laptops
     * const laptop = await prisma.laptop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LaptopUpdateManyArgs>(
      args: SelectSubset<T, LaptopUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Laptop.
     * @param {LaptopUpsertArgs} args - Arguments to update or create a Laptop.
     * @example
     * // Update or create a Laptop
     * const laptop = await prisma.laptop.upsert({
     *   create: {
     *     // ... data to create a Laptop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laptop we want to update
     *   }
     * })
    **/
    upsert<T extends LaptopUpsertArgs>(
      args: SelectSubset<T, LaptopUpsertArgs>
    ): CheckSelect<T, Prisma__LaptopClient<Laptop>, Prisma__LaptopClient<LaptopGetPayload<T>>>

    /**
     * Count the number of Laptops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopCountArgs} args - Arguments to filter Laptops to count.
     * @example
     * // Count the number of Laptops
     * const count = await prisma.laptop.count({
     *   where: {
     *     // ... the filter for the Laptops we want to count
     *   }
     * })
    **/
    count<T extends LaptopCountArgs>(
      args?: Subset<T, LaptopCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaptopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laptop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaptopAggregateArgs>(args: Subset<T, LaptopAggregateArgs>): PrismaPromise<GetLaptopAggregateType<T>>

    /**
     * Group by Laptop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaptopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaptopGroupByArgs['orderBy'] }
        : { orderBy?: LaptopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaptopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaptopGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laptop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LaptopClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    priceMap<T extends PriceMapArgs = {}>(args?: Subset<T, PriceMapArgs>): CheckSelect<T, Prisma__PriceMapClient<PriceMap | null >, Prisma__PriceMapClient<PriceMapGetPayload<T> | null >>;

    discounts<T extends DiscountFindManyArgs = {}>(args?: Subset<T, DiscountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Discount>>, PrismaPromise<Array<DiscountGetPayload<T>>>>;

    defaultImage<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    purchases<T extends PurchaseFindManyArgs = {}>(args?: Subset<T, PurchaseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Purchase>>, PrismaPromise<Array<PurchaseGetPayload<T>>>>;

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    images<T extends ImageFindManyArgs = {}>(args?: Subset<T, ImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>;

    videos<T extends VideoFindManyArgs = {}>(args?: Subset<T, VideoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Video>>, PrismaPromise<Array<VideoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Laptop findUnique
   */
  export type LaptopFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
    /**
     * Throw an Error if a Laptop can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Laptop to fetch.
     * 
    **/
    where: LaptopWhereUniqueInput
  }


  /**
   * Laptop findFirst
   */
  export type LaptopFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
    /**
     * Throw an Error if a Laptop can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Laptop to fetch.
     * 
    **/
    where?: LaptopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laptops to fetch.
     * 
    **/
    orderBy?: Enumerable<LaptopOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laptops.
     * 
    **/
    cursor?: LaptopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laptops from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laptops.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laptops.
     * 
    **/
    distinct?: Enumerable<LaptopScalarFieldEnum>
  }


  /**
   * Laptop findMany
   */
  export type LaptopFindManyArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
    /**
     * Filter, which Laptops to fetch.
     * 
    **/
    where?: LaptopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laptops to fetch.
     * 
    **/
    orderBy?: Enumerable<LaptopOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laptops.
     * 
    **/
    cursor?: LaptopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laptops from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laptops.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LaptopScalarFieldEnum>
  }


  /**
   * Laptop create
   */
  export type LaptopCreateArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
    /**
     * The data needed to create a Laptop.
     * 
    **/
    data: XOR<LaptopCreateInput, LaptopUncheckedCreateInput>
  }


  /**
   * Laptop createMany
   */
  export type LaptopCreateManyArgs = {
    data: Enumerable<LaptopCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Laptop update
   */
  export type LaptopUpdateArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
    /**
     * The data needed to update a Laptop.
     * 
    **/
    data: XOR<LaptopUpdateInput, LaptopUncheckedUpdateInput>
    /**
     * Choose, which Laptop to update.
     * 
    **/
    where: LaptopWhereUniqueInput
  }


  /**
   * Laptop updateMany
   */
  export type LaptopUpdateManyArgs = {
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyInput>
    where?: LaptopWhereInput
  }


  /**
   * Laptop upsert
   */
  export type LaptopUpsertArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
    /**
     * The filter to search for the Laptop to update in case it exists.
     * 
    **/
    where: LaptopWhereUniqueInput
    /**
     * In case the Laptop found by the `where` argument doesn't exist, create a new Laptop with this data.
     * 
    **/
    create: XOR<LaptopCreateInput, LaptopUncheckedCreateInput>
    /**
     * In case the Laptop was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LaptopUpdateInput, LaptopUncheckedUpdateInput>
  }


  /**
   * Laptop delete
   */
  export type LaptopDeleteArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
    /**
     * Filter which Laptop to delete.
     * 
    **/
    where: LaptopWhereUniqueInput
  }


  /**
   * Laptop deleteMany
   */
  export type LaptopDeleteManyArgs = {
    where?: LaptopWhereInput
  }


  /**
   * Laptop without action
   */
  export type LaptopArgs = {
    /**
     * Select specific fields to fetch from the Laptop
     * 
    **/
    select?: LaptopSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LaptopInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    laptopId: number | null
    commentId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    laptopId: number | null
    commentId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    rank: Rank | null
    content: string | null
    authorId: string | null
    isStaff: boolean | null
    laptopId: number | null
    commentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    rank: Rank | null
    content: string | null
    authorId: string | null
    isStaff: boolean | null
    laptopId: number | null
    commentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    rank: number
    content: number
    authorId: number
    isStaff: number
    laptopId: number
    commentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    laptopId?: true
    commentId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    laptopId?: true
    commentId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    rank?: true
    content?: true
    authorId?: true
    isStaff?: true
    laptopId?: true
    commentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    rank?: true
    content?: true
    authorId?: true
    isStaff?: true
    laptopId?: true
    commentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    rank?: true
    content?: true
    authorId?: true
    isStaff?: true
    laptopId?: true
    commentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: Array<CommentScalarFieldEnum>
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: number
    rank: Rank
    content: string
    authorId: string
    isStaff: boolean
    laptopId: number
    commentId: number | null
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Promise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    rank?: boolean
    content?: boolean
    author?: boolean | PersonArgs
    authorId?: boolean
    isStaff?: boolean
    laptop?: boolean | LaptopArgs
    laptopId?: boolean
    comment?: boolean | CommentArgs
    commentId?: boolean
    comments?: boolean | CommentFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | CommentCountOutputTypeArgs
  }

  export type CommentInclude = {
    author?: boolean | PersonArgs
    laptop?: boolean | LaptopArgs
    comment?: boolean | CommentArgs
    comments?: boolean | CommentFindManyArgs
    _count?: boolean | CommentCountOutputTypeArgs
  }

  export type CommentGetPayload<
    S extends boolean | null | undefined | CommentArgs,
    U = keyof S
      > = S extends true
        ? Comment
    : S extends undefined
    ? never
    : S extends CommentArgs | CommentFindManyArgs
    ?'include' extends U
    ? Comment  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? PersonGetPayload<S['include'][P]> :
        P extends 'laptop'
        ? LaptopGetPayload<S['include'][P]> :
        P extends 'comment'
        ? CommentGetPayload<S['include'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CommentCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Comment ?Comment [P]
  : 
          P extends 'author'
        ? PersonGetPayload<S['select'][P]> :
        P extends 'laptop'
        ? LaptopGetPayload<S['select'][P]> :
        P extends 'comment'
        ? CommentGetPayload<S['select'][P]> | null :
        P extends 'comments'
        ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CommentCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Comment
  : Comment


  type CommentCountArgs = Merge<
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }
  >

  export interface CommentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>> : CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): CheckSelect<T, Prisma__CommentClient<Comment>, Prisma__CommentClient<CommentGetPayload<T>>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends PersonArgs = {}>(args?: Subset<T, PersonArgs>): CheckSelect<T, Prisma__PersonClient<Person | null >, Prisma__PersonClient<PersonGetPayload<T> | null >>;

    laptop<T extends LaptopArgs = {}>(args?: Subset<T, LaptopArgs>): CheckSelect<T, Prisma__LaptopClient<Laptop | null >, Prisma__LaptopClient<LaptopGetPayload<T> | null >>;

    comment<T extends CommentArgs = {}>(args?: Subset<T, CommentArgs>): CheckSelect<T, Prisma__CommentClient<Comment | null >, Prisma__CommentClient<CommentGetPayload<T> | null >>;

    comments<T extends CommentFindManyArgs = {}>(args?: Subset<T, CommentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Comment>>, PrismaPromise<Array<CommentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Throw an Error if a Comment can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Comment to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     * 
    **/
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     * 
    **/
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     * 
    **/
    orderBy?: Enumerable<CommentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     * 
    **/
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     * 
    **/
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     * 
    **/
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     * 
    **/
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     * 
    **/
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     * 
    **/
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     * 
    **/
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CommentInclude | null
  }



  /**
   * Model PriceMap
   */


  export type AggregatePriceMap = {
    _count: PriceMapCountAggregateOutputType | null
    _avg: PriceMapAvgAggregateOutputType | null
    _sum: PriceMapSumAggregateOutputType | null
    _min: PriceMapMinAggregateOutputType | null
    _max: PriceMapMaxAggregateOutputType | null
  }

  export type PriceMapAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type PriceMapSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type PriceMapMinAggregateOutputType = {
    id: number | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceMapMaxAggregateOutputType = {
    id: number | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceMapCountAggregateOutputType = {
    id: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PriceMapAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PriceMapSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PriceMapMinAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceMapMaxAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceMapCountAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceMapAggregateArgs = {
    /**
     * Filter which PriceMap to aggregate.
     * 
    **/
    where?: PriceMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<PriceMapOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PriceMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceMaps
    **/
    _count?: true | PriceMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMapMaxAggregateInputType
  }

  export type GetPriceMapAggregateType<T extends PriceMapAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceMap[P]>
      : GetScalarType<T[P], AggregatePriceMap[P]>
  }




  export type PriceMapGroupByArgs = {
    where?: PriceMapWhereInput
    orderBy?: Enumerable<PriceMapOrderByWithAggregationInput>
    by: Array<PriceMapScalarFieldEnum>
    having?: PriceMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceMapCountAggregateInputType | true
    _avg?: PriceMapAvgAggregateInputType
    _sum?: PriceMapSumAggregateInputType
    _min?: PriceMapMinAggregateInputType
    _max?: PriceMapMaxAggregateInputType
  }


  export type PriceMapGroupByOutputType = {
    id: number
    price: Decimal
    createdAt: Date
    updatedAt: Date
    _count: PriceMapCountAggregateOutputType | null
    _avg: PriceMapAvgAggregateOutputType | null
    _sum: PriceMapSumAggregateOutputType | null
    _min: PriceMapMinAggregateOutputType | null
    _max: PriceMapMaxAggregateOutputType | null
  }

  type GetPriceMapGroupByPayload<T extends PriceMapGroupByArgs> = Promise<
    Array<
      PickArray<PriceMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceMapGroupByOutputType[P]>
            : GetScalarType<T[P], PriceMapGroupByOutputType[P]>
        }
      >
    >


  export type PriceMapSelect = {
    id?: boolean
    price?: boolean
    laptops?: boolean | LaptopFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | PriceMapCountOutputTypeArgs
  }

  export type PriceMapInclude = {
    laptops?: boolean | LaptopFindManyArgs
    _count?: boolean | PriceMapCountOutputTypeArgs
  }

  export type PriceMapGetPayload<
    S extends boolean | null | undefined | PriceMapArgs,
    U = keyof S
      > = S extends true
        ? PriceMap
    : S extends undefined
    ? never
    : S extends PriceMapArgs | PriceMapFindManyArgs
    ?'include' extends U
    ? PriceMap  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PriceMapCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PriceMap ?PriceMap [P]
  : 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PriceMapCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : PriceMap
  : PriceMap


  type PriceMapCountArgs = Merge<
    Omit<PriceMapFindManyArgs, 'select' | 'include'> & {
      select?: PriceMapCountAggregateInputType | true
    }
  >

  export interface PriceMapDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PriceMap that matches the filter.
     * @param {PriceMapFindUniqueArgs} args - Arguments to find a PriceMap
     * @example
     * // Get one PriceMap
     * const priceMap = await prisma.priceMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PriceMapFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PriceMapFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PriceMap'> extends True ? CheckSelect<T, Prisma__PriceMapClient<PriceMap>, Prisma__PriceMapClient<PriceMapGetPayload<T>>> : CheckSelect<T, Prisma__PriceMapClient<PriceMap | null >, Prisma__PriceMapClient<PriceMapGetPayload<T> | null >>

    /**
     * Find the first PriceMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceMapFindFirstArgs} args - Arguments to find a PriceMap
     * @example
     * // Get one PriceMap
     * const priceMap = await prisma.priceMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PriceMapFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PriceMapFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PriceMap'> extends True ? CheckSelect<T, Prisma__PriceMapClient<PriceMap>, Prisma__PriceMapClient<PriceMapGetPayload<T>>> : CheckSelect<T, Prisma__PriceMapClient<PriceMap | null >, Prisma__PriceMapClient<PriceMapGetPayload<T> | null >>

    /**
     * Find zero or more PriceMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceMapFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceMaps
     * const priceMaps = await prisma.priceMap.findMany()
     * 
     * // Get first 10 PriceMaps
     * const priceMaps = await prisma.priceMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceMapWithIdOnly = await prisma.priceMap.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PriceMapFindManyArgs>(
      args?: SelectSubset<T, PriceMapFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PriceMap>>, PrismaPromise<Array<PriceMapGetPayload<T>>>>

    /**
     * Create a PriceMap.
     * @param {PriceMapCreateArgs} args - Arguments to create a PriceMap.
     * @example
     * // Create one PriceMap
     * const PriceMap = await prisma.priceMap.create({
     *   data: {
     *     // ... data to create a PriceMap
     *   }
     * })
     * 
    **/
    create<T extends PriceMapCreateArgs>(
      args: SelectSubset<T, PriceMapCreateArgs>
    ): CheckSelect<T, Prisma__PriceMapClient<PriceMap>, Prisma__PriceMapClient<PriceMapGetPayload<T>>>

    /**
     * Create many PriceMaps.
     *     @param {PriceMapCreateManyArgs} args - Arguments to create many PriceMaps.
     *     @example
     *     // Create many PriceMaps
     *     const priceMap = await prisma.priceMap.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PriceMapCreateManyArgs>(
      args?: SelectSubset<T, PriceMapCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PriceMap.
     * @param {PriceMapDeleteArgs} args - Arguments to delete one PriceMap.
     * @example
     * // Delete one PriceMap
     * const PriceMap = await prisma.priceMap.delete({
     *   where: {
     *     // ... filter to delete one PriceMap
     *   }
     * })
     * 
    **/
    delete<T extends PriceMapDeleteArgs>(
      args: SelectSubset<T, PriceMapDeleteArgs>
    ): CheckSelect<T, Prisma__PriceMapClient<PriceMap>, Prisma__PriceMapClient<PriceMapGetPayload<T>>>

    /**
     * Update one PriceMap.
     * @param {PriceMapUpdateArgs} args - Arguments to update one PriceMap.
     * @example
     * // Update one PriceMap
     * const priceMap = await prisma.priceMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PriceMapUpdateArgs>(
      args: SelectSubset<T, PriceMapUpdateArgs>
    ): CheckSelect<T, Prisma__PriceMapClient<PriceMap>, Prisma__PriceMapClient<PriceMapGetPayload<T>>>

    /**
     * Delete zero or more PriceMaps.
     * @param {PriceMapDeleteManyArgs} args - Arguments to filter PriceMaps to delete.
     * @example
     * // Delete a few PriceMaps
     * const { count } = await prisma.priceMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PriceMapDeleteManyArgs>(
      args?: SelectSubset<T, PriceMapDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceMaps
     * const priceMap = await prisma.priceMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PriceMapUpdateManyArgs>(
      args: SelectSubset<T, PriceMapUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceMap.
     * @param {PriceMapUpsertArgs} args - Arguments to update or create a PriceMap.
     * @example
     * // Update or create a PriceMap
     * const priceMap = await prisma.priceMap.upsert({
     *   create: {
     *     // ... data to create a PriceMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceMap we want to update
     *   }
     * })
    **/
    upsert<T extends PriceMapUpsertArgs>(
      args: SelectSubset<T, PriceMapUpsertArgs>
    ): CheckSelect<T, Prisma__PriceMapClient<PriceMap>, Prisma__PriceMapClient<PriceMapGetPayload<T>>>

    /**
     * Count the number of PriceMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceMapCountArgs} args - Arguments to filter PriceMaps to count.
     * @example
     * // Count the number of PriceMaps
     * const count = await prisma.priceMap.count({
     *   where: {
     *     // ... the filter for the PriceMaps we want to count
     *   }
     * })
    **/
    count<T extends PriceMapCountArgs>(
      args?: Subset<T, PriceMapCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceMapAggregateArgs>(args: Subset<T, PriceMapAggregateArgs>): PrismaPromise<GetPriceMapAggregateType<T>>

    /**
     * Group by PriceMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceMapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceMapGroupByArgs['orderBy'] }
        : { orderBy?: PriceMapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceMapGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PriceMapClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    laptops<T extends LaptopFindManyArgs = {}>(args?: Subset<T, LaptopFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PriceMap findUnique
   */
  export type PriceMapFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
    /**
     * Throw an Error if a PriceMap can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PriceMap to fetch.
     * 
    **/
    where: PriceMapWhereUniqueInput
  }


  /**
   * PriceMap findFirst
   */
  export type PriceMapFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
    /**
     * Throw an Error if a PriceMap can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PriceMap to fetch.
     * 
    **/
    where?: PriceMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<PriceMapOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceMaps.
     * 
    **/
    cursor?: PriceMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceMaps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceMaps.
     * 
    **/
    distinct?: Enumerable<PriceMapScalarFieldEnum>
  }


  /**
   * PriceMap findMany
   */
  export type PriceMapFindManyArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
    /**
     * Filter, which PriceMaps to fetch.
     * 
    **/
    where?: PriceMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceMaps to fetch.
     * 
    **/
    orderBy?: Enumerable<PriceMapOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceMaps.
     * 
    **/
    cursor?: PriceMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceMaps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceMaps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PriceMapScalarFieldEnum>
  }


  /**
   * PriceMap create
   */
  export type PriceMapCreateArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
    /**
     * The data needed to create a PriceMap.
     * 
    **/
    data: XOR<PriceMapCreateInput, PriceMapUncheckedCreateInput>
  }


  /**
   * PriceMap createMany
   */
  export type PriceMapCreateManyArgs = {
    data: Enumerable<PriceMapCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PriceMap update
   */
  export type PriceMapUpdateArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
    /**
     * The data needed to update a PriceMap.
     * 
    **/
    data: XOR<PriceMapUpdateInput, PriceMapUncheckedUpdateInput>
    /**
     * Choose, which PriceMap to update.
     * 
    **/
    where: PriceMapWhereUniqueInput
  }


  /**
   * PriceMap updateMany
   */
  export type PriceMapUpdateManyArgs = {
    data: XOR<PriceMapUpdateManyMutationInput, PriceMapUncheckedUpdateManyInput>
    where?: PriceMapWhereInput
  }


  /**
   * PriceMap upsert
   */
  export type PriceMapUpsertArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
    /**
     * The filter to search for the PriceMap to update in case it exists.
     * 
    **/
    where: PriceMapWhereUniqueInput
    /**
     * In case the PriceMap found by the `where` argument doesn't exist, create a new PriceMap with this data.
     * 
    **/
    create: XOR<PriceMapCreateInput, PriceMapUncheckedCreateInput>
    /**
     * In case the PriceMap was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PriceMapUpdateInput, PriceMapUncheckedUpdateInput>
  }


  /**
   * PriceMap delete
   */
  export type PriceMapDeleteArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
    /**
     * Filter which PriceMap to delete.
     * 
    **/
    where: PriceMapWhereUniqueInput
  }


  /**
   * PriceMap deleteMany
   */
  export type PriceMapDeleteManyArgs = {
    where?: PriceMapWhereInput
  }


  /**
   * PriceMap without action
   */
  export type PriceMapArgs = {
    /**
     * Select specific fields to fetch from the PriceMap
     * 
    **/
    select?: PriceMapSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PriceMapInclude | null
  }



  /**
   * Model Discount
   */


  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  export type DiscountAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type DiscountSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type DiscountMinAggregateOutputType = {
    id: number | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountMaxAggregateOutputType = {
    id: number | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscountCountAggregateOutputType = {
    id: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiscountAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type DiscountSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type DiscountMinAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountMaxAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscountCountAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiscountAggregateArgs = {
    /**
     * Filter which Discount to aggregate.
     * 
    **/
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     * 
    **/
    orderBy?: Enumerable<DiscountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounts
    **/
    _count?: true | DiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountMaxAggregateInputType
  }

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>
  }




  export type DiscountGroupByArgs = {
    where?: DiscountWhereInput
    orderBy?: Enumerable<DiscountOrderByWithAggregationInput>
    by: Array<DiscountScalarFieldEnum>
    having?: DiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCountAggregateInputType | true
    _avg?: DiscountAvgAggregateInputType
    _sum?: DiscountSumAggregateInputType
    _min?: DiscountMinAggregateInputType
    _max?: DiscountMaxAggregateInputType
  }


  export type DiscountGroupByOutputType = {
    id: number
    value: number
    createdAt: Date
    updatedAt: Date
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> = Promise<
    Array<
      PickArray<DiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>
        }
      >
    >


  export type DiscountSelect = {
    id?: boolean
    value?: boolean
    laptops?: boolean | LaptopFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | DiscountCountOutputTypeArgs
  }

  export type DiscountInclude = {
    laptops?: boolean | LaptopFindManyArgs
    _count?: boolean | DiscountCountOutputTypeArgs
  }

  export type DiscountGetPayload<
    S extends boolean | null | undefined | DiscountArgs,
    U = keyof S
      > = S extends true
        ? Discount
    : S extends undefined
    ? never
    : S extends DiscountArgs | DiscountFindManyArgs
    ?'include' extends U
    ? Discount  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? DiscountCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Discount ?Discount [P]
  : 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? DiscountCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Discount
  : Discount


  type DiscountCountArgs = Merge<
    Omit<DiscountFindManyArgs, 'select' | 'include'> & {
      select?: DiscountCountAggregateInputType | true
    }
  >

  export interface DiscountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DiscountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DiscountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Discount'> extends True ? CheckSelect<T, Prisma__DiscountClient<Discount>, Prisma__DiscountClient<DiscountGetPayload<T>>> : CheckSelect<T, Prisma__DiscountClient<Discount | null >, Prisma__DiscountClient<DiscountGetPayload<T> | null >>

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DiscountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DiscountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Discount'> extends True ? CheckSelect<T, Prisma__DiscountClient<Discount>, Prisma__DiscountClient<DiscountGetPayload<T>>> : CheckSelect<T, Prisma__DiscountClient<Discount | null >, Prisma__DiscountClient<DiscountGetPayload<T> | null >>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DiscountFindManyArgs>(
      args?: SelectSubset<T, DiscountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Discount>>, PrismaPromise<Array<DiscountGetPayload<T>>>>

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     * 
    **/
    create<T extends DiscountCreateArgs>(
      args: SelectSubset<T, DiscountCreateArgs>
    ): CheckSelect<T, Prisma__DiscountClient<Discount>, Prisma__DiscountClient<DiscountGetPayload<T>>>

    /**
     * Create many Discounts.
     *     @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     *     @example
     *     // Create many Discounts
     *     const discount = await prisma.discount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DiscountCreateManyArgs>(
      args?: SelectSubset<T, DiscountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     * 
    **/
    delete<T extends DiscountDeleteArgs>(
      args: SelectSubset<T, DiscountDeleteArgs>
    ): CheckSelect<T, Prisma__DiscountClient<Discount>, Prisma__DiscountClient<DiscountGetPayload<T>>>

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DiscountUpdateArgs>(
      args: SelectSubset<T, DiscountUpdateArgs>
    ): CheckSelect<T, Prisma__DiscountClient<Discount>, Prisma__DiscountClient<DiscountGetPayload<T>>>

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DiscountDeleteManyArgs>(
      args?: SelectSubset<T, DiscountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DiscountUpdateManyArgs>(
      args: SelectSubset<T, DiscountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
    **/
    upsert<T extends DiscountUpsertArgs>(
      args: SelectSubset<T, DiscountUpsertArgs>
    ): CheckSelect<T, Prisma__DiscountClient<Discount>, Prisma__DiscountClient<DiscountGetPayload<T>>>

    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscountAggregateArgs>(args: Subset<T, DiscountAggregateArgs>): PrismaPromise<GetDiscountAggregateType<T>>

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs['orderBy'] }
        : { orderBy?: DiscountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DiscountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    laptops<T extends LaptopFindManyArgs = {}>(args?: Subset<T, LaptopFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
    /**
     * Throw an Error if a Discount can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Discount to fetch.
     * 
    **/
    where: DiscountWhereUniqueInput
  }


  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
    /**
     * Throw an Error if a Discount can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Discount to fetch.
     * 
    **/
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     * 
    **/
    orderBy?: Enumerable<DiscountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     * 
    **/
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     * 
    **/
    distinct?: Enumerable<DiscountScalarFieldEnum>
  }


  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
    /**
     * Filter, which Discounts to fetch.
     * 
    **/
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     * 
    **/
    orderBy?: Enumerable<DiscountOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounts.
     * 
    **/
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DiscountScalarFieldEnum>
  }


  /**
   * Discount create
   */
  export type DiscountCreateArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
    /**
     * The data needed to create a Discount.
     * 
    **/
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
  }


  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs = {
    data: Enumerable<DiscountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Discount update
   */
  export type DiscountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
    /**
     * The data needed to update a Discount.
     * 
    **/
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
    /**
     * Choose, which Discount to update.
     * 
    **/
    where: DiscountWhereUniqueInput
  }


  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs = {
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    where?: DiscountWhereInput
  }


  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
    /**
     * The filter to search for the Discount to update in case it exists.
     * 
    **/
    where: DiscountWhereUniqueInput
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     * 
    **/
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
  }


  /**
   * Discount delete
   */
  export type DiscountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
    /**
     * Filter which Discount to delete.
     * 
    **/
    where: DiscountWhereUniqueInput
  }


  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs = {
    where?: DiscountWhereInput
  }


  /**
   * Discount without action
   */
  export type DiscountArgs = {
    /**
     * Select specific fields to fetch from the Discount
     * 
    **/
    select?: DiscountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DiscountInclude | null
  }



  /**
   * Model Purchase
   */


  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    customerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    customerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    customerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs = {
    /**
     * Filter which Purchase to aggregate.
     * 
    **/
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     * 
    **/
    orderBy?: Enumerable<PurchaseOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs = {
    where?: PurchaseWhereInput
    orderBy?: Enumerable<PurchaseOrderByWithAggregationInput>
    by: Array<PurchaseScalarFieldEnum>
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }


  export type PurchaseGroupByOutputType = {
    id: number
    customerId: string
    createdAt: Date
    updatedAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Promise<
    Array<
      PickArray<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect = {
    id?: boolean
    customer?: boolean | CustomerArgs
    customerId?: boolean
    laptops?: boolean | LaptopFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | PurchaseCountOutputTypeArgs
  }

  export type PurchaseInclude = {
    customer?: boolean | CustomerArgs
    laptops?: boolean | LaptopFindManyArgs
    _count?: boolean | PurchaseCountOutputTypeArgs
  }

  export type PurchaseGetPayload<
    S extends boolean | null | undefined | PurchaseArgs,
    U = keyof S
      > = S extends true
        ? Purchase
    : S extends undefined
    ? never
    : S extends PurchaseArgs | PurchaseFindManyArgs
    ?'include' extends U
    ? Purchase  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'customer'
        ? CustomerGetPayload<S['include'][P]> :
        P extends 'laptops'
        ? Array < LaptopGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PurchaseCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Purchase ?Purchase [P]
  : 
          P extends 'customer'
        ? CustomerGetPayload<S['select'][P]> :
        P extends 'laptops'
        ? Array < LaptopGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PurchaseCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Purchase
  : Purchase


  type PurchaseCountArgs = Merge<
    Omit<PurchaseFindManyArgs, 'select' | 'include'> & {
      select?: PurchaseCountAggregateInputType | true
    }
  >

  export interface PurchaseDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PurchaseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PurchaseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Purchase'> extends True ? CheckSelect<T, Prisma__PurchaseClient<Purchase>, Prisma__PurchaseClient<PurchaseGetPayload<T>>> : CheckSelect<T, Prisma__PurchaseClient<Purchase | null >, Prisma__PurchaseClient<PurchaseGetPayload<T> | null >>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PurchaseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PurchaseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Purchase'> extends True ? CheckSelect<T, Prisma__PurchaseClient<Purchase>, Prisma__PurchaseClient<PurchaseGetPayload<T>>> : CheckSelect<T, Prisma__PurchaseClient<Purchase | null >, Prisma__PurchaseClient<PurchaseGetPayload<T> | null >>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PurchaseFindManyArgs>(
      args?: SelectSubset<T, PurchaseFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Purchase>>, PrismaPromise<Array<PurchaseGetPayload<T>>>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
    **/
    create<T extends PurchaseCreateArgs>(
      args: SelectSubset<T, PurchaseCreateArgs>
    ): CheckSelect<T, Prisma__PurchaseClient<Purchase>, Prisma__PurchaseClient<PurchaseGetPayload<T>>>

    /**
     * Create many Purchases.
     *     @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     *     @example
     *     // Create many Purchases
     *     const purchase = await prisma.purchase.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PurchaseCreateManyArgs>(
      args?: SelectSubset<T, PurchaseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
    **/
    delete<T extends PurchaseDeleteArgs>(
      args: SelectSubset<T, PurchaseDeleteArgs>
    ): CheckSelect<T, Prisma__PurchaseClient<Purchase>, Prisma__PurchaseClient<PurchaseGetPayload<T>>>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PurchaseUpdateArgs>(
      args: SelectSubset<T, PurchaseUpdateArgs>
    ): CheckSelect<T, Prisma__PurchaseClient<Purchase>, Prisma__PurchaseClient<PurchaseGetPayload<T>>>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PurchaseDeleteManyArgs>(
      args?: SelectSubset<T, PurchaseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PurchaseUpdateManyArgs>(
      args: SelectSubset<T, PurchaseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
    **/
    upsert<T extends PurchaseUpsertArgs>(
      args: SelectSubset<T, PurchaseUpsertArgs>
    ): CheckSelect<T, Prisma__PurchaseClient<Purchase>, Prisma__PurchaseClient<PurchaseGetPayload<T>>>

    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PurchaseClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    customer<T extends CustomerArgs = {}>(args?: Subset<T, CustomerArgs>): CheckSelect<T, Prisma__CustomerClient<Customer | null >, Prisma__CustomerClient<CustomerGetPayload<T> | null >>;

    laptops<T extends LaptopFindManyArgs = {}>(args?: Subset<T, LaptopFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Throw an Error if a Purchase can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Purchase to fetch.
     * 
    **/
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Throw an Error if a Purchase can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Purchase to fetch.
     * 
    **/
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     * 
    **/
    orderBy?: Enumerable<PurchaseOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     * 
    **/
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     * 
    **/
    distinct?: Enumerable<PurchaseScalarFieldEnum>
  }


  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Filter, which Purchases to fetch.
     * 
    **/
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     * 
    **/
    orderBy?: Enumerable<PurchaseOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     * 
    **/
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PurchaseScalarFieldEnum>
  }


  /**
   * Purchase create
   */
  export type PurchaseCreateArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * The data needed to create a Purchase.
     * 
    **/
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }


  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs = {
    data: Enumerable<PurchaseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * The data needed to update a Purchase.
     * 
    **/
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     * 
    **/
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs = {
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    where?: PurchaseWhereInput
  }


  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     * 
    **/
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     * 
    **/
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }


  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
    /**
     * Filter which Purchase to delete.
     * 
    **/
    where: PurchaseWhereUniqueInput
  }


  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs = {
    where?: PurchaseWhereInput
  }


  /**
   * Purchase without action
   */
  export type PurchaseArgs = {
    /**
     * Select specific fields to fetch from the Purchase
     * 
    **/
    select?: PurchaseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PurchaseInclude | null
  }



  /**
   * Model Passage
   */


  export type AggregatePassage = {
    _count: PassageCountAggregateOutputType | null
    _avg: PassageAvgAggregateOutputType | null
    _sum: PassageSumAggregateOutputType | null
    _min: PassageMinAggregateOutputType | null
    _max: PassageMaxAggregateOutputType | null
  }

  export type PassageAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PassageSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PassageMinAggregateOutputType = {
    id: number | null
    header: string | null
    content: string | null
    postId: number | null
  }

  export type PassageMaxAggregateOutputType = {
    id: number | null
    header: string | null
    content: string | null
    postId: number | null
  }

  export type PassageCountAggregateOutputType = {
    id: number
    header: number
    content: number
    postId: number
    _all: number
  }


  export type PassageAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PassageSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PassageMinAggregateInputType = {
    id?: true
    header?: true
    content?: true
    postId?: true
  }

  export type PassageMaxAggregateInputType = {
    id?: true
    header?: true
    content?: true
    postId?: true
  }

  export type PassageCountAggregateInputType = {
    id?: true
    header?: true
    content?: true
    postId?: true
    _all?: true
  }

  export type PassageAggregateArgs = {
    /**
     * Filter which Passage to aggregate.
     * 
    **/
    where?: PassageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passages to fetch.
     * 
    **/
    orderBy?: Enumerable<PassageOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PassageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passages
    **/
    _count?: true | PassageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassageMaxAggregateInputType
  }

  export type GetPassageAggregateType<T extends PassageAggregateArgs> = {
        [P in keyof T & keyof AggregatePassage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassage[P]>
      : GetScalarType<T[P], AggregatePassage[P]>
  }




  export type PassageGroupByArgs = {
    where?: PassageWhereInput
    orderBy?: Enumerable<PassageOrderByWithAggregationInput>
    by: Array<PassageScalarFieldEnum>
    having?: PassageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassageCountAggregateInputType | true
    _avg?: PassageAvgAggregateInputType
    _sum?: PassageSumAggregateInputType
    _min?: PassageMinAggregateInputType
    _max?: PassageMaxAggregateInputType
  }


  export type PassageGroupByOutputType = {
    id: number
    header: string
    content: string
    postId: number
    _count: PassageCountAggregateOutputType | null
    _avg: PassageAvgAggregateOutputType | null
    _sum: PassageSumAggregateOutputType | null
    _min: PassageMinAggregateOutputType | null
    _max: PassageMaxAggregateOutputType | null
  }

  type GetPassageGroupByPayload<T extends PassageGroupByArgs> = Promise<
    Array<
      PickArray<PassageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassageGroupByOutputType[P]>
            : GetScalarType<T[P], PassageGroupByOutputType[P]>
        }
      >
    >


  export type PassageSelect = {
    id?: boolean
    header?: boolean
    content?: boolean
    post?: boolean | PostArgs
    postId?: boolean
  }

  export type PassageInclude = {
    post?: boolean | PostArgs
  }

  export type PassageGetPayload<
    S extends boolean | null | undefined | PassageArgs,
    U = keyof S
      > = S extends true
        ? Passage
    : S extends undefined
    ? never
    : S extends PassageArgs | PassageFindManyArgs
    ?'include' extends U
    ? Passage  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'post'
        ? PostGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Passage ?Passage [P]
  : 
          P extends 'post'
        ? PostGetPayload<S['select'][P]> : never
  } 
    : Passage
  : Passage


  type PassageCountArgs = Merge<
    Omit<PassageFindManyArgs, 'select' | 'include'> & {
      select?: PassageCountAggregateInputType | true
    }
  >

  export interface PassageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Passage that matches the filter.
     * @param {PassageFindUniqueArgs} args - Arguments to find a Passage
     * @example
     * // Get one Passage
     * const passage = await prisma.passage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PassageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PassageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Passage'> extends True ? CheckSelect<T, Prisma__PassageClient<Passage>, Prisma__PassageClient<PassageGetPayload<T>>> : CheckSelect<T, Prisma__PassageClient<Passage | null >, Prisma__PassageClient<PassageGetPayload<T> | null >>

    /**
     * Find the first Passage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageFindFirstArgs} args - Arguments to find a Passage
     * @example
     * // Get one Passage
     * const passage = await prisma.passage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PassageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PassageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Passage'> extends True ? CheckSelect<T, Prisma__PassageClient<Passage>, Prisma__PassageClient<PassageGetPayload<T>>> : CheckSelect<T, Prisma__PassageClient<Passage | null >, Prisma__PassageClient<PassageGetPayload<T> | null >>

    /**
     * Find zero or more Passages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passages
     * const passages = await prisma.passage.findMany()
     * 
     * // Get first 10 Passages
     * const passages = await prisma.passage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passageWithIdOnly = await prisma.passage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PassageFindManyArgs>(
      args?: SelectSubset<T, PassageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Passage>>, PrismaPromise<Array<PassageGetPayload<T>>>>

    /**
     * Create a Passage.
     * @param {PassageCreateArgs} args - Arguments to create a Passage.
     * @example
     * // Create one Passage
     * const Passage = await prisma.passage.create({
     *   data: {
     *     // ... data to create a Passage
     *   }
     * })
     * 
    **/
    create<T extends PassageCreateArgs>(
      args: SelectSubset<T, PassageCreateArgs>
    ): CheckSelect<T, Prisma__PassageClient<Passage>, Prisma__PassageClient<PassageGetPayload<T>>>

    /**
     * Create many Passages.
     *     @param {PassageCreateManyArgs} args - Arguments to create many Passages.
     *     @example
     *     // Create many Passages
     *     const passage = await prisma.passage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PassageCreateManyArgs>(
      args?: SelectSubset<T, PassageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Passage.
     * @param {PassageDeleteArgs} args - Arguments to delete one Passage.
     * @example
     * // Delete one Passage
     * const Passage = await prisma.passage.delete({
     *   where: {
     *     // ... filter to delete one Passage
     *   }
     * })
     * 
    **/
    delete<T extends PassageDeleteArgs>(
      args: SelectSubset<T, PassageDeleteArgs>
    ): CheckSelect<T, Prisma__PassageClient<Passage>, Prisma__PassageClient<PassageGetPayload<T>>>

    /**
     * Update one Passage.
     * @param {PassageUpdateArgs} args - Arguments to update one Passage.
     * @example
     * // Update one Passage
     * const passage = await prisma.passage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PassageUpdateArgs>(
      args: SelectSubset<T, PassageUpdateArgs>
    ): CheckSelect<T, Prisma__PassageClient<Passage>, Prisma__PassageClient<PassageGetPayload<T>>>

    /**
     * Delete zero or more Passages.
     * @param {PassageDeleteManyArgs} args - Arguments to filter Passages to delete.
     * @example
     * // Delete a few Passages
     * const { count } = await prisma.passage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PassageDeleteManyArgs>(
      args?: SelectSubset<T, PassageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passages
     * const passage = await prisma.passage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PassageUpdateManyArgs>(
      args: SelectSubset<T, PassageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Passage.
     * @param {PassageUpsertArgs} args - Arguments to update or create a Passage.
     * @example
     * // Update or create a Passage
     * const passage = await prisma.passage.upsert({
     *   create: {
     *     // ... data to create a Passage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passage we want to update
     *   }
     * })
    **/
    upsert<T extends PassageUpsertArgs>(
      args: SelectSubset<T, PassageUpsertArgs>
    ): CheckSelect<T, Prisma__PassageClient<Passage>, Prisma__PassageClient<PassageGetPayload<T>>>

    /**
     * Count the number of Passages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageCountArgs} args - Arguments to filter Passages to count.
     * @example
     * // Count the number of Passages
     * const count = await prisma.passage.count({
     *   where: {
     *     // ... the filter for the Passages we want to count
     *   }
     * })
    **/
    count<T extends PassageCountArgs>(
      args?: Subset<T, PassageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassageAggregateArgs>(args: Subset<T, PassageAggregateArgs>): PrismaPromise<GetPassageAggregateType<T>>

    /**
     * Group by Passage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassageGroupByArgs['orderBy'] }
        : { orderBy?: PassageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassageGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PassageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Passage findUnique
   */
  export type PassageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
    /**
     * Throw an Error if a Passage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Passage to fetch.
     * 
    **/
    where: PassageWhereUniqueInput
  }


  /**
   * Passage findFirst
   */
  export type PassageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
    /**
     * Throw an Error if a Passage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Passage to fetch.
     * 
    **/
    where?: PassageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passages to fetch.
     * 
    **/
    orderBy?: Enumerable<PassageOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passages.
     * 
    **/
    cursor?: PassageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passages.
     * 
    **/
    distinct?: Enumerable<PassageScalarFieldEnum>
  }


  /**
   * Passage findMany
   */
  export type PassageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
    /**
     * Filter, which Passages to fetch.
     * 
    **/
    where?: PassageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passages to fetch.
     * 
    **/
    orderBy?: Enumerable<PassageOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passages.
     * 
    **/
    cursor?: PassageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PassageScalarFieldEnum>
  }


  /**
   * Passage create
   */
  export type PassageCreateArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
    /**
     * The data needed to create a Passage.
     * 
    **/
    data: XOR<PassageCreateInput, PassageUncheckedCreateInput>
  }


  /**
   * Passage createMany
   */
  export type PassageCreateManyArgs = {
    data: Enumerable<PassageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Passage update
   */
  export type PassageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
    /**
     * The data needed to update a Passage.
     * 
    **/
    data: XOR<PassageUpdateInput, PassageUncheckedUpdateInput>
    /**
     * Choose, which Passage to update.
     * 
    **/
    where: PassageWhereUniqueInput
  }


  /**
   * Passage updateMany
   */
  export type PassageUpdateManyArgs = {
    data: XOR<PassageUpdateManyMutationInput, PassageUncheckedUpdateManyInput>
    where?: PassageWhereInput
  }


  /**
   * Passage upsert
   */
  export type PassageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
    /**
     * The filter to search for the Passage to update in case it exists.
     * 
    **/
    where: PassageWhereUniqueInput
    /**
     * In case the Passage found by the `where` argument doesn't exist, create a new Passage with this data.
     * 
    **/
    create: XOR<PassageCreateInput, PassageUncheckedCreateInput>
    /**
     * In case the Passage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PassageUpdateInput, PassageUncheckedUpdateInput>
  }


  /**
   * Passage delete
   */
  export type PassageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
    /**
     * Filter which Passage to delete.
     * 
    **/
    where: PassageWhereUniqueInput
  }


  /**
   * Passage deleteMany
   */
  export type PassageDeleteManyArgs = {
    where?: PassageWhereInput
  }


  /**
   * Passage without action
   */
  export type PassageArgs = {
    /**
     * Select specific fields to fetch from the Passage
     * 
    **/
    select?: PassageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PassageInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    defaultImageId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    defaultImageId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: string | null
    defaultImageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: string | null
    defaultImageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    defaultImageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    defaultImageId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    defaultImageId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    defaultImageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    defaultImageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    defaultImageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    title: string
    authorId: string
    defaultImageId: number | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    title?: boolean
    passages?: boolean | PassageFindManyArgs
    laptops?: boolean | LaptopFindManyArgs
    author?: boolean | UserArgs
    authorId?: boolean
    defaultImage?: boolean | ImageArgs
    defaultImageId?: boolean
    images?: boolean | ImageFindManyArgs
    videos?: boolean | VideoFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostInclude = {
    passages?: boolean | PassageFindManyArgs
    laptops?: boolean | LaptopFindManyArgs
    author?: boolean | UserArgs
    defaultImage?: boolean | ImageArgs
    images?: boolean | ImageFindManyArgs
    videos?: boolean | VideoFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'passages'
        ? Array < PassageGetPayload<S['include'][P]>>  :
        P extends 'laptops'
        ? Array < LaptopGetPayload<S['include'][P]>>  :
        P extends 'author'
        ? UserGetPayload<S['include'][P]> :
        P extends 'defaultImage'
        ? ImageGetPayload<S['include'][P]> | null :
        P extends 'images'
        ? Array < ImageGetPayload<S['include'][P]>>  :
        P extends 'videos'
        ? Array < VideoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'passages'
        ? Array < PassageGetPayload<S['select'][P]>>  :
        P extends 'laptops'
        ? Array < LaptopGetPayload<S['select'][P]>>  :
        P extends 'author'
        ? UserGetPayload<S['select'][P]> :
        P extends 'defaultImage'
        ? ImageGetPayload<S['select'][P]> | null :
        P extends 'images'
        ? Array < ImageGetPayload<S['select'][P]>>  :
        P extends 'videos'
        ? Array < VideoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    passages<T extends PassageFindManyArgs = {}>(args?: Subset<T, PassageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Passage>>, PrismaPromise<Array<PassageGetPayload<T>>>>;

    laptops<T extends LaptopFindManyArgs = {}>(args?: Subset<T, LaptopFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>;

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    defaultImage<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    images<T extends ImageFindManyArgs = {}>(args?: Subset<T, ImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>;

    videos<T extends VideoFindManyArgs = {}>(args?: Subset<T, VideoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Video>>, PrismaPromise<Array<VideoGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    title: string | null
    mimeType: MimeType | null
    data: Buffer | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    title: string | null
    mimeType: MimeType | null
    data: Buffer | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    title: number
    mimeType: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    title?: true
    mimeType?: true
    data?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    title?: true
    mimeType?: true
    data?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    title?: true
    mimeType?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: Array<ImageScalarFieldEnum>
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: number
    title: string
    mimeType: MimeType
    data: Buffer
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Promise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect = {
    id?: boolean
    title?: boolean
    mimeType?: boolean
    data?: boolean
    laptops?: boolean | LaptopFindManyArgs
    post?: boolean | PostFindManyArgs
    defaultLaptops?: boolean | LaptopFindManyArgs
    defaultPosts?: boolean | PostFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageInclude = {
    laptops?: boolean | LaptopFindManyArgs
    post?: boolean | PostFindManyArgs
    defaultLaptops?: boolean | LaptopFindManyArgs
    defaultPosts?: boolean | PostFindManyArgs
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageGetPayload<
    S extends boolean | null | undefined | ImageArgs,
    U = keyof S
      > = S extends true
        ? Image
    : S extends undefined
    ? never
    : S extends ImageArgs | ImageFindManyArgs
    ?'include' extends U
    ? Image  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['include'][P]>>  :
        P extends 'post'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'defaultLaptops'
        ? Array < LaptopGetPayload<S['include'][P]>>  :
        P extends 'defaultPosts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ImageCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Image ?Image [P]
  : 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['select'][P]>>  :
        P extends 'post'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'defaultLaptops'
        ? Array < LaptopGetPayload<S['select'][P]>>  :
        P extends 'defaultPosts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ImageCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Image
  : Image


  type ImageCountArgs = Merge<
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }
  >

  export interface ImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    laptops<T extends LaptopFindManyArgs = {}>(args?: Subset<T, LaptopFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>;

    post<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    defaultLaptops<T extends LaptopFindManyArgs = {}>(args?: Subset<T, LaptopFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>;

    defaultPosts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
     * 
    **/
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs = {
    data: Enumerable<ImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
     * 
    **/
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
     * 
    **/
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     * 
    **/
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
  }



  /**
   * Model Video
   */


  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs = {
    /**
     * Filter which Video to aggregate.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs = {
    where?: VideoWhereInput
    orderBy?: Enumerable<VideoOrderByWithAggregationInput>
    by: Array<VideoScalarFieldEnum>
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }


  export type VideoGroupByOutputType = {
    id: number
    title: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Promise<
    Array<
      PickArray<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect = {
    id?: boolean
    title?: boolean
    url?: boolean
    laptops?: boolean | LaptopFindManyArgs
    post?: boolean | PostFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | VideoCountOutputTypeArgs
  }

  export type VideoInclude = {
    laptops?: boolean | LaptopFindManyArgs
    post?: boolean | PostFindManyArgs
    _count?: boolean | VideoCountOutputTypeArgs
  }

  export type VideoGetPayload<
    S extends boolean | null | undefined | VideoArgs,
    U = keyof S
      > = S extends true
        ? Video
    : S extends undefined
    ? never
    : S extends VideoArgs | VideoFindManyArgs
    ?'include' extends U
    ? Video  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['include'][P]>>  :
        P extends 'post'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? VideoCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Video ?Video [P]
  : 
          P extends 'laptops'
        ? Array < LaptopGetPayload<S['select'][P]>>  :
        P extends 'post'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? VideoCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Video
  : Video


  type VideoCountArgs = Merge<
    Omit<VideoFindManyArgs, 'select' | 'include'> & {
      select?: VideoCountAggregateInputType | true
    }
  >

  export interface VideoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VideoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Video'> extends True ? CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>> : CheckSelect<T, Prisma__VideoClient<Video | null >, Prisma__VideoClient<VideoGetPayload<T> | null >>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VideoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Video'> extends True ? CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>> : CheckSelect<T, Prisma__VideoClient<Video | null >, Prisma__VideoClient<VideoGetPayload<T> | null >>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VideoFindManyArgs>(
      args?: SelectSubset<T, VideoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Video>>, PrismaPromise<Array<VideoGetPayload<T>>>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
    **/
    create<T extends VideoCreateArgs>(
      args: SelectSubset<T, VideoCreateArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Create many Videos.
     *     @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoCreateManyArgs>(
      args?: SelectSubset<T, VideoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
    **/
    delete<T extends VideoDeleteArgs>(
      args: SelectSubset<T, VideoDeleteArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoUpdateArgs>(
      args: SelectSubset<T, VideoUpdateArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoDeleteManyArgs>(
      args?: SelectSubset<T, VideoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoUpdateManyArgs>(
      args: SelectSubset<T, VideoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
    **/
    upsert<T extends VideoUpsertArgs>(
      args: SelectSubset<T, VideoUpsertArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VideoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    laptops<T extends LaptopFindManyArgs = {}>(args?: Subset<T, LaptopFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Laptop>>, PrismaPromise<Array<LaptopGetPayload<T>>>>;

    post<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Throw an Error if a Video can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Video to fetch.
     * 
    **/
    where: VideoWhereUniqueInput
  }


  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Throw an Error if a Video can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Video to fetch.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     * 
    **/
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video findMany
   */
  export type VideoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter, which Videos to fetch.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video create
   */
  export type VideoCreateArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The data needed to create a Video.
     * 
    **/
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }


  /**
   * Video createMany
   */
  export type VideoCreateManyArgs = {
    data: Enumerable<VideoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Video update
   */
  export type VideoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The data needed to update a Video.
     * 
    **/
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     * 
    **/
    where: VideoWhereUniqueInput
  }


  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs = {
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    where?: VideoWhereInput
  }


  /**
   * Video upsert
   */
  export type VideoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The filter to search for the Video to update in case it exists.
     * 
    **/
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     * 
    **/
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }


  /**
   * Video delete
   */
  export type VideoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter which Video to delete.
     * 
    **/
    where: VideoWhereUniqueInput
  }


  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs = {
    where?: VideoWhereInput
  }


  /**
   * Video without action
   */
  export type VideoArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PersonScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LaptopScalarFieldEnum: {
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
  };

  export type LaptopScalarFieldEnum = (typeof LaptopScalarFieldEnum)[keyof typeof LaptopScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    rank: 'rank',
    content: 'content',
    authorId: 'authorId',
    isStaff: 'isStaff',
    laptopId: 'laptopId',
    commentId: 'commentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PriceMapScalarFieldEnum: {
    id: 'id',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PriceMapScalarFieldEnum = (typeof PriceMapScalarFieldEnum)[keyof typeof PriceMapScalarFieldEnum]


  export const DiscountScalarFieldEnum: {
    id: 'id',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PassageScalarFieldEnum: {
    id: 'id',
    header: 'header',
    content: 'content',
    postId: 'postId'
  };

  export type PassageScalarFieldEnum = (typeof PassageScalarFieldEnum)[keyof typeof PassageScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId',
    defaultImageId: 'defaultImageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    mimeType: 'mimeType',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const PersonOrderByRelevanceFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    phone: 'phone',
    email: 'email',
    address: 'address'
  };

  export type PersonOrderByRelevanceFieldEnum = (typeof PersonOrderByRelevanceFieldEnum)[keyof typeof PersonOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const LaptopOrderByRelevanceFieldEnum: {
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
  };

  export type LaptopOrderByRelevanceFieldEnum = (typeof LaptopOrderByRelevanceFieldEnum)[keyof typeof LaptopOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    content: 'content',
    authorId: 'authorId'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const PurchaseOrderByRelevanceFieldEnum: {
    customerId: 'customerId'
  };

  export type PurchaseOrderByRelevanceFieldEnum = (typeof PurchaseOrderByRelevanceFieldEnum)[keyof typeof PurchaseOrderByRelevanceFieldEnum]


  export const PassageOrderByRelevanceFieldEnum: {
    header: 'header',
    content: 'content'
  };

  export type PassageOrderByRelevanceFieldEnum = (typeof PassageOrderByRelevanceFieldEnum)[keyof typeof PassageOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    title: 'title',
    authorId: 'authorId'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const VideoOrderByRelevanceFieldEnum: {
    title: 'title',
    url: 'url'
  };

  export type VideoOrderByRelevanceFieldEnum = (typeof VideoOrderByRelevanceFieldEnum)[keyof typeof VideoOrderByRelevanceFieldEnum]


  /**
   * Deep Input Types
   */


  export type PersonWhereInput = {
    AND?: Enumerable<PersonWhereInput>
    OR?: Enumerable<PersonWhereInput>
    NOT?: Enumerable<PersonWhereInput>
    id?: StringFilter | string
    fullname?: StringFilter | string
    gender?: EnumGenderFilter | Gender
    phone?: StringFilter | string
    email?: StringNullableFilter | string | null
    address?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput> | null
    comments?: CommentListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PersonOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    fullname?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    customer?: CustomerOrderByWithRelationAndSearchRelevanceInput
    comments?: CommentOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PersonOrderByRelevanceInput
  }

  export type PersonWhereUniqueInput = {
    id?: string
    phone?: string
    email?: string
  }

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<PersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PersonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    fullname?: StringWithAggregatesFilter | string
    gender?: EnumGenderWithAggregatesFilter | Gender
    phone?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    address?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: StringFilter | string
    profile?: XOR<PersonRelationFilter, PersonWhereInput>
    purchases?: PurchaseListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CustomerOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    profile?: PersonOrderByWithRelationAndSearchRelevanceInput
    purchases?: PurchaseOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = {
    id?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    profile?: XOR<PersonRelationFilter, PersonWhereInput>
    password?: StringFilter | string
    role?: EnumRoleFilter | Role
    posts?: PostListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    profile?: PersonOrderByWithRelationAndSearchRelevanceInput
    password?: SortOrder
    role?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LaptopWhereInput = {
    AND?: Enumerable<LaptopWhereInput>
    OR?: Enumerable<LaptopWhereInput>
    NOT?: Enumerable<LaptopWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    brand?: StringFilter | string
    model?: StringFilter | string
    material?: StringFilter | string
    display?: StringFilter | string
    cpu?: StringFilter | string
    ram?: StringFilter | string
    graphicCard?: StringFilter | string
    ports?: StringFilter | string
    wifi?: StringFilter | string
    storage?: StringFilter | string
    webcam?: StringFilter | string
    fans?: StringFilter | string
    speakers?: StringFilter | string
    keyboard?: StringFilter | string
    security?: StringFilter | string
    adapter?: StringFilter | string
    battery?: StringFilter | string
    specialFeatures?: StringFilter | string
    dimensionsAndWeight?: StringFilter | string
    origin?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
    sold?: IntFilter | number
    stopSelling?: BoolFilter | boolean
    os?: EnumOSFilter | OS
    priceMap?: XOR<PriceMapRelationFilter, PriceMapWhereInput> | null
    priceMapId?: IntNullableFilter | number | null
    discounts?: DiscountListRelationFilter
    defaultImage?: XOR<ImageRelationFilter, ImageWhereInput> | null
    defaultImageId?: IntNullableFilter | number | null
    purchases?: PurchaseListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type LaptopOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    material?: SortOrder
    display?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphicCard?: SortOrder
    ports?: SortOrder
    wifi?: SortOrder
    storage?: SortOrder
    webcam?: SortOrder
    fans?: SortOrder
    speakers?: SortOrder
    keyboard?: SortOrder
    security?: SortOrder
    adapter?: SortOrder
    battery?: SortOrder
    specialFeatures?: SortOrder
    dimensionsAndWeight?: SortOrder
    origin?: SortOrder
    releaseDate?: SortOrder
    sold?: SortOrder
    stopSelling?: SortOrder
    os?: SortOrder
    priceMap?: PriceMapOrderByWithRelationAndSearchRelevanceInput
    priceMapId?: SortOrder
    discounts?: DiscountOrderByRelationAggregateInput
    defaultImage?: ImageOrderByWithRelationAndSearchRelevanceInput
    defaultImageId?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: LaptopOrderByRelevanceInput
  }

  export type LaptopWhereUniqueInput = {
    id?: number
  }

  export type LaptopOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    material?: SortOrder
    display?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphicCard?: SortOrder
    ports?: SortOrder
    wifi?: SortOrder
    storage?: SortOrder
    webcam?: SortOrder
    fans?: SortOrder
    speakers?: SortOrder
    keyboard?: SortOrder
    security?: SortOrder
    adapter?: SortOrder
    battery?: SortOrder
    specialFeatures?: SortOrder
    dimensionsAndWeight?: SortOrder
    origin?: SortOrder
    releaseDate?: SortOrder
    sold?: SortOrder
    stopSelling?: SortOrder
    os?: SortOrder
    priceMapId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LaptopCountOrderByAggregateInput
    _avg?: LaptopAvgOrderByAggregateInput
    _max?: LaptopMaxOrderByAggregateInput
    _min?: LaptopMinOrderByAggregateInput
    _sum?: LaptopSumOrderByAggregateInput
  }

  export type LaptopScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LaptopScalarWhereWithAggregatesInput>
    OR?: Enumerable<LaptopScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LaptopScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    brand?: StringWithAggregatesFilter | string
    model?: StringWithAggregatesFilter | string
    material?: StringWithAggregatesFilter | string
    display?: StringWithAggregatesFilter | string
    cpu?: StringWithAggregatesFilter | string
    ram?: StringWithAggregatesFilter | string
    graphicCard?: StringWithAggregatesFilter | string
    ports?: StringWithAggregatesFilter | string
    wifi?: StringWithAggregatesFilter | string
    storage?: StringWithAggregatesFilter | string
    webcam?: StringWithAggregatesFilter | string
    fans?: StringWithAggregatesFilter | string
    speakers?: StringWithAggregatesFilter | string
    keyboard?: StringWithAggregatesFilter | string
    security?: StringWithAggregatesFilter | string
    adapter?: StringWithAggregatesFilter | string
    battery?: StringWithAggregatesFilter | string
    specialFeatures?: StringWithAggregatesFilter | string
    dimensionsAndWeight?: StringWithAggregatesFilter | string
    origin?: StringWithAggregatesFilter | string
    releaseDate?: DateTimeWithAggregatesFilter | Date | string
    sold?: IntWithAggregatesFilter | number
    stopSelling?: BoolWithAggregatesFilter | boolean
    os?: EnumOSWithAggregatesFilter | OS
    priceMapId?: IntNullableWithAggregatesFilter | number | null
    defaultImageId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    rank?: EnumRankFilter | Rank
    content?: StringFilter | string
    author?: XOR<PersonRelationFilter, PersonWhereInput>
    authorId?: StringFilter | string
    isStaff?: BoolFilter | boolean
    laptop?: XOR<LaptopRelationFilter, LaptopWhereInput>
    laptopId?: IntFilter | number
    comment?: XOR<CommentRelationFilter, CommentWhereInput> | null
    commentId?: IntNullableFilter | number | null
    comments?: CommentListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CommentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    rank?: SortOrder
    content?: SortOrder
    author?: PersonOrderByWithRelationAndSearchRelevanceInput
    authorId?: SortOrder
    isStaff?: SortOrder
    laptop?: LaptopOrderByWithRelationAndSearchRelevanceInput
    laptopId?: SortOrder
    comment?: CommentOrderByWithRelationAndSearchRelevanceInput
    commentId?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    rank?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isStaff?: SortOrder
    laptopId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    rank?: EnumRankWithAggregatesFilter | Rank
    content?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
    isStaff?: BoolWithAggregatesFilter | boolean
    laptopId?: IntWithAggregatesFilter | number
    commentId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PriceMapWhereInput = {
    AND?: Enumerable<PriceMapWhereInput>
    OR?: Enumerable<PriceMapWhereInput>
    NOT?: Enumerable<PriceMapWhereInput>
    id?: IntFilter | number
    price?: DecimalFilter | Decimal | number | string
    laptops?: LaptopListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PriceMapOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    price?: SortOrder
    laptops?: LaptopOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceMapWhereUniqueInput = {
    id?: number
    price?: Decimal | number | string
  }

  export type PriceMapOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PriceMapCountOrderByAggregateInput
    _avg?: PriceMapAvgOrderByAggregateInput
    _max?: PriceMapMaxOrderByAggregateInput
    _min?: PriceMapMinOrderByAggregateInput
    _sum?: PriceMapSumOrderByAggregateInput
  }

  export type PriceMapScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PriceMapScalarWhereWithAggregatesInput>
    OR?: Enumerable<PriceMapScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PriceMapScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    price?: DecimalWithAggregatesFilter | Decimal | number | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DiscountWhereInput = {
    AND?: Enumerable<DiscountWhereInput>
    OR?: Enumerable<DiscountWhereInput>
    NOT?: Enumerable<DiscountWhereInput>
    id?: IntFilter | number
    value?: FloatFilter | number
    laptops?: LaptopListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DiscountOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    value?: SortOrder
    laptops?: LaptopOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountWhereUniqueInput = {
    id?: number
    value?: number
  }

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiscountCountOrderByAggregateInput
    _avg?: DiscountAvgOrderByAggregateInput
    _max?: DiscountMaxOrderByAggregateInput
    _min?: DiscountMinOrderByAggregateInput
    _sum?: DiscountSumOrderByAggregateInput
  }

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DiscountScalarWhereWithAggregatesInput>
    OR?: Enumerable<DiscountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DiscountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    value?: FloatWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: Enumerable<PurchaseWhereInput>
    OR?: Enumerable<PurchaseWhereInput>
    NOT?: Enumerable<PurchaseWhereInput>
    id?: IntFilter | number
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    customerId?: StringFilter | string
    laptops?: LaptopListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PurchaseOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    customer?: CustomerOrderByWithRelationAndSearchRelevanceInput
    customerId?: SortOrder
    laptops?: LaptopOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PurchaseOrderByRelevanceInput
  }

  export type PurchaseWhereUniqueInput = {
    id?: number
  }

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PurchaseScalarWhereWithAggregatesInput>
    OR?: Enumerable<PurchaseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PurchaseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    customerId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PassageWhereInput = {
    AND?: Enumerable<PassageWhereInput>
    OR?: Enumerable<PassageWhereInput>
    NOT?: Enumerable<PassageWhereInput>
    id?: IntFilter | number
    header?: StringFilter | string
    content?: StringFilter | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
  }

  export type PassageOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    header?: SortOrder
    content?: SortOrder
    post?: PostOrderByWithRelationAndSearchRelevanceInput
    postId?: SortOrder
    _relevance?: PassageOrderByRelevanceInput
  }

  export type PassageWhereUniqueInput = {
    id?: number
  }

  export type PassageOrderByWithAggregationInput = {
    id?: SortOrder
    header?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    _count?: PassageCountOrderByAggregateInput
    _avg?: PassageAvgOrderByAggregateInput
    _max?: PassageMaxOrderByAggregateInput
    _min?: PassageMinOrderByAggregateInput
    _sum?: PassageSumOrderByAggregateInput
  }

  export type PassageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PassageScalarWhereWithAggregatesInput>
    OR?: Enumerable<PassageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PassageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    header?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    postId?: IntWithAggregatesFilter | number
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    passages?: PassageListRelationFilter
    laptops?: LaptopListRelationFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: StringFilter | string
    defaultImage?: XOR<ImageRelationFilter, ImageWhereInput> | null
    defaultImageId?: IntNullableFilter | number | null
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PostOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    passages?: PassageOrderByRelationAggregateInput
    laptops?: LaptopOrderByRelationAggregateInput
    author?: UserOrderByWithRelationAndSearchRelevanceInput
    authorId?: SortOrder
    defaultImage?: ImageOrderByWithRelationAndSearchRelevanceInput
    defaultImageId?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
    defaultImageId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    mimeType?: EnumMimeTypeFilter | MimeType
    data?: BytesFilter | Buffer
    laptops?: LaptopListRelationFilter
    post?: PostListRelationFilter
    defaultLaptops?: LaptopListRelationFilter
    defaultPosts?: PostListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ImageOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    data?: SortOrder
    laptops?: LaptopOrderByRelationAggregateInput
    post?: PostOrderByRelationAggregateInput
    defaultLaptops?: LaptopOrderByRelationAggregateInput
    defaultPosts?: PostOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = {
    id?: number
  }

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    mimeType?: EnumMimeTypeWithAggregatesFilter | MimeType
    data?: BytesWithAggregatesFilter | Buffer
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VideoWhereInput = {
    AND?: Enumerable<VideoWhereInput>
    OR?: Enumerable<VideoWhereInput>
    NOT?: Enumerable<VideoWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    url?: StringFilter | string
    laptops?: LaptopListRelationFilter
    post?: PostListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VideoOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    laptops?: LaptopOrderByRelationAggregateInput
    post?: PostOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: VideoOrderByRelevanceInput
  }

  export type VideoWhereUniqueInput = {
    id?: number
  }

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VideoScalarWhereWithAggregatesInput>
    OR?: Enumerable<VideoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VideoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    customer?: CustomerCreateNestedOneWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    customer?: CustomerUncheckedCreateNestedOneWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileInput
    customer?: CustomerUpdateOneWithoutProfileInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileInput
    customer?: CustomerUncheckedUpdateOneWithoutProfileInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type PersonCreateManyInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: PersonCreateNestedOneWithoutCustomerInput
    purchases?: PurchaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: PersonUpdateOneRequiredWithoutCustomerInput
    purchases?: PurchaseUpdateManyWithoutCustomerInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCustomerInput
  }

  export type CustomerCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    password: string
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: PersonCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    password: string
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: PersonUpdateOneRequiredWithoutUserInput
    posts?: PostUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
  }

  export type UserCreateManyInput = {
    id: string
    password: string
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopCreateInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    images?: ImageUpdateManyWithoutLaptopsInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type LaptopCreateManyInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaptopUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    rank?: Rank
    content: string
    isStaff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: PersonCreateNestedOneWithoutCommentsInput
    laptop: LaptopCreateNestedOneWithoutCommentsInput
    comment?: CommentCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    rank?: Rank
    content: string
    authorId: string
    isStaff?: boolean
    laptopId: number
    commentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PersonUpdateOneRequiredWithoutCommentsInput
    laptop?: LaptopUpdateOneRequiredWithoutCommentsInput
    comment?: CommentUpdateOneWithoutCommentsInput
    comments?: CommentUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    laptopId?: IntFieldUpdateOperationsInput | number
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCommentInput
  }

  export type CommentCreateManyInput = {
    id?: number
    rank?: Rank
    content: string
    authorId: string
    isStaff?: boolean
    laptopId: number
    commentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    laptopId?: IntFieldUpdateOperationsInput | number
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceMapCreateInput = {
    price?: Decimal | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutPriceMapInput
  }

  export type PriceMapUncheckedCreateInput = {
    id?: number
    price?: Decimal | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopUncheckedCreateNestedManyWithoutPriceMapInput
  }

  export type PriceMapUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutPriceMapInput
  }

  export type PriceMapUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUncheckedUpdateManyWithoutPriceMapInput
  }

  export type PriceMapCreateManyInput = {
    id?: number
    price?: Decimal | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceMapUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceMapUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCreateInput = {
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutDiscountsInput
  }

  export type DiscountUncheckedCreateInput = {
    id?: number
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUpdateInput = {
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutDiscountsInput
  }

  export type DiscountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCreateManyInput = {
    id?: number
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUpdateManyMutationInput = {
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPurchasesInput
    laptops?: LaptopCreateNestedManyWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    customerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPurchasesInput
    laptops?: LaptopUpdateManyWithoutPurchasesInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: number
    customerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassageCreateInput = {
    header: string
    content: string
    post: PostCreateNestedOneWithoutPassagesInput
  }

  export type PassageUncheckedCreateInput = {
    id?: number
    header: string
    content: string
    postId: number
  }

  export type PassageUpdateInput = {
    header?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutPassagesInput
  }

  export type PassageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PassageCreateManyInput = {
    id?: number
    header: string
    content: string
    postId: number
  }

  export type PassageUpdateManyMutationInput = {
    header?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PassageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageCreateNestedManyWithoutPostInput
    laptops?: LaptopCreateNestedManyWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    videos?: VideoCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    authorId: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUpdateManyWithoutPostInput
    laptops?: LaptopUpdateManyWithoutPostsInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    defaultImage?: ImageUpdateOneWithoutDefaultPostsInput
    images?: ImageUpdateManyWithoutPostInput
    videos?: VideoUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUncheckedUpdateManyWithoutPostInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    authorId: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutImagesInput
    post?: PostCreateNestedManyWithoutImagesInput
    defaultLaptops?: LaptopCreateNestedManyWithoutDefaultImageInput
    defaultPosts?: PostCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultLaptops?: LaptopUncheckedCreateNestedManyWithoutDefaultImageInput
    defaultPosts?: PostUncheckedCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutImagesInput
    post?: PostUpdateManyWithoutImagesInput
    defaultLaptops?: LaptopUpdateManyWithoutDefaultImageInput
    defaultPosts?: PostUpdateManyWithoutDefaultImageInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultLaptops?: LaptopUncheckedUpdateManyWithoutDefaultImageInput
    defaultPosts?: PostUncheckedUpdateManyWithoutDefaultImageInput
  }

  export type ImageCreateManyInput = {
    id?: number
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutVideosInput
    post?: PostCreateNestedManyWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutVideosInput
    post?: PostUpdateManyWithoutVideosInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumGenderFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderFilter | Gender
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonOrderByRelevanceInput = {
    fields: Enumerable<PersonOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumGenderWithAggregatesFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderWithAggregatesFilter | Gender
    _count?: NestedIntFilter
    _min?: NestedEnumGenderFilter
    _max?: NestedEnumGenderFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: Enumerable<CustomerOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumOSFilter = {
    equals?: OS
    in?: Enumerable<OS>
    notIn?: Enumerable<OS>
    not?: NestedEnumOSFilter | OS
  }

  export type PriceMapRelationFilter = {
    is?: PriceMapWhereInput | null
    isNot?: PriceMapWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DiscountListRelationFilter = {
    every?: DiscountWhereInput
    some?: DiscountWhereInput
    none?: DiscountWhereInput
  }

  export type ImageRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type DiscountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaptopOrderByRelevanceInput = {
    fields: Enumerable<LaptopOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type LaptopCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    material?: SortOrder
    display?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphicCard?: SortOrder
    ports?: SortOrder
    wifi?: SortOrder
    storage?: SortOrder
    webcam?: SortOrder
    fans?: SortOrder
    speakers?: SortOrder
    keyboard?: SortOrder
    security?: SortOrder
    adapter?: SortOrder
    battery?: SortOrder
    specialFeatures?: SortOrder
    dimensionsAndWeight?: SortOrder
    origin?: SortOrder
    releaseDate?: SortOrder
    sold?: SortOrder
    stopSelling?: SortOrder
    os?: SortOrder
    priceMapId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaptopAvgOrderByAggregateInput = {
    id?: SortOrder
    sold?: SortOrder
    priceMapId?: SortOrder
    defaultImageId?: SortOrder
  }

  export type LaptopMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    material?: SortOrder
    display?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphicCard?: SortOrder
    ports?: SortOrder
    wifi?: SortOrder
    storage?: SortOrder
    webcam?: SortOrder
    fans?: SortOrder
    speakers?: SortOrder
    keyboard?: SortOrder
    security?: SortOrder
    adapter?: SortOrder
    battery?: SortOrder
    specialFeatures?: SortOrder
    dimensionsAndWeight?: SortOrder
    origin?: SortOrder
    releaseDate?: SortOrder
    sold?: SortOrder
    stopSelling?: SortOrder
    os?: SortOrder
    priceMapId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaptopMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    material?: SortOrder
    display?: SortOrder
    cpu?: SortOrder
    ram?: SortOrder
    graphicCard?: SortOrder
    ports?: SortOrder
    wifi?: SortOrder
    storage?: SortOrder
    webcam?: SortOrder
    fans?: SortOrder
    speakers?: SortOrder
    keyboard?: SortOrder
    security?: SortOrder
    adapter?: SortOrder
    battery?: SortOrder
    specialFeatures?: SortOrder
    dimensionsAndWeight?: SortOrder
    origin?: SortOrder
    releaseDate?: SortOrder
    sold?: SortOrder
    stopSelling?: SortOrder
    os?: SortOrder
    priceMapId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaptopSumOrderByAggregateInput = {
    id?: SortOrder
    sold?: SortOrder
    priceMapId?: SortOrder
    defaultImageId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumOSWithAggregatesFilter = {
    equals?: OS
    in?: Enumerable<OS>
    notIn?: Enumerable<OS>
    not?: NestedEnumOSWithAggregatesFilter | OS
    _count?: NestedIntFilter
    _min?: NestedEnumOSFilter
    _max?: NestedEnumOSFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type EnumRankFilter = {
    equals?: Rank
    in?: Enumerable<Rank>
    notIn?: Enumerable<Rank>
    not?: NestedEnumRankFilter | Rank
  }

  export type LaptopRelationFilter = {
    is?: LaptopWhereInput
    isNot?: LaptopWhereInput
  }

  export type CommentRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentOrderByRelevanceInput = {
    fields: Enumerable<CommentOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isStaff?: SortOrder
    laptopId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    laptopId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isStaff?: SortOrder
    laptopId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    isStaff?: SortOrder
    laptopId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    laptopId?: SortOrder
    commentId?: SortOrder
  }

  export type EnumRankWithAggregatesFilter = {
    equals?: Rank
    in?: Enumerable<Rank>
    notIn?: Enumerable<Rank>
    not?: NestedEnumRankWithAggregatesFilter | Rank
    _count?: NestedIntFilter
    _min?: NestedEnumRankFilter
    _max?: NestedEnumRankFilter
  }

  export type DecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type LaptopListRelationFilter = {
    every?: LaptopWhereInput
    some?: LaptopWhereInput
    none?: LaptopWhereInput
  }

  export type LaptopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceMapCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceMapAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PriceMapMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceMapMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceMapSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiscountSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type PurchaseOrderByRelevanceInput = {
    fields: Enumerable<PurchaseOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PassageOrderByRelevanceInput = {
    fields: Enumerable<PassageOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type PassageCountOrderByAggregateInput = {
    id?: SortOrder
    header?: SortOrder
    content?: SortOrder
    postId?: SortOrder
  }

  export type PassageAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PassageMaxOrderByAggregateInput = {
    id?: SortOrder
    header?: SortOrder
    content?: SortOrder
    postId?: SortOrder
  }

  export type PassageMinOrderByAggregateInput = {
    id?: SortOrder
    header?: SortOrder
    content?: SortOrder
    postId?: SortOrder
  }

  export type PassageSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PassageListRelationFilter = {
    every?: PassageWhereInput
    some?: PassageWhereInput
    none?: PassageWhereInput
  }

  export type PassageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: Enumerable<PostOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    defaultImageId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    defaultImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    defaultImageId?: SortOrder
  }

  export type EnumMimeTypeFilter = {
    equals?: MimeType
    in?: Enumerable<MimeType>
    notIn?: Enumerable<MimeType>
    not?: NestedEnumMimeTypeFilter | MimeType
  }

  export type BytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type ImageOrderByRelevanceInput = {
    fields: Enumerable<ImageOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mimeType?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMimeTypeWithAggregatesFilter = {
    equals?: MimeType
    in?: Enumerable<MimeType>
    notIn?: Enumerable<MimeType>
    not?: NestedEnumMimeTypeWithAggregatesFilter | MimeType
    _count?: NestedIntFilter
    _min?: NestedEnumMimeTypeFilter
    _max?: NestedEnumMimeTypeFilter
  }

  export type BytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type VideoOrderByRelevanceInput = {
    fields: Enumerable<VideoOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutProfileInput = {
    create?: XOR<CustomerCreateWithoutProfileInput, CustomerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProfileInput
    connect?: CustomerWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<CustomerCreateWithoutProfileInput, CustomerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProfileInput
    connect?: CustomerWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type CustomerUpdateOneWithoutProfileInput = {
    create?: XOR<CustomerCreateWithoutProfileInput, CustomerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProfileInput
    upsert?: CustomerUpsertWithoutProfileInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutProfileInput, CustomerUncheckedUpdateWithoutProfileInput>
  }

  export type CommentUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserUncheckedUpdateOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type CustomerUncheckedUpdateOneWithoutProfileInput = {
    create?: XOR<CustomerCreateWithoutProfileInput, CustomerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProfileInput
    upsert?: CustomerUpsertWithoutProfileInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutProfileInput, CustomerUncheckedUpdateWithoutProfileInput>
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<CommentCreateWithoutAuthorInput>, Enumerable<CommentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PersonCreateNestedOneWithoutCustomerInput = {
    create?: XOR<PersonCreateWithoutCustomerInput, PersonUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCustomerInput
    connect?: PersonWhereUniqueInput
  }

  export type PurchaseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCustomerInput>, Enumerable<PurchaseUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCustomerInput>
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCustomerInput>, Enumerable<PurchaseUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCustomerInput>
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PersonUpdateOneRequiredWithoutCustomerInput = {
    create?: XOR<PersonCreateWithoutCustomerInput, PersonUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCustomerInput
    upsert?: PersonUpsertWithoutCustomerInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutCustomerInput, PersonUncheckedUpdateWithoutCustomerInput>
  }

  export type PurchaseUpdateManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCustomerInput>, Enumerable<PurchaseUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type PurchaseUncheckedUpdateManyWithoutCustomerInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutCustomerInput>, Enumerable<PurchaseUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: PurchaseCreateManyCustomerInputEnvelope
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type PersonCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    connect?: PersonWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type PersonUpdateOneRequiredWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    upsert?: PersonUpsertWithoutUserInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PriceMapCreateNestedOneWithoutLaptopsInput = {
    create?: XOR<PriceMapCreateWithoutLaptopsInput, PriceMapUncheckedCreateWithoutLaptopsInput>
    connectOrCreate?: PriceMapCreateOrConnectWithoutLaptopsInput
    connect?: PriceMapWhereUniqueInput
  }

  export type DiscountCreateNestedManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<DiscountCreateWithoutLaptopsInput>, Enumerable<DiscountUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<DiscountCreateOrConnectWithoutLaptopsInput>
    connect?: Enumerable<DiscountWhereUniqueInput>
  }

  export type ImageCreateNestedOneWithoutDefaultLaptopsInput = {
    create?: XOR<ImageCreateWithoutDefaultLaptopsInput, ImageUncheckedCreateWithoutDefaultLaptopsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutDefaultLaptopsInput
    connect?: ImageWhereUniqueInput
  }

  export type PurchaseCreateNestedManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutLaptopsInput>, Enumerable<PurchaseUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutLaptopsInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<PostCreateWithoutLaptopsInput>, Enumerable<PostUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutLaptopsInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutLaptopInput = {
    create?: XOR<Enumerable<CommentCreateWithoutLaptopInput>, Enumerable<CommentUncheckedCreateWithoutLaptopInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutLaptopInput>
    createMany?: CommentCreateManyLaptopInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ImageCreateNestedManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<ImageCreateWithoutLaptopsInput>, Enumerable<ImageUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutLaptopsInput>
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type VideoCreateNestedManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<VideoCreateWithoutLaptopsInput>, Enumerable<VideoUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutLaptopsInput>
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutLaptopInput = {
    create?: XOR<Enumerable<CommentCreateWithoutLaptopInput>, Enumerable<CommentUncheckedCreateWithoutLaptopInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutLaptopInput>
    createMany?: CommentCreateManyLaptopInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumOSFieldUpdateOperationsInput = {
    set?: OS
  }

  export type PriceMapUpdateOneWithoutLaptopsInput = {
    create?: XOR<PriceMapCreateWithoutLaptopsInput, PriceMapUncheckedCreateWithoutLaptopsInput>
    connectOrCreate?: PriceMapCreateOrConnectWithoutLaptopsInput
    upsert?: PriceMapUpsertWithoutLaptopsInput
    disconnect?: boolean
    delete?: boolean
    connect?: PriceMapWhereUniqueInput
    update?: XOR<PriceMapUpdateWithoutLaptopsInput, PriceMapUncheckedUpdateWithoutLaptopsInput>
  }

  export type DiscountUpdateManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<DiscountCreateWithoutLaptopsInput>, Enumerable<DiscountUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<DiscountCreateOrConnectWithoutLaptopsInput>
    upsert?: Enumerable<DiscountUpsertWithWhereUniqueWithoutLaptopsInput>
    set?: Enumerable<DiscountWhereUniqueInput>
    disconnect?: Enumerable<DiscountWhereUniqueInput>
    delete?: Enumerable<DiscountWhereUniqueInput>
    connect?: Enumerable<DiscountWhereUniqueInput>
    update?: Enumerable<DiscountUpdateWithWhereUniqueWithoutLaptopsInput>
    updateMany?: Enumerable<DiscountUpdateManyWithWhereWithoutLaptopsInput>
    deleteMany?: Enumerable<DiscountScalarWhereInput>
  }

  export type ImageUpdateOneWithoutDefaultLaptopsInput = {
    create?: XOR<ImageCreateWithoutDefaultLaptopsInput, ImageUncheckedCreateWithoutDefaultLaptopsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutDefaultLaptopsInput
    upsert?: ImageUpsertWithoutDefaultLaptopsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutDefaultLaptopsInput, ImageUncheckedUpdateWithoutDefaultLaptopsInput>
  }

  export type PurchaseUpdateManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<PurchaseCreateWithoutLaptopsInput>, Enumerable<PurchaseUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<PurchaseCreateOrConnectWithoutLaptopsInput>
    upsert?: Enumerable<PurchaseUpsertWithWhereUniqueWithoutLaptopsInput>
    set?: Enumerable<PurchaseWhereUniqueInput>
    disconnect?: Enumerable<PurchaseWhereUniqueInput>
    delete?: Enumerable<PurchaseWhereUniqueInput>
    connect?: Enumerable<PurchaseWhereUniqueInput>
    update?: Enumerable<PurchaseUpdateWithWhereUniqueWithoutLaptopsInput>
    updateMany?: Enumerable<PurchaseUpdateManyWithWhereWithoutLaptopsInput>
    deleteMany?: Enumerable<PurchaseScalarWhereInput>
  }

  export type PostUpdateManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<PostCreateWithoutLaptopsInput>, Enumerable<PostUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutLaptopsInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutLaptopsInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutLaptopsInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutLaptopsInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type CommentUpdateManyWithoutLaptopInput = {
    create?: XOR<Enumerable<CommentCreateWithoutLaptopInput>, Enumerable<CommentUncheckedCreateWithoutLaptopInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutLaptopInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutLaptopInput>
    createMany?: CommentCreateManyLaptopInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutLaptopInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutLaptopInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ImageUpdateManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<ImageCreateWithoutLaptopsInput>, Enumerable<ImageUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutLaptopsInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutLaptopsInput>
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutLaptopsInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutLaptopsInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type VideoUpdateManyWithoutLaptopsInput = {
    create?: XOR<Enumerable<VideoCreateWithoutLaptopsInput>, Enumerable<VideoUncheckedCreateWithoutLaptopsInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutLaptopsInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutLaptopsInput>
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutLaptopsInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutLaptopsInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUncheckedUpdateManyWithoutLaptopInput = {
    create?: XOR<Enumerable<CommentCreateWithoutLaptopInput>, Enumerable<CommentUncheckedCreateWithoutLaptopInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutLaptopInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutLaptopInput>
    createMany?: CommentCreateManyLaptopInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutLaptopInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutLaptopInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type PersonCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PersonCreateWithoutCommentsInput, PersonUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCommentsInput
    connect?: PersonWhereUniqueInput
  }

  export type LaptopCreateNestedOneWithoutCommentsInput = {
    create?: XOR<LaptopCreateWithoutCommentsInput, LaptopUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: LaptopCreateOrConnectWithoutCommentsInput
    connect?: LaptopWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentsInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentInput>, Enumerable<CommentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentInput>
    createMany?: CommentCreateManyCommentInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentInput>, Enumerable<CommentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentInput>
    createMany?: CommentCreateManyCommentInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type EnumRankFieldUpdateOperationsInput = {
    set?: Rank
  }

  export type PersonUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<PersonCreateWithoutCommentsInput, PersonUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCommentsInput
    upsert?: PersonUpsertWithoutCommentsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutCommentsInput, PersonUncheckedUpdateWithoutCommentsInput>
  }

  export type LaptopUpdateOneRequiredWithoutCommentsInput = {
    create?: XOR<LaptopCreateWithoutCommentsInput, LaptopUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: LaptopCreateOrConnectWithoutCommentsInput
    upsert?: LaptopUpsertWithoutCommentsInput
    connect?: LaptopWhereUniqueInput
    update?: XOR<LaptopUpdateWithoutCommentsInput, LaptopUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutCommentsInput = {
    create?: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentsInput
    upsert?: CommentUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<CommentUpdateWithoutCommentsInput, CommentUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateManyWithoutCommentInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentInput>, Enumerable<CommentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: CommentCreateManyCommentInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    create?: XOR<Enumerable<CommentCreateWithoutCommentInput>, Enumerable<CommentUncheckedCreateWithoutCommentInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutCommentInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutCommentInput>
    createMany?: CommentCreateManyCommentInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutCommentInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutCommentInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type LaptopCreateNestedManyWithoutPriceMapInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPriceMapInput>, Enumerable<LaptopUncheckedCreateWithoutPriceMapInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPriceMapInput>
    createMany?: LaptopCreateManyPriceMapInputEnvelope
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type LaptopUncheckedCreateNestedManyWithoutPriceMapInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPriceMapInput>, Enumerable<LaptopUncheckedCreateWithoutPriceMapInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPriceMapInput>
    createMany?: LaptopCreateManyPriceMapInputEnvelope
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type LaptopUpdateManyWithoutPriceMapInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPriceMapInput>, Enumerable<LaptopUncheckedCreateWithoutPriceMapInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPriceMapInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutPriceMapInput>
    createMany?: LaptopCreateManyPriceMapInputEnvelope
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutPriceMapInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutPriceMapInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type LaptopUncheckedUpdateManyWithoutPriceMapInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPriceMapInput>, Enumerable<LaptopUncheckedCreateWithoutPriceMapInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPriceMapInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutPriceMapInput>
    createMany?: LaptopCreateManyPriceMapInputEnvelope
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutPriceMapInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutPriceMapInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type LaptopCreateNestedManyWithoutDiscountsInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutDiscountsInput>, Enumerable<LaptopUncheckedCreateWithoutDiscountsInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutDiscountsInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LaptopUpdateManyWithoutDiscountsInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutDiscountsInput>, Enumerable<LaptopUncheckedCreateWithoutDiscountsInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutDiscountsInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutDiscountsInput>
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutDiscountsInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutDiscountsInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type CustomerCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput
    connect?: CustomerWhereUniqueInput
  }

  export type LaptopCreateNestedManyWithoutPurchasesInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPurchasesInput>, Enumerable<LaptopUncheckedCreateWithoutPurchasesInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPurchasesInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type CustomerUpdateOneRequiredWithoutPurchasesInput = {
    create?: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchasesInput
    upsert?: CustomerUpsertWithoutPurchasesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutPurchasesInput, CustomerUncheckedUpdateWithoutPurchasesInput>
  }

  export type LaptopUpdateManyWithoutPurchasesInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPurchasesInput>, Enumerable<LaptopUncheckedCreateWithoutPurchasesInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPurchasesInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutPurchasesInput>
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutPurchasesInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutPurchasesInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutPassagesInput = {
    create?: XOR<PostCreateWithoutPassagesInput, PostUncheckedCreateWithoutPassagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPassagesInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutPassagesInput = {
    create?: XOR<PostCreateWithoutPassagesInput, PostUncheckedCreateWithoutPassagesInput>
    connectOrCreate?: PostCreateOrConnectWithoutPassagesInput
    upsert?: PostUpsertWithoutPassagesInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutPassagesInput, PostUncheckedUpdateWithoutPassagesInput>
  }

  export type PassageCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PassageCreateWithoutPostInput>, Enumerable<PassageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PassageCreateOrConnectWithoutPostInput>
    createMany?: PassageCreateManyPostInputEnvelope
    connect?: Enumerable<PassageWhereUniqueInput>
  }

  export type LaptopCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPostsInput>, Enumerable<LaptopUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutDefaultPostsInput = {
    create?: XOR<ImageCreateWithoutDefaultPostsInput, ImageUncheckedCreateWithoutDefaultPostsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutDefaultPostsInput
    connect?: ImageWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<ImageCreateWithoutPostInput>, Enumerable<ImageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutPostInput>
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type VideoCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<VideoCreateWithoutPostInput>, Enumerable<VideoUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutPostInput>
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type PassageUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PassageCreateWithoutPostInput>, Enumerable<PassageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PassageCreateOrConnectWithoutPostInput>
    createMany?: PassageCreateManyPostInputEnvelope
    connect?: Enumerable<PassageWhereUniqueInput>
  }

  export type PassageUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PassageCreateWithoutPostInput>, Enumerable<PassageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PassageCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PassageUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PassageCreateManyPostInputEnvelope
    set?: Enumerable<PassageWhereUniqueInput>
    disconnect?: Enumerable<PassageWhereUniqueInput>
    delete?: Enumerable<PassageWhereUniqueInput>
    connect?: Enumerable<PassageWhereUniqueInput>
    update?: Enumerable<PassageUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PassageUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PassageScalarWhereInput>
  }

  export type LaptopUpdateManyWithoutPostsInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutPostsInput>, Enumerable<LaptopUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ImageUpdateOneWithoutDefaultPostsInput = {
    create?: XOR<ImageCreateWithoutDefaultPostsInput, ImageUncheckedCreateWithoutDefaultPostsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutDefaultPostsInput
    upsert?: ImageUpsertWithoutDefaultPostsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutDefaultPostsInput, ImageUncheckedUpdateWithoutDefaultPostsInput>
  }

  export type ImageUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<ImageCreateWithoutPostInput>, Enumerable<ImageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutPostInput>
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type VideoUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<VideoCreateWithoutPostInput>, Enumerable<VideoUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutPostInput>
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type PassageUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<PassageCreateWithoutPostInput>, Enumerable<PassageUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PassageCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PassageUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PassageCreateManyPostInputEnvelope
    set?: Enumerable<PassageWhereUniqueInput>
    disconnect?: Enumerable<PassageWhereUniqueInput>
    delete?: Enumerable<PassageWhereUniqueInput>
    connect?: Enumerable<PassageWhereUniqueInput>
    update?: Enumerable<PassageUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PassageUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PassageScalarWhereInput>
  }

  export type LaptopCreateNestedManyWithoutImagesInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutImagesInput>, Enumerable<LaptopUncheckedCreateWithoutImagesInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutImagesInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutImagesInput = {
    create?: XOR<Enumerable<PostCreateWithoutImagesInput>, Enumerable<PostUncheckedCreateWithoutImagesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutImagesInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type LaptopCreateNestedManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutDefaultImageInput>, Enumerable<LaptopUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutDefaultImageInput>
    createMany?: LaptopCreateManyDefaultImageInputEnvelope
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<PostCreateWithoutDefaultImageInput>, Enumerable<PostUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutDefaultImageInput>
    createMany?: PostCreateManyDefaultImageInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type LaptopUncheckedCreateNestedManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutDefaultImageInput>, Enumerable<LaptopUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutDefaultImageInput>
    createMany?: LaptopCreateManyDefaultImageInputEnvelope
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<PostCreateWithoutDefaultImageInput>, Enumerable<PostUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutDefaultImageInput>
    createMany?: PostCreateManyDefaultImageInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type EnumMimeTypeFieldUpdateOperationsInput = {
    set?: MimeType
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type LaptopUpdateManyWithoutImagesInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutImagesInput>, Enumerable<LaptopUncheckedCreateWithoutImagesInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutImagesInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutImagesInput>
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutImagesInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutImagesInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type PostUpdateManyWithoutImagesInput = {
    create?: XOR<Enumerable<PostCreateWithoutImagesInput>, Enumerable<PostUncheckedCreateWithoutImagesInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutImagesInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutImagesInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutImagesInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutImagesInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type LaptopUpdateManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutDefaultImageInput>, Enumerable<LaptopUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutDefaultImageInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutDefaultImageInput>
    createMany?: LaptopCreateManyDefaultImageInputEnvelope
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutDefaultImageInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutDefaultImageInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type PostUpdateManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<PostCreateWithoutDefaultImageInput>, Enumerable<PostUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutDefaultImageInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutDefaultImageInput>
    createMany?: PostCreateManyDefaultImageInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutDefaultImageInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutDefaultImageInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type LaptopUncheckedUpdateManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutDefaultImageInput>, Enumerable<LaptopUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutDefaultImageInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutDefaultImageInput>
    createMany?: LaptopCreateManyDefaultImageInputEnvelope
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutDefaultImageInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutDefaultImageInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutDefaultImageInput = {
    create?: XOR<Enumerable<PostCreateWithoutDefaultImageInput>, Enumerable<PostUncheckedCreateWithoutDefaultImageInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutDefaultImageInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutDefaultImageInput>
    createMany?: PostCreateManyDefaultImageInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutDefaultImageInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutDefaultImageInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type LaptopCreateNestedManyWithoutVideosInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutVideosInput>, Enumerable<LaptopUncheckedCreateWithoutVideosInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutVideosInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutVideosInput = {
    create?: XOR<Enumerable<PostCreateWithoutVideosInput>, Enumerable<PostUncheckedCreateWithoutVideosInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutVideosInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type LaptopUpdateManyWithoutVideosInput = {
    create?: XOR<Enumerable<LaptopCreateWithoutVideosInput>, Enumerable<LaptopUncheckedCreateWithoutVideosInput>>
    connectOrCreate?: Enumerable<LaptopCreateOrConnectWithoutVideosInput>
    upsert?: Enumerable<LaptopUpsertWithWhereUniqueWithoutVideosInput>
    set?: Enumerable<LaptopWhereUniqueInput>
    disconnect?: Enumerable<LaptopWhereUniqueInput>
    delete?: Enumerable<LaptopWhereUniqueInput>
    connect?: Enumerable<LaptopWhereUniqueInput>
    update?: Enumerable<LaptopUpdateWithWhereUniqueWithoutVideosInput>
    updateMany?: Enumerable<LaptopUpdateManyWithWhereWithoutVideosInput>
    deleteMany?: Enumerable<LaptopScalarWhereInput>
  }

  export type PostUpdateManyWithoutVideosInput = {
    create?: XOR<Enumerable<PostCreateWithoutVideosInput>, Enumerable<PostUncheckedCreateWithoutVideosInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutVideosInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutVideosInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutVideosInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutVideosInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumGenderFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderFilter | Gender
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumGenderWithAggregatesFilter = {
    equals?: Gender
    in?: Enumerable<Gender>
    notIn?: Enumerable<Gender>
    not?: NestedEnumGenderWithAggregatesFilter | Gender
    _count?: NestedIntFilter
    _min?: NestedEnumGenderFilter
    _max?: NestedEnumGenderFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumOSFilter = {
    equals?: OS
    in?: Enumerable<OS>
    notIn?: Enumerable<OS>
    not?: NestedEnumOSFilter | OS
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumOSWithAggregatesFilter = {
    equals?: OS
    in?: Enumerable<OS>
    notIn?: Enumerable<OS>
    not?: NestedEnumOSWithAggregatesFilter | OS
    _count?: NestedIntFilter
    _min?: NestedEnumOSFilter
    _max?: NestedEnumOSFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumRankFilter = {
    equals?: Rank
    in?: Enumerable<Rank>
    notIn?: Enumerable<Rank>
    not?: NestedEnumRankFilter | Rank
  }

  export type NestedEnumRankWithAggregatesFilter = {
    equals?: Rank
    in?: Enumerable<Rank>
    notIn?: Enumerable<Rank>
    not?: NestedEnumRankWithAggregatesFilter | Rank
    _count?: NestedIntFilter
    _min?: NestedEnumRankFilter
    _max?: NestedEnumRankFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumMimeTypeFilter = {
    equals?: MimeType
    in?: Enumerable<MimeType>
    notIn?: Enumerable<MimeType>
    not?: NestedEnumMimeTypeFilter | MimeType
  }

  export type NestedBytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type NestedEnumMimeTypeWithAggregatesFilter = {
    equals?: MimeType
    in?: Enumerable<MimeType>
    notIn?: Enumerable<MimeType>
    not?: NestedEnumMimeTypeWithAggregatesFilter | MimeType
    _count?: NestedIntFilter
    _min?: NestedEnumMimeTypeFilter
    _max?: NestedEnumMimeTypeFilter
  }

  export type NestedBytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type UserCreateWithoutProfileInput = {
    password: string
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    password: string
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type CustomerCreateWithoutProfileInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutProfileInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutProfileInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutProfileInput, CustomerUncheckedCreateWithoutProfileInput>
  }

  export type CommentCreateWithoutAuthorInput = {
    rank?: Rank
    content: string
    isStaff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    laptop: LaptopCreateNestedOneWithoutCommentsInput
    comment?: CommentCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    rank?: Rank
    content: string
    isStaff?: boolean
    laptopId: number
    commentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: Enumerable<CommentCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
  }

  export type CustomerUpsertWithoutProfileInput = {
    update: XOR<CustomerUpdateWithoutProfileInput, CustomerUncheckedUpdateWithoutProfileInput>
    create: XOR<CustomerCreateWithoutProfileInput, CustomerUncheckedCreateWithoutProfileInput>
  }

  export type CustomerUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutCustomerInput
  }

  export type CustomerUncheckedUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCustomerInput
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    rank?: EnumRankFilter | Rank
    content?: StringFilter | string
    authorId?: StringFilter | string
    isStaff?: BoolFilter | boolean
    laptopId?: IntFilter | number
    commentId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PersonCreateWithoutCustomerInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type PersonUncheckedCreateWithoutCustomerInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PersonCreateOrConnectWithoutCustomerInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCustomerInput, PersonUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseCreateWithoutCustomerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutCustomerInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseCreateManyCustomerInputEnvelope = {
    data: Enumerable<PurchaseCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutCustomerInput = {
    update: XOR<PersonUpdateWithoutCustomerInput, PersonUncheckedUpdateWithoutCustomerInput>
    create: XOR<PersonCreateWithoutCustomerInput, PersonUncheckedCreateWithoutCustomerInput>
  }

  export type PersonUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type PersonUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCustomerInput, PurchaseUncheckedUpdateWithoutCustomerInput>
    create: XOR<PurchaseCreateWithoutCustomerInput, PurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCustomerInput, PurchaseUncheckedUpdateWithoutCustomerInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCustomerInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: Enumerable<PurchaseScalarWhereInput>
    OR?: Enumerable<PurchaseScalarWhereInput>
    NOT?: Enumerable<PurchaseScalarWhereInput>
    id?: IntFilter | number
    customerId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PersonCreateWithoutUserInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutProfileInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type PersonUncheckedCreateWithoutUserInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerUncheckedCreateNestedOneWithoutProfileInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PersonCreateOrConnectWithoutUserInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageCreateNestedManyWithoutPostInput
    laptops?: LaptopCreateNestedManyWithoutPostsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    videos?: VideoCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutUserInput = {
    update: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type PersonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutProfileInput
    comments?: CommentUpdateManyWithoutAuthorInput
  }

  export type PersonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUncheckedUpdateOneWithoutProfileInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    authorId?: StringFilter | string
    defaultImageId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PriceMapCreateWithoutLaptopsInput = {
    price?: Decimal | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceMapUncheckedCreateWithoutLaptopsInput = {
    id?: number
    price?: Decimal | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceMapCreateOrConnectWithoutLaptopsInput = {
    where: PriceMapWhereUniqueInput
    create: XOR<PriceMapCreateWithoutLaptopsInput, PriceMapUncheckedCreateWithoutLaptopsInput>
  }

  export type DiscountCreateWithoutLaptopsInput = {
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUncheckedCreateWithoutLaptopsInput = {
    id?: number
    value?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountCreateOrConnectWithoutLaptopsInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutLaptopsInput, DiscountUncheckedCreateWithoutLaptopsInput>
  }

  export type ImageCreateWithoutDefaultLaptopsInput = {
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutImagesInput
    post?: PostCreateNestedManyWithoutImagesInput
    defaultPosts?: PostCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageUncheckedCreateWithoutDefaultLaptopsInput = {
    id?: number
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultPosts?: PostUncheckedCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageCreateOrConnectWithoutDefaultLaptopsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutDefaultLaptopsInput, ImageUncheckedCreateWithoutDefaultLaptopsInput>
  }

  export type PurchaseCreateWithoutLaptopsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutLaptopsInput = {
    id?: number
    customerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutLaptopsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutLaptopsInput, PurchaseUncheckedCreateWithoutLaptopsInput>
  }

  export type PostCreateWithoutLaptopsInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageCreateNestedManyWithoutPostInput
    author: UserCreateNestedOneWithoutPostsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    videos?: VideoCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLaptopsInput = {
    id?: number
    title: string
    authorId: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLaptopsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLaptopsInput, PostUncheckedCreateWithoutLaptopsInput>
  }

  export type CommentCreateWithoutLaptopInput = {
    rank?: Rank
    content: string
    isStaff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: PersonCreateNestedOneWithoutCommentsInput
    comment?: CommentCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutLaptopInput = {
    id?: number
    rank?: Rank
    content: string
    authorId: string
    isStaff?: boolean
    commentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutLaptopInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutLaptopInput, CommentUncheckedCreateWithoutLaptopInput>
  }

  export type CommentCreateManyLaptopInputEnvelope = {
    data: Enumerable<CommentCreateManyLaptopInput>
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutLaptopsInput = {
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedManyWithoutImagesInput
    defaultLaptops?: LaptopCreateNestedManyWithoutDefaultImageInput
    defaultPosts?: PostCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageUncheckedCreateWithoutLaptopsInput = {
    id?: number
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultLaptops?: LaptopUncheckedCreateNestedManyWithoutDefaultImageInput
    defaultPosts?: PostUncheckedCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageCreateOrConnectWithoutLaptopsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutLaptopsInput, ImageUncheckedCreateWithoutLaptopsInput>
  }

  export type VideoCreateWithoutLaptopsInput = {
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedManyWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutLaptopsInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutLaptopsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutLaptopsInput, VideoUncheckedCreateWithoutLaptopsInput>
  }

  export type PriceMapUpsertWithoutLaptopsInput = {
    update: XOR<PriceMapUpdateWithoutLaptopsInput, PriceMapUncheckedUpdateWithoutLaptopsInput>
    create: XOR<PriceMapCreateWithoutLaptopsInput, PriceMapUncheckedCreateWithoutLaptopsInput>
  }

  export type PriceMapUpdateWithoutLaptopsInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceMapUncheckedUpdateWithoutLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUpsertWithWhereUniqueWithoutLaptopsInput = {
    where: DiscountWhereUniqueInput
    update: XOR<DiscountUpdateWithoutLaptopsInput, DiscountUncheckedUpdateWithoutLaptopsInput>
    create: XOR<DiscountCreateWithoutLaptopsInput, DiscountUncheckedCreateWithoutLaptopsInput>
  }

  export type DiscountUpdateWithWhereUniqueWithoutLaptopsInput = {
    where: DiscountWhereUniqueInput
    data: XOR<DiscountUpdateWithoutLaptopsInput, DiscountUncheckedUpdateWithoutLaptopsInput>
  }

  export type DiscountUpdateManyWithWhereWithoutLaptopsInput = {
    where: DiscountScalarWhereInput
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyWithoutDiscountsInput>
  }

  export type DiscountScalarWhereInput = {
    AND?: Enumerable<DiscountScalarWhereInput>
    OR?: Enumerable<DiscountScalarWhereInput>
    NOT?: Enumerable<DiscountScalarWhereInput>
    id?: IntFilter | number
    value?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ImageUpsertWithoutDefaultLaptopsInput = {
    update: XOR<ImageUpdateWithoutDefaultLaptopsInput, ImageUncheckedUpdateWithoutDefaultLaptopsInput>
    create: XOR<ImageCreateWithoutDefaultLaptopsInput, ImageUncheckedCreateWithoutDefaultLaptopsInput>
  }

  export type ImageUpdateWithoutDefaultLaptopsInput = {
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutImagesInput
    post?: PostUpdateManyWithoutImagesInput
    defaultPosts?: PostUpdateManyWithoutDefaultImageInput
  }

  export type ImageUncheckedUpdateWithoutDefaultLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultPosts?: PostUncheckedUpdateManyWithoutDefaultImageInput
  }

  export type PurchaseUpsertWithWhereUniqueWithoutLaptopsInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutLaptopsInput, PurchaseUncheckedUpdateWithoutLaptopsInput>
    create: XOR<PurchaseCreateWithoutLaptopsInput, PurchaseUncheckedCreateWithoutLaptopsInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutLaptopsInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutLaptopsInput, PurchaseUncheckedUpdateWithoutLaptopsInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutLaptopsInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type PostUpsertWithWhereUniqueWithoutLaptopsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutLaptopsInput, PostUncheckedUpdateWithoutLaptopsInput>
    create: XOR<PostCreateWithoutLaptopsInput, PostUncheckedCreateWithoutLaptopsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutLaptopsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutLaptopsInput, PostUncheckedUpdateWithoutLaptopsInput>
  }

  export type PostUpdateManyWithWhereWithoutLaptopsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutLaptopInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutLaptopInput, CommentUncheckedUpdateWithoutLaptopInput>
    create: XOR<CommentCreateWithoutLaptopInput, CommentUncheckedCreateWithoutLaptopInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutLaptopInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutLaptopInput, CommentUncheckedUpdateWithoutLaptopInput>
  }

  export type CommentUpdateManyWithWhereWithoutLaptopInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutLaptopsInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutLaptopsInput, ImageUncheckedUpdateWithoutLaptopsInput>
    create: XOR<ImageCreateWithoutLaptopsInput, ImageUncheckedCreateWithoutLaptopsInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutLaptopsInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutLaptopsInput, ImageUncheckedUpdateWithoutLaptopsInput>
  }

  export type ImageUpdateManyWithWhereWithoutLaptopsInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type ImageScalarWhereInput = {
    AND?: Enumerable<ImageScalarWhereInput>
    OR?: Enumerable<ImageScalarWhereInput>
    NOT?: Enumerable<ImageScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    mimeType?: EnumMimeTypeFilter | MimeType
    data?: BytesFilter | Buffer
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VideoUpsertWithWhereUniqueWithoutLaptopsInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutLaptopsInput, VideoUncheckedUpdateWithoutLaptopsInput>
    create: XOR<VideoCreateWithoutLaptopsInput, VideoUncheckedCreateWithoutLaptopsInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutLaptopsInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutLaptopsInput, VideoUncheckedUpdateWithoutLaptopsInput>
  }

  export type VideoUpdateManyWithWhereWithoutLaptopsInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutVideosInput>
  }

  export type VideoScalarWhereInput = {
    AND?: Enumerable<VideoScalarWhereInput>
    OR?: Enumerable<VideoScalarWhereInput>
    NOT?: Enumerable<VideoScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PersonCreateWithoutCommentsInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
    customer?: CustomerCreateNestedOneWithoutProfileInput
  }

  export type PersonUncheckedCreateWithoutCommentsInput = {
    id?: string
    fullname: string
    gender?: Gender
    phone: string
    email?: string | null
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutProfileInput
    customer?: CustomerUncheckedCreateNestedOneWithoutProfileInput
  }

  export type PersonCreateOrConnectWithoutCommentsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCommentsInput, PersonUncheckedCreateWithoutCommentsInput>
  }

  export type LaptopCreateWithoutCommentsInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutCommentsInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaptopCreateOrConnectWithoutCommentsInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutCommentsInput, LaptopUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutCommentsInput = {
    rank?: Rank
    content: string
    isStaff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: PersonCreateNestedOneWithoutCommentsInput
    laptop: LaptopCreateNestedOneWithoutCommentsInput
    comment?: CommentCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutCommentsInput = {
    id?: number
    rank?: Rank
    content: string
    authorId: string
    isStaff?: boolean
    laptopId: number
    commentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutCommentsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutCommentInput = {
    rank?: Rank
    content: string
    isStaff?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: PersonCreateNestedOneWithoutCommentsInput
    laptop: LaptopCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCommentInput = {
    id?: number
    rank?: Rank
    content: string
    authorId: string
    isStaff?: boolean
    laptopId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutCommentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput>
  }

  export type CommentCreateManyCommentInputEnvelope = {
    data: Enumerable<CommentCreateManyCommentInput>
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutCommentsInput = {
    update: XOR<PersonUpdateWithoutCommentsInput, PersonUncheckedUpdateWithoutCommentsInput>
    create: XOR<PersonCreateWithoutCommentsInput, PersonUncheckedCreateWithoutCommentsInput>
  }

  export type PersonUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileInput
    customer?: CustomerUpdateOneWithoutProfileInput
  }

  export type PersonUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | Gender
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutProfileInput
    customer?: CustomerUncheckedUpdateOneWithoutProfileInput
  }

  export type LaptopUpsertWithoutCommentsInput = {
    update: XOR<LaptopUpdateWithoutCommentsInput, LaptopUncheckedUpdateWithoutCommentsInput>
    create: XOR<LaptopCreateWithoutCommentsInput, LaptopUncheckedCreateWithoutCommentsInput>
  }

  export type LaptopUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    images?: ImageUpdateManyWithoutLaptopsInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithoutCommentsInput = {
    update: XOR<CommentUpdateWithoutCommentsInput, CommentUncheckedUpdateWithoutCommentsInput>
    create: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
  }

  export type CommentUpdateWithoutCommentsInput = {
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PersonUpdateOneRequiredWithoutCommentsInput
    laptop?: LaptopUpdateOneRequiredWithoutCommentsInput
    comment?: CommentUpdateOneWithoutCommentsInput
  }

  export type CommentUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    laptopId?: IntFieldUpdateOperationsInput | number
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCommentInput, CommentUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCommentInput, CommentUncheckedUpdateWithoutCommentInput>
  }

  export type CommentUpdateManyWithWhereWithoutCommentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type LaptopCreateWithoutPriceMapInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutPriceMapInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopCreateOrConnectWithoutPriceMapInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutPriceMapInput, LaptopUncheckedCreateWithoutPriceMapInput>
  }

  export type LaptopCreateManyPriceMapInputEnvelope = {
    data: Enumerable<LaptopCreateManyPriceMapInput>
    skipDuplicates?: boolean
  }

  export type LaptopUpsertWithWhereUniqueWithoutPriceMapInput = {
    where: LaptopWhereUniqueInput
    update: XOR<LaptopUpdateWithoutPriceMapInput, LaptopUncheckedUpdateWithoutPriceMapInput>
    create: XOR<LaptopCreateWithoutPriceMapInput, LaptopUncheckedCreateWithoutPriceMapInput>
  }

  export type LaptopUpdateWithWhereUniqueWithoutPriceMapInput = {
    where: LaptopWhereUniqueInput
    data: XOR<LaptopUpdateWithoutPriceMapInput, LaptopUncheckedUpdateWithoutPriceMapInput>
  }

  export type LaptopUpdateManyWithWhereWithoutPriceMapInput = {
    where: LaptopScalarWhereInput
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyWithoutLaptopsInput>
  }

  export type LaptopScalarWhereInput = {
    AND?: Enumerable<LaptopScalarWhereInput>
    OR?: Enumerable<LaptopScalarWhereInput>
    NOT?: Enumerable<LaptopScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    brand?: StringFilter | string
    model?: StringFilter | string
    material?: StringFilter | string
    display?: StringFilter | string
    cpu?: StringFilter | string
    ram?: StringFilter | string
    graphicCard?: StringFilter | string
    ports?: StringFilter | string
    wifi?: StringFilter | string
    storage?: StringFilter | string
    webcam?: StringFilter | string
    fans?: StringFilter | string
    speakers?: StringFilter | string
    keyboard?: StringFilter | string
    security?: StringFilter | string
    adapter?: StringFilter | string
    battery?: StringFilter | string
    specialFeatures?: StringFilter | string
    dimensionsAndWeight?: StringFilter | string
    origin?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
    sold?: IntFilter | number
    stopSelling?: BoolFilter | boolean
    os?: EnumOSFilter | OS
    priceMapId?: IntNullableFilter | number | null
    defaultImageId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type LaptopCreateWithoutDiscountsInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutDiscountsInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopCreateOrConnectWithoutDiscountsInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutDiscountsInput, LaptopUncheckedCreateWithoutDiscountsInput>
  }

  export type LaptopUpsertWithWhereUniqueWithoutDiscountsInput = {
    where: LaptopWhereUniqueInput
    update: XOR<LaptopUpdateWithoutDiscountsInput, LaptopUncheckedUpdateWithoutDiscountsInput>
    create: XOR<LaptopCreateWithoutDiscountsInput, LaptopUncheckedCreateWithoutDiscountsInput>
  }

  export type LaptopUpdateWithWhereUniqueWithoutDiscountsInput = {
    where: LaptopWhereUniqueInput
    data: XOR<LaptopUpdateWithoutDiscountsInput, LaptopUncheckedUpdateWithoutDiscountsInput>
  }

  export type LaptopUpdateManyWithWhereWithoutDiscountsInput = {
    where: LaptopScalarWhereInput
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyWithoutLaptopsInput>
  }

  export type CustomerCreateWithoutPurchasesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: PersonCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPurchasesInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutPurchasesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
  }

  export type LaptopCreateWithoutPurchasesInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutPurchasesInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopCreateOrConnectWithoutPurchasesInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutPurchasesInput, LaptopUncheckedCreateWithoutPurchasesInput>
  }

  export type CustomerUpsertWithoutPurchasesInput = {
    update: XOR<CustomerUpdateWithoutPurchasesInput, CustomerUncheckedUpdateWithoutPurchasesInput>
    create: XOR<CustomerCreateWithoutPurchasesInput, CustomerUncheckedCreateWithoutPurchasesInput>
  }

  export type CustomerUpdateWithoutPurchasesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: PersonUpdateOneRequiredWithoutCustomerInput
  }

  export type CustomerUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopUpsertWithWhereUniqueWithoutPurchasesInput = {
    where: LaptopWhereUniqueInput
    update: XOR<LaptopUpdateWithoutPurchasesInput, LaptopUncheckedUpdateWithoutPurchasesInput>
    create: XOR<LaptopCreateWithoutPurchasesInput, LaptopUncheckedCreateWithoutPurchasesInput>
  }

  export type LaptopUpdateWithWhereUniqueWithoutPurchasesInput = {
    where: LaptopWhereUniqueInput
    data: XOR<LaptopUpdateWithoutPurchasesInput, LaptopUncheckedUpdateWithoutPurchasesInput>
  }

  export type LaptopUpdateManyWithWhereWithoutPurchasesInput = {
    where: LaptopScalarWhereInput
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyWithoutLaptopsInput>
  }

  export type PostCreateWithoutPassagesInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    videos?: VideoCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPassagesInput = {
    id?: number
    title: string
    authorId: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutPassagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPassagesInput, PostUncheckedCreateWithoutPassagesInput>
  }

  export type PostUpsertWithoutPassagesInput = {
    update: XOR<PostUpdateWithoutPassagesInput, PostUncheckedUpdateWithoutPassagesInput>
    create: XOR<PostCreateWithoutPassagesInput, PostUncheckedCreateWithoutPassagesInput>
  }

  export type PostUpdateWithoutPassagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutPostsInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    defaultImage?: ImageUpdateOneWithoutDefaultPostsInput
    images?: ImageUpdateManyWithoutPostInput
    videos?: VideoUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutPassagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassageCreateWithoutPostInput = {
    header: string
    content: string
  }

  export type PassageUncheckedCreateWithoutPostInput = {
    id?: number
    header: string
    content: string
  }

  export type PassageCreateOrConnectWithoutPostInput = {
    where: PassageWhereUniqueInput
    create: XOR<PassageCreateWithoutPostInput, PassageUncheckedCreateWithoutPostInput>
  }

  export type PassageCreateManyPostInputEnvelope = {
    data: Enumerable<PassageCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type LaptopCreateWithoutPostsInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutPostsInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopCreateOrConnectWithoutPostsInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutPostsInput, LaptopUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutPostsInput = {
    password: string
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: PersonCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    password: string
    role?: Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ImageCreateWithoutDefaultPostsInput = {
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutImagesInput
    post?: PostCreateNestedManyWithoutImagesInput
    defaultLaptops?: LaptopCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageUncheckedCreateWithoutDefaultPostsInput = {
    id?: number
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultLaptops?: LaptopUncheckedCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageCreateOrConnectWithoutDefaultPostsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutDefaultPostsInput, ImageUncheckedCreateWithoutDefaultPostsInput>
  }

  export type ImageCreateWithoutPostInput = {
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutImagesInput
    defaultLaptops?: LaptopCreateNestedManyWithoutDefaultImageInput
    defaultPosts?: PostCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageUncheckedCreateWithoutPostInput = {
    id?: number
    title: string
    mimeType?: MimeType
    data: Buffer
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultLaptops?: LaptopUncheckedCreateNestedManyWithoutDefaultImageInput
    defaultPosts?: PostUncheckedCreateNestedManyWithoutDefaultImageInput
  }

  export type ImageCreateOrConnectWithoutPostInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type VideoCreateWithoutPostInput = {
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    laptops?: LaptopCreateNestedManyWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutPostInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutPostInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutPostInput, VideoUncheckedCreateWithoutPostInput>
  }

  export type PassageUpsertWithWhereUniqueWithoutPostInput = {
    where: PassageWhereUniqueInput
    update: XOR<PassageUpdateWithoutPostInput, PassageUncheckedUpdateWithoutPostInput>
    create: XOR<PassageCreateWithoutPostInput, PassageUncheckedCreateWithoutPostInput>
  }

  export type PassageUpdateWithWhereUniqueWithoutPostInput = {
    where: PassageWhereUniqueInput
    data: XOR<PassageUpdateWithoutPostInput, PassageUncheckedUpdateWithoutPostInput>
  }

  export type PassageUpdateManyWithWhereWithoutPostInput = {
    where: PassageScalarWhereInput
    data: XOR<PassageUpdateManyMutationInput, PassageUncheckedUpdateManyWithoutPassagesInput>
  }

  export type PassageScalarWhereInput = {
    AND?: Enumerable<PassageScalarWhereInput>
    OR?: Enumerable<PassageScalarWhereInput>
    NOT?: Enumerable<PassageScalarWhereInput>
    id?: IntFilter | number
    header?: StringFilter | string
    content?: StringFilter | string
    postId?: IntFilter | number
  }

  export type LaptopUpsertWithWhereUniqueWithoutPostsInput = {
    where: LaptopWhereUniqueInput
    update: XOR<LaptopUpdateWithoutPostsInput, LaptopUncheckedUpdateWithoutPostsInput>
    create: XOR<LaptopCreateWithoutPostsInput, LaptopUncheckedCreateWithoutPostsInput>
  }

  export type LaptopUpdateWithWhereUniqueWithoutPostsInput = {
    where: LaptopWhereUniqueInput
    data: XOR<LaptopUpdateWithoutPostsInput, LaptopUncheckedUpdateWithoutPostsInput>
  }

  export type LaptopUpdateManyWithWhereWithoutPostsInput = {
    where: LaptopScalarWhereInput
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyWithoutLaptopsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: PersonUpdateOneRequiredWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpsertWithoutDefaultPostsInput = {
    update: XOR<ImageUpdateWithoutDefaultPostsInput, ImageUncheckedUpdateWithoutDefaultPostsInput>
    create: XOR<ImageCreateWithoutDefaultPostsInput, ImageUncheckedCreateWithoutDefaultPostsInput>
  }

  export type ImageUpdateWithoutDefaultPostsInput = {
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutImagesInput
    post?: PostUpdateManyWithoutImagesInput
    defaultLaptops?: LaptopUpdateManyWithoutDefaultImageInput
  }

  export type ImageUncheckedUpdateWithoutDefaultPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultLaptops?: LaptopUncheckedUpdateManyWithoutDefaultImageInput
  }

  export type ImageUpsertWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
    create: XOR<ImageCreateWithoutPostInput, ImageUncheckedCreateWithoutPostInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutPostInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutPostInput, ImageUncheckedUpdateWithoutPostInput>
  }

  export type ImageUpdateManyWithWhereWithoutPostInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutPostInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutPostInput, VideoUncheckedUpdateWithoutPostInput>
    create: XOR<VideoCreateWithoutPostInput, VideoUncheckedCreateWithoutPostInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutPostInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutPostInput, VideoUncheckedUpdateWithoutPostInput>
  }

  export type VideoUpdateManyWithWhereWithoutPostInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutVideosInput>
  }

  export type LaptopCreateWithoutImagesInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutImagesInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopCreateOrConnectWithoutImagesInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutImagesInput, LaptopUncheckedCreateWithoutImagesInput>
  }

  export type PostCreateWithoutImagesInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageCreateNestedManyWithoutPostInput
    laptops?: LaptopCreateNestedManyWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultPostsInput
    videos?: VideoCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    authorId: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutImagesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
  }

  export type LaptopCreateWithoutDefaultImageInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
    videos?: VideoCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutDefaultImageInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopCreateOrConnectWithoutDefaultImageInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutDefaultImageInput, LaptopUncheckedCreateWithoutDefaultImageInput>
  }

  export type LaptopCreateManyDefaultImageInputEnvelope = {
    data: Enumerable<LaptopCreateManyDefaultImageInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutDefaultImageInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageCreateNestedManyWithoutPostInput
    laptops?: LaptopCreateNestedManyWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
    videos?: VideoCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutDefaultImageInput = {
    id?: number
    title: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutDefaultImageInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutDefaultImageInput, PostUncheckedCreateWithoutDefaultImageInput>
  }

  export type PostCreateManyDefaultImageInputEnvelope = {
    data: Enumerable<PostCreateManyDefaultImageInput>
    skipDuplicates?: boolean
  }

  export type LaptopUpsertWithWhereUniqueWithoutImagesInput = {
    where: LaptopWhereUniqueInput
    update: XOR<LaptopUpdateWithoutImagesInput, LaptopUncheckedUpdateWithoutImagesInput>
    create: XOR<LaptopCreateWithoutImagesInput, LaptopUncheckedCreateWithoutImagesInput>
  }

  export type LaptopUpdateWithWhereUniqueWithoutImagesInput = {
    where: LaptopWhereUniqueInput
    data: XOR<LaptopUpdateWithoutImagesInput, LaptopUncheckedUpdateWithoutImagesInput>
  }

  export type LaptopUpdateManyWithWhereWithoutImagesInput = {
    where: LaptopScalarWhereInput
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyWithoutLaptopsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutImagesInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
    create: XOR<PostCreateWithoutImagesInput, PostUncheckedCreateWithoutImagesInput>
  }

  export type PostUpdateWithWhereUniqueWithoutImagesInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutImagesInput, PostUncheckedUpdateWithoutImagesInput>
  }

  export type PostUpdateManyWithWhereWithoutImagesInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type LaptopUpsertWithWhereUniqueWithoutDefaultImageInput = {
    where: LaptopWhereUniqueInput
    update: XOR<LaptopUpdateWithoutDefaultImageInput, LaptopUncheckedUpdateWithoutDefaultImageInput>
    create: XOR<LaptopCreateWithoutDefaultImageInput, LaptopUncheckedCreateWithoutDefaultImageInput>
  }

  export type LaptopUpdateWithWhereUniqueWithoutDefaultImageInput = {
    where: LaptopWhereUniqueInput
    data: XOR<LaptopUpdateWithoutDefaultImageInput, LaptopUncheckedUpdateWithoutDefaultImageInput>
  }

  export type LaptopUpdateManyWithWhereWithoutDefaultImageInput = {
    where: LaptopScalarWhereInput
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyWithoutDefaultLaptopsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutDefaultImageInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutDefaultImageInput, PostUncheckedUpdateWithoutDefaultImageInput>
    create: XOR<PostCreateWithoutDefaultImageInput, PostUncheckedCreateWithoutDefaultImageInput>
  }

  export type PostUpdateWithWhereUniqueWithoutDefaultImageInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutDefaultImageInput, PostUncheckedUpdateWithoutDefaultImageInput>
  }

  export type PostUpdateManyWithWhereWithoutDefaultImageInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutDefaultPostsInput>
  }

  export type LaptopCreateWithoutVideosInput = {
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    createdAt?: Date | string
    updatedAt?: Date | string
    priceMap?: PriceMapCreateNestedOneWithoutLaptopsInput
    discounts?: DiscountCreateNestedManyWithoutLaptopsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultLaptopsInput
    purchases?: PurchaseCreateNestedManyWithoutLaptopsInput
    posts?: PostCreateNestedManyWithoutLaptopsInput
    comments?: CommentCreateNestedManyWithoutLaptopInput
    images?: ImageCreateNestedManyWithoutLaptopsInput
  }

  export type LaptopUncheckedCreateWithoutVideosInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutLaptopInput
  }

  export type LaptopCreateOrConnectWithoutVideosInput = {
    where: LaptopWhereUniqueInput
    create: XOR<LaptopCreateWithoutVideosInput, LaptopUncheckedCreateWithoutVideosInput>
  }

  export type PostCreateWithoutVideosInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageCreateNestedManyWithoutPostInput
    laptops?: LaptopCreateNestedManyWithoutPostsInput
    author: UserCreateNestedOneWithoutPostsInput
    defaultImage?: ImageCreateNestedOneWithoutDefaultPostsInput
    images?: ImageCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutVideosInput = {
    id?: number
    title: string
    authorId: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passages?: PassageUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutVideosInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutVideosInput, PostUncheckedCreateWithoutVideosInput>
  }

  export type LaptopUpsertWithWhereUniqueWithoutVideosInput = {
    where: LaptopWhereUniqueInput
    update: XOR<LaptopUpdateWithoutVideosInput, LaptopUncheckedUpdateWithoutVideosInput>
    create: XOR<LaptopCreateWithoutVideosInput, LaptopUncheckedCreateWithoutVideosInput>
  }

  export type LaptopUpdateWithWhereUniqueWithoutVideosInput = {
    where: LaptopWhereUniqueInput
    data: XOR<LaptopUpdateWithoutVideosInput, LaptopUncheckedUpdateWithoutVideosInput>
  }

  export type LaptopUpdateManyWithWhereWithoutVideosInput = {
    where: LaptopScalarWhereInput
    data: XOR<LaptopUpdateManyMutationInput, LaptopUncheckedUpdateManyWithoutLaptopsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutVideosInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutVideosInput, PostUncheckedUpdateWithoutVideosInput>
    create: XOR<PostCreateWithoutVideosInput, PostUncheckedCreateWithoutVideosInput>
  }

  export type PostUpdateWithWhereUniqueWithoutVideosInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutVideosInput, PostUncheckedUpdateWithoutVideosInput>
  }

  export type PostUpdateManyWithWhereWithoutVideosInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentCreateManyAuthorInput = {
    id?: number
    rank?: Rank
    content: string
    isStaff?: boolean
    laptopId: number
    commentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptop?: LaptopUpdateOneRequiredWithoutCommentsInput
    comment?: CommentUpdateOneWithoutCommentsInput
    comments?: CommentUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    laptopId?: IntFieldUpdateOperationsInput | number
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    laptopId?: IntFieldUpdateOperationsInput | number
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyCustomerInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateWithoutCustomerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutPurchasesInput
  }

  export type PurchaseUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUpdateManyWithoutPostInput
    laptops?: LaptopUpdateManyWithoutPostsInput
    defaultImage?: ImageUpdateOneWithoutDefaultPostsInput
    images?: ImageUpdateManyWithoutPostInput
    videos?: VideoUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyLaptopInput = {
    id?: number
    rank?: Rank
    content: string
    authorId: string
    isStaff?: boolean
    commentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiscountUpdateWithoutLaptopsInput = {
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateWithoutLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateManyWithoutDiscountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutLaptopsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPurchasesInput
  }

  export type PurchaseUncheckedUpdateWithoutLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutLaptopsInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUpdateManyWithoutPostInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    defaultImage?: ImageUpdateOneWithoutDefaultPostsInput
    images?: ImageUpdateManyWithoutPostInput
    videos?: VideoUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUncheckedUpdateManyWithoutPostInput
  }

  export type CommentUpdateWithoutLaptopInput = {
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PersonUpdateOneRequiredWithoutCommentsInput
    comment?: CommentUpdateOneWithoutCommentsInput
    comments?: CommentUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutLaptopInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    commentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCommentInput
  }

  export type ImageUpdateWithoutLaptopsInput = {
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateManyWithoutImagesInput
    defaultLaptops?: LaptopUpdateManyWithoutDefaultImageInput
    defaultPosts?: PostUpdateManyWithoutDefaultImageInput
  }

  export type ImageUncheckedUpdateWithoutLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultLaptops?: LaptopUncheckedUpdateManyWithoutDefaultImageInput
    defaultPosts?: PostUncheckedUpdateManyWithoutDefaultImageInput
  }

  export type ImageUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutLaptopsInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateManyWithoutVideosInput
  }

  export type VideoUncheckedUpdateWithoutLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyCommentInput = {
    id?: number
    rank?: Rank
    content: string
    authorId: string
    isStaff?: boolean
    laptopId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutCommentInput = {
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PersonUpdateOneRequiredWithoutCommentsInput
    laptop?: LaptopUpdateOneRequiredWithoutCommentsInput
    comments?: CommentUpdateManyWithoutCommentInput
  }

  export type CommentUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: EnumRankFieldUpdateOperationsInput | Rank
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    laptopId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCommentInput
  }

  export type LaptopCreateManyPriceMapInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    defaultImageId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaptopUpdateWithoutPriceMapInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    images?: ImageUpdateManyWithoutLaptopsInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutPriceMapInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type LaptopUncheckedUpdateManyWithoutLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopUpdateWithoutDiscountsInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    images?: ImageUpdateManyWithoutLaptopsInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutDiscountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type LaptopUpdateWithoutPurchasesInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    images?: ImageUpdateManyWithoutLaptopsInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type PassageCreateManyPostInput = {
    id?: number
    header: string
    content: string
  }

  export type PassageUpdateWithoutPostInput = {
    header?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PassageUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type PassageUncheckedUpdateManyWithoutPassagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type LaptopUpdateWithoutPostsInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    images?: ImageUpdateManyWithoutLaptopsInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type ImageUpdateWithoutPostInput = {
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutImagesInput
    defaultLaptops?: LaptopUpdateManyWithoutDefaultImageInput
    defaultPosts?: PostUpdateManyWithoutDefaultImageInput
  }

  export type ImageUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    mimeType?: EnumMimeTypeFieldUpdateOperationsInput | MimeType
    data?: BytesFieldUpdateOperationsInput | Buffer
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultLaptops?: LaptopUncheckedUpdateManyWithoutDefaultImageInput
    defaultPosts?: PostUncheckedUpdateManyWithoutDefaultImageInput
  }

  export type VideoUpdateWithoutPostInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laptops?: LaptopUpdateManyWithoutVideosInput
  }

  export type VideoUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopCreateManyDefaultImageInput = {
    id?: number
    title?: string
    brand?: string
    model?: string
    material?: string
    display?: string
    cpu?: string
    ram?: string
    graphicCard?: string
    ports?: string
    wifi?: string
    storage?: string
    webcam?: string
    fans?: string
    speakers?: string
    keyboard?: string
    security?: string
    adapter?: string
    battery?: string
    specialFeatures?: string
    dimensionsAndWeight?: string
    origin?: string
    releaseDate?: Date | string
    sold?: number
    stopSelling?: boolean
    os?: OS
    priceMapId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyDefaultImageInput = {
    id?: number
    title: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaptopUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type PostUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUpdateManyWithoutPostInput
    laptops?: LaptopUpdateManyWithoutPostsInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    defaultImage?: ImageUpdateOneWithoutDefaultPostsInput
    videos?: VideoUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopUpdateWithoutDefaultImageInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    images?: ImageUpdateManyWithoutLaptopsInput
    videos?: VideoUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutDefaultImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type LaptopUncheckedUpdateManyWithoutDefaultLaptopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutDefaultImageInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUpdateManyWithoutPostInput
    laptops?: LaptopUpdateManyWithoutPostsInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    images?: ImageUpdateManyWithoutPostInput
    videos?: VideoUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutDefaultImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutDefaultPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopUpdateWithoutVideosInput = {
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    priceMap?: PriceMapUpdateOneWithoutLaptopsInput
    discounts?: DiscountUpdateManyWithoutLaptopsInput
    defaultImage?: ImageUpdateOneWithoutDefaultLaptopsInput
    purchases?: PurchaseUpdateManyWithoutLaptopsInput
    posts?: PostUpdateManyWithoutLaptopsInput
    comments?: CommentUpdateManyWithoutLaptopInput
    images?: ImageUpdateManyWithoutLaptopsInput
  }

  export type LaptopUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    material?: StringFieldUpdateOperationsInput | string
    display?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    ram?: StringFieldUpdateOperationsInput | string
    graphicCard?: StringFieldUpdateOperationsInput | string
    ports?: StringFieldUpdateOperationsInput | string
    wifi?: StringFieldUpdateOperationsInput | string
    storage?: StringFieldUpdateOperationsInput | string
    webcam?: StringFieldUpdateOperationsInput | string
    fans?: StringFieldUpdateOperationsInput | string
    speakers?: StringFieldUpdateOperationsInput | string
    keyboard?: StringFieldUpdateOperationsInput | string
    security?: StringFieldUpdateOperationsInput | string
    adapter?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    specialFeatures?: StringFieldUpdateOperationsInput | string
    dimensionsAndWeight?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sold?: IntFieldUpdateOperationsInput | number
    stopSelling?: BoolFieldUpdateOperationsInput | boolean
    os?: EnumOSFieldUpdateOperationsInput | OS
    priceMapId?: NullableIntFieldUpdateOperationsInput | number | null
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutLaptopInput
  }

  export type PostUpdateWithoutVideosInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUpdateManyWithoutPostInput
    laptops?: LaptopUpdateManyWithoutPostsInput
    author?: UserUpdateOneRequiredWithoutPostsInput
    defaultImage?: ImageUpdateOneWithoutDefaultPostsInput
    images?: ImageUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    defaultImageId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passages?: PassageUncheckedUpdateManyWithoutPostInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}