"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../utils/db");
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
function fetchAll(tx) {
    return __awaiter(this, void 0, void 0, function* () {
        return db
            .connection(tx)(`${ADMIN_TABLE} as admin`)
            .leftJoin(`${USER_TABLE} as user`, 'admin.user_id', 'user.id')
            .select(SELECT_ADMIN_VALUE);
    });
}
exports.fetchAll = fetchAll;
;
/**
* fetch admin by id
*
* @param {object} params
* @param {Knex} tx
*/
function fetchById(id, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        const whereParam = id ? { 'admin.id': id } : {};
        return db
            .connection(tx)(`${ADMIN_TABLE} as admin`)
            .leftJoin(`${USER_TABLE} as user`, 'admin.user_id', 'user.id')
            .select(SELECT_ADMIN_VALUE)
            .where(whereParam);
    });
}
exports.fetchById = fetchById;
;
/**
* save admin
*
* @param {object} params
* @param {Knex} tx
*/
function save(admin, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        return db
            .connection(tx)(`${ADMIN_TABLE}`)
            .insert(admin);
    });
}
exports.save = save;
;
/**
* update admin
*
* @param {object} params
* @param {Knex} tx
*/
function update(id, admin, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        return db
            .connection(tx)(`${ADMIN_TABLE}`)
            .where({ id })
            .insert(admin);
    });
}
exports.update = update;
;
//# sourceMappingURL=admin.js.map