"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *Create admins table
 *
 * @param {object} knex
 * @return {Promise}
 */
function up(knex) {
    return knex.schema.createTable('admins', table => {
        table.specificType('id', 'int(11) not null primary key auto_increment');
        table.integer('user_id').notNullable().unique().references('id').inTable('users');
        table.text('role').notNullable();
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
}
exports.up = up;
;
/**
 * Drop admins table
 *
 * @param {object} knex
 * @return {Promise}
 */
function down(knex) {
    return knex.schema.dropTable('admins');
}
exports.down = down;
;
//# sourceMappingURL=20190202211801_create_admins_table.js.map