import { Request,Response, NextFunction } from 'express';

import TokenError from '../errors/TokenError';

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 * @return {Promise}
 */
export async function checkAccessToken (req:Request, res:Response, next:NextFunction){
    const { headers : { accessToken } } = req;

    if (!accessToken) {
        next(new TokenError('Access Token Not Set'));
    } else {
        try {
            next();
        } catch(error) {
            throw error;
        }
    }
}