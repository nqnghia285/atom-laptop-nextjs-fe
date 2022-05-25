import { register } from './mutation'
import { findFirstLaptop, login, logout } from './query'

export * from './apollo-client.config'
export * from './docs'
export * from './mutation'
export * from './query'

const client = {
   query: {
      laptop: {
         findFirst: findFirstLaptop,
      },
      login: login,
      logout: logout,
   },
   mutation: {
      register: register,
   },
}

export default client
