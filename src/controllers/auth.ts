import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { User,AuthRequest } from '../structures/user';

import { excludeAttr } from '../utils/object';

import config from '../config/config';

/**
 * 
 * @param {AuthRequest} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export async function generateToken(req: AuthRequest, res:Response, next:NextFunction) {

    try {    
        
        const user: User = req.user;
        const attrToExclude = [ 'id', 'password', 'createdAt' ];

        const userDetailForToken = excludeAttr(user,attrToExclude);

        const JWT_SECRET = config.jwtSecret;
        const tokenExpiresIn = '1d';
        const accesstoken = jwt.sign(userDetailForToken,JWT_SECRET, { expiresIn : tokenExpiresIn});

        res.json({...userDetailForToken,accesstoken});

    } catch (error) {
        throw error;
    }
    
}