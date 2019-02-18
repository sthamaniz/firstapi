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
const knex_1 = require("./knex");
/**
 * Returns parent transaction or new knex instance.
 *
 * @param {knex} tx
 * @returns {knex}
 */
function connection(tx) {
    return tx || knex_1.default;
}
exports.connection = connection;
/**
 * Start knex transaction.
 * If tx is null then it will start new transaction else it will return tx.
 *
 * @param {Knex} tx
 * @param {any} func
 * @returns {knex<Transaction>}
 */
function transaction(tx, func) {
    if (tx) {
        try {
            return func(tx);
        }
        catch (error) {
            throw error;
        }
    }
    return knex_1.default.transaction(trx => {
        try {
            return func(trx);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.transaction = transaction;
/**
 * Execute raw query.
 *
 * @param {string} sql
 * @param {object} params
 * @param {knex} tx
 * @returns {[] || object}
 */
function raw(sql, params, tx) {
    return __awaiter(this, void 0, void 0, function* () {
        return connection(tx)
            .raw(sql, Object.assign({}, params))
            .then(([result]) => result);
    });
}
exports.raw = raw;
/**
 * Fetch data filtered by params.
 *
 * @param {string} table
 * @param {object} params
 * @param {knex} tx
 * @returns {Promise}
 */
function fetch(table, params, tx) {
    return connection(tx)
        .from(table)
        .where(params);
}
exports.fetch = fetch;
/**
 * Insert data.
 *
 * @param {string} table
 * @param {object} data
 * @param {string} returning
 * @param {knex} tx
 * @returns {Array<t>}
 */
function insert(table, data, returning, tx) {
    return connection(tx)
        .insert(data)
        .returning(returning)
        .into(table);
}
exports.insert = insert;
/**
 * Update data.
 *
 * @param {string} table
 * @param {object} params
 * @param {object} data
 * @param {knex} tx
 * @returns {Promise}
 */
function update(table, params, data, tx) {
    return connection(tx)
        .table(table)
        .where(params)
        .update(data);
}
exports.update = update;
/**
 * Batch insert data.
 *
 * @param {String} table
 * @param {Array<T>} data
 * @param {Object} tx
 * @returns {Promise}
 */
function batchInsert(table, data, tx) {
    return knex_1.default.batchInsert(table, data).transacting(tx);
}
exports.batchInsert = batchInsert;
/**
 * Batch Update.
 *
 * @param {string} table
 * @param {Array<t>} collection
 * @param {any} options
 * @param {knex} tx
 * @returns {Promise}
 */
function batchUpdate(table, collection, options, tx) {
    return transaction(tx, (trx) => {
        const queries = collection.map(tuple => trx(table)
            .where(options.column, tuple[options.column])
            .update(tuple));
        return Promise.all(queries);
    });
}
exports.batchUpdate = batchUpdate;
/**
 * Batch Delete.
 *
 * @param {string} table
 * @param {Array} collection
 * @param {object} options
 * @param {Knex} tx
 * @returns {Promise}
 */
function batchDelete(table, collection, options, tx) {
    return transaction(tx, (trx) => {
        const queries = collection.map(tuple => trx(table)
            .where(options.column, tuple[options.column])
            .del());
        return Promise.all(queries);
    });
}
exports.batchDelete = batchDelete;
/**
 * Remove data.
 *
 * @param {string} table
 * @param {object} params
 * @param {knex} tx
 * @returns {Promise}
 */
function remove(table, params, tx) {
    return connection(tx)
        .table(table)
        .where(params)
        .del();
}
exports.remove = remove;
//# sourceMappingURL=db.js.map