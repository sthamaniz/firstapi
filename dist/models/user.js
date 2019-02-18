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
function fetchAll(tx) {
    return __awaiter(this, void 0, void 0, function* () {
        return db
            .connection(tx)(`${USER_TABLE} as user`)
            .select(SELECT_USER_VALUE);
    });
}
exports.fetchAll = fetchAll;
;
/**
 * Search userby params
 *
 * @param {object} params
 * @param {knex} tx
 */
function search(params, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        const keys = Object.keys(params);
        const newParams = {};
        keys.map((key) => {
            newParams[`user.${key}`] = params[key];
        });
        return db
            .connection(tx)(`${USER_TABLE} as user`)
            .select(SELECT_USER_VALUE)
            .where(newParams);
    });
}
exports.search = search;
;
/**
 * fetch user by id
 *
 * @param {object} params
 * @param {knex} tx
 */
function fetchById(id, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        const whereParam = id ? { 'user.id': id } : {};
        return db
            .connection(tx)(`${USER_TABLE} as user`)
            .select(SELECT_USER_VALUE)
            .where(whereParam);
    });
}
exports.fetchById = fetchById;
;
/**
 * save user
 *
 * @param {object} params
 * @param {knex} tx
 */
function save(user, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        return db
            .connection(tx)(`${USER_TABLE}`)
            .insert(user);
    });
}
exports.save = save;
;
/**
 * update user
 *
 * @param {object} params
 * @param {knex} tx
 */
function update(id, user, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        return db
            .connection(tx)(`${USER_TABLE}`)
            .where({ id })
            .update(user);
    });
}
exports.update = update;
;
//# sourceMappingURL=user.js.map