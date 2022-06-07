import cookie from 'cookie';
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { Response } from '~/interface';
import { initMiddleware } from '~/utilities';
import { login as apolloClientLogin } from '~/utilities/apollo-client';

const cors = initMiddleware(
   Cors({
      origin: process.env.selfUrl,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true
   })
 )

export default async function login(req: NextApiRequest, res: NextApiResponse<Response>) {
   // Run cors
   await cors(req, res)

   const { username, password } = req.query
   await apolloClientLogin(username as string, password as string)
      .then(response => {
         if (response.isSuccess) {
            res.setHeader(
               'Set-Cookie',
               cookie.serialize('Authorization', response.data?.accessToken, {
                  httpOnly: true,
                  sameSite: 'lax',
                  maxAge: 30 * 24 * 60 * 60, // The cookie expire is one month.
               })
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
      })})
}