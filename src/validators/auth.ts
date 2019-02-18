import { Request, Response, NextFunction } from 'express';

import { AuthRequest } from '../structures/user';

import * as userService from '../services/user';
import * as adminService from '../services/admin';

import DataNotFoundError from '../errors/DataNotFoundError';

/**
 * validate user login
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 * @returns {Promise} 
 */
export async function validateLogin(req: Request, res: Response, next: NextFunction) {
    try {
        const [user] = await userService.search(req.body);
    
        if (user) {
            const [admin] = await adminService.fetchById(user.id);

            let userWithType:any = {};

            if (admin) {
                userWithType = {...user,type:admin};    
            } else {
                userWithType = {...user,type:user};
            }
            
            (req as AuthRequest).user = userWithType;
            next();

        } else {
            throw new DataNotFoundError('Username/Password incorrect');
        }
    } catch (error) {
        return next(error);
    }
}
