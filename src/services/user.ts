import { User } from '../structures/user';

import * as userModel from '../models/user';

/**
 * fetch all users
 */
export async function fetchAll():Promise<User[]>{
    try {
        return await userModel.fetchAll();
    } catch (error) {
        throw error;
    }
};

/**
 * fetch user by id
 */
export async function fetchById(userId:number):Promise<User[]>{
    try {
        return await userModel.fetchById(userId);
    } catch (error) {
        throw error;
    }
};

/**
 * save user
 */
export async function save(userDetail:any):Promise<User>{
    try {
        const [insertId] = await userModel.save(userDetail);

        return {insertId, ...userDetail};
    } catch (error) {
        throw error;
    }
};

/**
 * update user
 */
export async function update(userId:number,userDetail:User):Promise<User>{
    try {
        const [updateId] = await userModel.update(userId,userDetail);

        return { id:updateId, ...userDetail};
    } catch (error) {
        throw error;
    }
};