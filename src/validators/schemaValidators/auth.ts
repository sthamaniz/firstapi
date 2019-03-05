import { Request, Response, NextFunction } from 'express';

import { validate } from '../../utils/validator';
import { loginSchema } from './schemas/auth';

export async function validateLoginSchema(req: Request, res: Response, next: NextFunction) {
    try {
        const { body } = req;

        await validate(body, loginSchema);

        next();
    } catch(error) {
        next(error);
    }
}