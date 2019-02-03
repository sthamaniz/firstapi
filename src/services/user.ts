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
export async function fetchById(id:number):Promise<User[]>{
    try {
        return await userModel.fetchById(id);
    } catch (error) {
        throw error;
    }
};

/**
 * save user
 */
export async function save(user:any):Promise<User>{
    try {
        const [insertId] = await userModel.save(user);

        return {insertId, ...user};
    } catch (error) {
        throw error;
    }
};

/**
 * update user
 */
export async function update(id:number,user:User):Promise<User>{
    try {
        await userModel.update(id,user);

        return { id:id, ...user};
    } catch (error) {
        throw error;
    }
};