import { Json } from './json.interface'

export interface Response {
   action: string
   isSuccess: boolean
   data?: any
   errors?: any[]
   message?: string
}
