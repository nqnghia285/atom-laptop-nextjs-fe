import { DocumentNode, FetchPolicy, FetchResult } from '@apollo/client'
import { Actions, Args, ObjectType, Response } from '~/interface'
import { mutate, query } from './apollo-client.config'

function handleResponse(
   res: FetchResult<any, Record<string, any>, Record<string, any>>,
   action: Actions,
   objectType: ObjectType
): Response {
   if (res.data) {
      return res.data[`${action}${objectType}`]
   } else {
      return {
         action: `${action}${objectType}`,
         data: null,
         isSuccess: false,
         errors: res.errors,
         message: res.errors?.[0]?.message,
      }
   }
}

export function handleAction(
   actionType: 'query' | 'mutate',
   action: Actions,
   objectType: ObjectType,
   document: DocumentNode,
   args: Args,
   fetchPolicy: FetchPolicy = 'cache-only'
) {
   return actionType === 'query' ? query({
      query: document,
      variables: args,
      fetchPolicy
   })
      .then<Response>((res) => handleResponse(res, action, objectType))
      .catch<Response>((errors) => ({
         action: `${action}${objectType}`,
         data: null,
         isSuccess: false,
         errors: [errors],
         message: '',
      }))
   :
   mutate({
      mutation: document,
      variables: args
   })
      .then<Response>((res) => handleResponse(res, action, objectType))
      .catch<Response>((errors) => ({
         action: `${action}${objectType}`,
         data: null,
         isSuccess: false,
         errors: [errors],
         message: '',
      }))
}
