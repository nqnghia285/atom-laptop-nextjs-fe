import axiosClient from '../axios-client.config';
import { Response } from '~/interface';

export function login(username: string, password: string) {
   console.log('getUri', axiosClient.getUri())
   return new Promise<Response>(async (resolve, reject) => {
      await axiosClient.get('/login', {
         params: { username, password }
      })
         .then(res => resolve(res.data))
         .catch(errors => reject(errors))
   })
}