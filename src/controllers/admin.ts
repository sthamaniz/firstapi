import { Request, Response, NextFunction } from 'express';

import * as adminService from '../services/admin';

/**
 * fetch all admins
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 export async function fetchAll(req:Request, res:Response, next:NextFunction) {
    
    try {
        
        const allAdmin = await adminService.fetchAll();
        res.status(200).json(allAdmin);
    } catch (error) {
        
        next(error);
    }

 };

 /**
 * fetch all admins
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function fetchById(req:Request, res:Response, next:NextFunction) {
    const admin = await adminService.fetchById(req.params.id);

    res.json(admin);
};

/**
 * fetch all admins
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function save(req:Request, res:Response, next:NextFunction) {
    const admin = await adminService.save(req.body);

    res.json(admin);
};

/**
 * fetch all admins
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function update(req:Request, res:Response, next:NextFunction) {
    const admin = await adminService.update(req.params.id,req.body);

    res.json(admin);
};