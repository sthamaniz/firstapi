import * as adminModel from '../models/admin';

import { Admin } from '../structures/admin';

/**
 * fetch all admins list
 */

 export async function fetchAll():Promise<Admin[]>{
    try {
        return adminModel.fetchAll();
    } catch(error) {
        throw error;
    }
 };
