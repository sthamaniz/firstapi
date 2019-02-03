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
     const allAdmin = await adminService.fetchAll();

     res.json(allAdmin);
 };