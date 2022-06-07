import { NextApiRequest, NextApiResponse } from 'next'

export default function initMiddleware(middleware: (req: NextApiRequest, res: NextApiResponse, handler: (result: any) => any) => any) {
   return (req: NextApiRequest, res: NextApiResponse) =>
     new Promise((resolve, reject) => {
       middleware(req, res, (result) => {
         if (result instanceof Error) {
           return reject(result)
         }
         return resolve(result)
       })
     })
 }