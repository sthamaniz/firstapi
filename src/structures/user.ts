import { Request } from 'express';

export interface User {
    id:number;
    
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