import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { Response } from '~/interface';
import { login  as apolloClientLogin} from '~/utilities/apollo-client';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
   const { username, password } = req.query
   await apolloClientLogin(username as string, password as string)
      .then(response => {
         if (response.isSuccess) {
            res.setHeader(
               'Set-Cookie',
               cookie.serialize('Authorization', response.data?.accessToken)
            )
         }

         res.json(response)
      })
      .catch(errors => {
         console.log(errors)
         res.json({
            action: 'logIn',
            isSuccess: false,
            data: null,
            errors: errors,
            message: 'Login is failed'
      } as Response)})
}