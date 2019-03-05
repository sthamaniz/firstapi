import { Request, Response, NextFunction } from 'express';

import * as userService from '../services/user';

import DataNotFoundError from '../errors/DataNotFoundError';
import DataDuplicateError from '../errors/DataDuplicateError';

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

export async function userSchemaValidator (req: Request, res:Response, next:NextFunction) {
    try {

        req.check('username').notEmpty();
        req.check('password','password Error').notEmpty();
        req.check('firstName','First Name Error').notEmpty();
        req.check('middleName','Middle Name Error').notEmpty();
        req.check('lastName','Last Name Error').notEmpty();
        req.check('mobile','Mobile error').notEmpty();
        req.check('email','Email Error').notEmpty();

        const error = req.validationErrors();

        if (!error) { 
            // next();
            console.log('success');
        } else {
            throw new DataDuplicateError('Data Duplicate',error);
        }

    } catch(error) {
        next(error);
    }
}