import * as adminModel from '../models/admin';

import { Admin } from '../structures/admin';

/**
 * fetch all admins
 */
 export async function fetchAll():Promise<Admin[]>{
    try {
        return adminModel.fetchAll();
    } catch(error) {
        throw error;
    }
 };

 /**
 * search admin by params
 */
export async function search(params:any): Promise<Admin[]> {
    try {
        return await adminModel.search(params);
    } catch (error) {
        throw error;
    }
}

 /**
 * fetch admin by id
 */
export async function fetchById(id:number):Promise<Admin[]>{
    try {
        return adminModel.fetchById(id);
    } catch(error) {
        throw error;
    }
 };

  /**
 *  save admin
 */
export async function save(admin:any):Promise<Admin>{
    try {
        const [insertId] = await adminModel.save(admin);

        return {insertId, ...admin};
    } catch(error) {
        throw error;
    }
 };

 /**
 * update admin
 */
export async function update(id:number,admin:Admin):Promise<Admin>{
    try {
        await adminModel.update(id,admin);

        return { id:id, ...admin};
    } catch (error) {
        throw error;
    }
};
