import * as Knex from 'knex';

import * as db from '../utils/db';

import { Admin } from '../structures/admin';

const ADMIN_TABLE = 'admins';
const USER_TABLE = 'users';

const SELECT_ADMIN_VALUE = [
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
];

/**
 * fetch all admins
 * 
 * @param {object} params
 * @param {Knex} tx
 */
 export async function fetchAll(tx?:Knex):Promise<Admin[]>{
    return db
        .connection(tx)(`${ADMIN_TABLE} as admin`)
        .leftJoin(`${USER_TABLE} as user`,'admin.user_id','user.id')
        .select(SELECT_ADMIN_VALUE);
 };

 /**
 * Search admin  params
 *
 * @param {object} params
 * @param {knex} tx
 */
export async function search(params: any, tx?: Knex): Promise<Admin[]> {
    const keys = Object.keys(params);
    const newParams: any = {};
    
    keys.map((key: string) => {
      newParams[`admin.${key}`] = params[key];
    });

    return db
    .connection(tx)(`${ADMIN_TABLE} as admin`)
    .select(SELECT_ADMIN_VALUE)
    .leftJoin(`${USER_TABLE} as user`,'admin.user_id','user.id')
    .where(newParams);
};

 /**
 * fetch admin by id
 * 
 * @param {object} params
 * @param {Knex} tx
 */
export async function fetchById(id:number,tx?:Knex):Promise<Admin[]>{
    const whereParam = id ? { 'admin.id':id } : {};

    return db
        .connection(tx)(`${ADMIN_TABLE} as admin`)
        .leftJoin(`${USER_TABLE} as user`,'admin.user_id','user.id')
        .select(SELECT_ADMIN_VALUE)
        .where(whereParam);
 };

  /**
 * save admin
 * 
 * @param {object} params
 * @param {Knex} tx
 */
export async function save(admin:any,tx?:Knex){

    return db
        .connection(tx)(`${ADMIN_TABLE}`)
        .insert(admin);
 };

  /**
 * update admin
 * 
 * @param {object} params
 * @param {Knex} tx
 */
export async function update(id:number,admin:Admin,tx?:Knex){

    return db
        .connection(tx)(`${ADMIN_TABLE}`)
        .where({ id })
        .insert(admin);
 };