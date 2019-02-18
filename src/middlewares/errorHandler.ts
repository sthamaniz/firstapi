import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

import HttpStatus from 'http-status-code';


export function genericErrors(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
){
    
    const defaultError = {
        code: 500,
        message: "Server Error"
    };

    if (err instanceof CustomError) {
        const errorPayload = {
          code: err.code,
          message: err.message,
          details: err.details
        };
        res.status(errorPayload.code).json(errorPayload);
    }
    
    res.status(defaultError.code).json(defaultError);
}

/**
 * Error response middleware for 404 not found.
 *
 * @param {Request} req
 * @param {Response} res
 */
export function notFound(req: Request, res: Response) {
    res.json({
        error: {
            code: HttpStatus.NOT_FOUND,
            message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
        }
});
}