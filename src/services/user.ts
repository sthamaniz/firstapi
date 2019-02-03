import { User } from '../structures/user';

import * as userModel from '../models/user';

/**
 * fetch the list of all users
 */
export async function fetchAll():Promise<User[]>{
    try {
        return await userModel.fetchAll();
    } catch (error) {
        throw error;
    }
};