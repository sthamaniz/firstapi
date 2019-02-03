import * as Knex from 'knex';

import * as db from '../utils/db';

import { Admin } from '../structures/admin';

const ADMIN_TABLE = 'admins';
const USER_TABLE = 'users';

/**
 * fetch all admins
 * 
 * @param {object} params
 * @param {knex} tx
 */
 export async function fetchAll(tx?:Knex):Promise<Admin[]>{
    return db
        .connection(tx)(`${ADMIN_TABLE} as admin`)
        .leftJoin(`${USER_TABLE} as user`,'admin.user_id','user.id')
        .select(
            'admin.id as id',
            'admin.role as role',
            
            'user.id as userId',
            'user.username as userName',
            'user.first_name as userFirstName',
            'user.middle_name as userMiddleName',
            'user.last_name as userLastName',
            'user.mobile as userMobile',
            'user.email as userEmail',
            
            'admin.created_at as createdAt'
        );
 };