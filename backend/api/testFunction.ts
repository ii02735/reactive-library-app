import { VercelRequest, VercelResponse } from '@vercel/node';
import { SpreadSheetManager } from '../lib/googleapis';
import routes from '../controllers/book';
import { classToPlain } from 'class-transformer';

export default async function (request: VercelRequest, response: VercelResponse) {
 
    routes['getAll']().then((data) => {
        response.status(200).send(classToPlain(data))
    })

   
}