/**
 *Create admins table
 *
 * @param {object} knex
 * @return {Promise}
 */
export function up(knex) {
    return knex.schema.createTable('admins', table => {
        table.specificType('id','int(11) not null primary key auto_increment');
        table.integer('user_id').notNullable().unique().references('id').inTable('users');
        table.text('role').notNullable();
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
};


/**
 * Drop admins table
 * 
 * @param {object} knex
 * @return {Promise} 
 */
export function down(knex) {
    return knex.schema.dropTable('admins');
};
