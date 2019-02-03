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
 * fetch all admins list
 * @param {object} params
 * @param {knex} tx
 */
export async function fetchAll(tx?:Knex):Promise<User[]>{
    return db
        .connection(tx)(`${USER_TABLE} as user`)
        .select(SELECT_USER_VALUE);
};