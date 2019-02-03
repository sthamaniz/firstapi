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
 * fetch user by id
 * 
 * @param {object} params
 * @param {knex} tx
 */
export async function fetchById(userId:number, tx?:Knex):Promise<User[]> {
    const whereParam = userId ? { 'user.id':userId } : {};

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
export async function save(userDetail:User, tx?:Knex) {

    return db
        .connection(tx)(`${USER_TABLE}`)
        .insert(userDetail);
};

/**
 * update user
 * 
 * @param {object} params
 * @param {knex} tx
 */
export async function update(userId:number, userDetail:User, tx?:Knex) {

    return db
        .connection(tx)(`${USER_TABLE}`)
        .where({ userId })
        .update(userDetail);
};