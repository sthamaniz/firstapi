import * as jwt from 'jsonwebtoken';
import { Request,Response, NextFunction } from 'express';

import TokenError from '../errors/TokenError';
import { AuthRequest, User } from '../structures/user';
import config from '../config/config';

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 * @return {Promise}
 */
export async function accessTokenValidation (req:Request, res:Response, next:NextFunction){
    
    const { 
        headers : { accesstoken }
    } = req;

    if (!accesstoken) {

        next(new TokenError('Access Token Not Set'));

    } else {

        try {

            const decoded = jwt.verify(accesstoken, config.jwtSecret);
            const user = decoded as User;
            (req as AuthRequest).user = user;

            next();
        } catch(error) {
    
            next(new TokenError('Access Token Error'));
        }

    }
}