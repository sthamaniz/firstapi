import { Request,Response, NextFunction } from 'express';

import * as adminService from '../services/admin';

import { AuthRequest, User } from '../structures/user';
import AuthForbiddenError from '../errors/AuthForbiddenError';

/**
 * 
 * @param {AuthRequest} req 
 * @param {Response} res 
 * @param {NextFunction} next
 * @return {Promise}
 */
export async function adminRouteValidation (req:AuthRequest, res:Response, next:NextFunction){
    
    try {
        const { 
            user : { id }
        } = req;
        
        const user:User = req.user;
        
        const [admin] = await adminService.fetchById(id);

        if (admin) {

            (req as AuthRequest).user = user;
            next();

        } else {

            throw new AuthForbiddenError('Authorization Forbidden');
        }

    } catch (error) {

        return next(error);
    }

}