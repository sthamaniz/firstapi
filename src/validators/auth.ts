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
        const { body: { username = null, password = null } = {} } = req;

        const [user] = await userService.search({ username, password });
    
        if (user) {
            const [admin] = await adminService.search({userId : user.id});

            let userWithType:any = {};

            let userType:any = {};

            if (admin) {
                userType.type = 'admin';
                userType.role = admin.role;

                userWithType = {...user,type:userType};    
            } else {
                userType.type = 'user';
                
                userWithType = {...user,type:userType};
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
