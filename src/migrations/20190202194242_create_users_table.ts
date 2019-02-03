/**
 * Create table users.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function up(knex) {
    return knex.schema.createTable('users', table => {
        table.specificType('id','int(11) not null primary key auto_increment');
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.text('first_name').notNullable();
        table.text('middle_name');
        table.text('last_name').notNullable();
        table.string('mobile').notNullable().unique();
        table.string('email').notNullable().unique();
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
};


/**
 * Drop table users.
 *
 * @param  {object} knex
 * @return {Promise}
 */
export function down(knex) {
    return knex.schema.dropTable('users');
};
