import { useQuery } from '@apollo/client'
import { Response } from '~/interface'
import { LOGIN } from '~/utilities/apollo-client'

export interface UserInput {
   username: string
   password: string
}

export function useLogin(userInput?: UserInput | (() => UserInput)) {
   const response = useQuery<Response, UserInput | (() => UserInput)>(LOGIN, {
      variables: userInput,
      skip: true,
      fetchPolicy: 'network-only',
   })

   return response
}
