"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create table users.
 *
 * @param  {object} knex
 * @return {Promise}
 */
function up(knex) {
    return knex.schema.createTable('users', table => {
        table.specificType('id', 'int(11) not null primary key auto_increment');
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.text('first_name').notNullable();
        table.text('middle_name');
        table.text('last_name').notNullable();
        table.string('mobile').notNullable().unique();
        table.string('email').notNullable().unique();
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
}
exports.up = up;
;
/**
 * Drop table users.
 *
 * @param  {object} knex
 * @return {Promise}
 */
function down(knex) {
    return knex.schema.dropTable('users');
}
exports.down = down;
;
//# sourceMappingURL=20190202194242_create_users_table.js.map