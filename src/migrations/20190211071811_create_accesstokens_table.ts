/**
 * Create table accesstokens
 * 
 * @param {Object} knex
 * @returns {Promise} 
 */
export function up(knex) {
    return knex.schema.createTable('accesstokens', table => {
        table.specificType('id', 'int(11) not null primary key auto_increment');
        table.integer('user_id').references('id').inTable('users').notNullable();
        table.integer('logged_in').notNullable().defaultTo(1);
        table.text('token').notNullable();
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
}

/**
 * 
 * @param {Object} knex
 * @returns {Promise}
 */
export function down(knex) {
    return knex.schema.dropTable('accesstokens');
}