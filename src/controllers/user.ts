import { Request, Response, NextFunction } from 'express';

import * as userService from '../services/user';


/**
 * 
 * fetch all users
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export async function fetchAll(req:Request, res:Response, next:NextFunction){
    const allUser = await userService.fetchAll();

    res.json(allUser);
};

/**
 * 
 * fetch user by id
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export async function fetchById(req:Request, res:Response, next:NextFunction){
    try {
        const user = await userService.fetchById(req.params.id);
    
        res.json(user);
    } catch (error) {
        throw error;
    }
};

/**
 * 
 * save user
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export async function save(req:Request, res:Response, next:NextFunction){
    try {
        const user = await userService.save(req.body);
    
        res.json(user);
    } catch (error) {
        throw error;
    }
};

/**
 * 
 * update user
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export async function update(req:Request, res:Response, next:NextFunction){
    try {
        const user = await userService.update(req.params.id,req.body);
    
        res.json(user);
    } catch (error) {
        throw error;
    }
};