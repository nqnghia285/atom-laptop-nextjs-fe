import { login } from './query'

export { default as axiosClient } from './axios-client.config'
export * from './query'

const client = {
   query: {
      login
   },
   mutation: {}
}

export default client