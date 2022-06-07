import axiosClient from '../axios-client.config';
import { Response } from '~/interface';

export function login(username: string, password: string) {
   return new Promise<Response>(async (resolve, reject) => {
      await axiosClient.get('/login', {
         withCredentials: true,
         params: { username, password }
      })
         .then(res => resolve(res.data))
         .catch(errors => reject(errors))
   })
}