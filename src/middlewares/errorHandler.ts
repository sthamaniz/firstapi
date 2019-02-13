import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";


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