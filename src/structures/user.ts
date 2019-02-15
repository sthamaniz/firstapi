import { Request } from 'express';

export interface User {
    id:number;
    username:string;
    firstName: string;
    middleName: string;
    lastName: string;
    mobile: string;
    email:string;
    created_at:Date;
};

/**
 * Interface: AuthRequest
 * 
 * Authorized requests which will contain normal requests
 *            user details for this current user.
 */
export interface AuthRequest extends Request{
    user?: User
}