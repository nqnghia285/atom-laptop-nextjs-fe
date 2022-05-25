import { Response } from '~/interface'
import { query } from '../apollo-client.config'
import { LOGIN } from '../docs'

export function login(username: string, password: string) {
   return query({
      query: LOGIN,
      variables: { username, password },
      fetchPolicy: 'network-only',
   }).then<Response>((res) => {
      if (res.data) {
         return res.data.logIn
      } else {
         return {
            action: 'logIn',
            data: null,
            isSuccess: false,
            errors: res.errors,
            message: res.errors?.[0]?.message,
         }
      }
   })
}
