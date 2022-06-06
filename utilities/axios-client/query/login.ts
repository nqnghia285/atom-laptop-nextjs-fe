import axiosClient from '../axios-client.config';
import { Response } from '~/interface';

export function login(username:string, password:string) {
   return new Promise<Response>((resolve, reject) => {
      axiosClient.get('/login', {
         data: { username, password }
      }).then(res => resolve(res.data))
      .catch(errors=>reject(errors))
   })
}