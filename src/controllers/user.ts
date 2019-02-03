import { Request, Response, NextFunction } from 'express';

import * as userService from '../services/user';


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */

export async function fetchAll(req:Request, res:Response, next:NextFunction){
    const allUser = await userService.fetchAll();

    res.json(allUser);
};