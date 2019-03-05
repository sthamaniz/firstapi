import { Request, Response, NextFunction } from 'express';

import * as userService from '../services/user';

import DataNotFoundError from '../errors/DataNotFoundError';

export async function userValidator(req: Request, res:Response, next:NextFunction) {
    try {

        const user = await userService.fetchById(req.params.id);
        
        if (!user.id) {
            throw new DataNotFoundError('User Not Found');
        } else {
            next();
        }

    } catch (error) {
        next(error);
    }
}