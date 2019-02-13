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
export async function checkAccessToken (req:Request, res:Response, next:NextFunction){
    
    const { 
        headers : { accessToken }
    } = req;

    if (!accessToken) {
    
        next(new TokenError('Access Token Not Set'));
    } else {
    
        try {

            const decoded = jwt.verify(accessToken, config.jwtSecret);
            const user = decoded as User;
            (req as AuthRequest).user = user;

            next();
        } catch(error) {
    
            next(new TokenError('Access Token Not Set'));
        }
    }
}