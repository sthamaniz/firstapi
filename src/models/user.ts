import * as Knex from 'knex';

import * as db from '../utils/db';

import { User } from '../structures/user';

const USER_TABLE = 'users';

const SELECT_USER_VALUE = [
    'user.id as id',
    'user.username as username',
    'user.password as password',
    'user.first_name as firstName',
    'user.middle_name as middleName',
    'user.last_name as lastName',
    'user.email as email',
    'user.mobile as mobile',
    'user.created_at as createdAt'
];

/**
 * fetch all users
 * 
 * @param {object} params
 * @param {knex} tx
 */
export async function fetchAll(tx?:Knex):Promise<User[]> {
    return db
        .connection(tx)(`${USER_TABLE} as user`)
        .select(SELECT_USER_VALUE);
};

/**
 * Search userby params
 *
 * @param {object} params
 * @param {knex} tx
 */
export async function search(params: any, tx?: Knex): Promise<User[]> {
    const keys = Object.keys(params);
    const newParams: any = {};
    
    keys.map((key: string) => {
      newParams[`user.${key}`] = params[key];
    });

    return db
    .connection(tx)(`${USER_TABLE} as user`)
    .select(SELECT_USER_VALUE)
    .where(newParams);
};

/**
 * fetch user by id
 * 
 * @param {object} params
 * @param {knex} tx
 */
export async function fetchById(id:number, tx?:Knex):Promise<User> {
    const whereParam = id ? { 'user.id':id } : {};

    return db
        .connection(tx)(`${USER_TABLE} as user`)
        .select(SELECT_USER_VALUE)
        .where(whereParam);
};

/**
 * save user
 * 
 * @param {object} params
 * @param {knex} tx
 */
export async function save(user:User, tx?:Knex) {

    return db
        .connection(tx)(`${USER_TABLE}`)
        .insert(user);
};

/**
 * update user
 * 
 * @param {object} params
 * @param {knex} tx
 */
export async function update(id:number, user:User, tx?:Knex) {

    return db
        .connection(tx)(`${USER_TABLE}`)
        .where({ id })
        .update(user);
};