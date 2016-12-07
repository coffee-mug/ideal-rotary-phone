'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('wonderful_users', function(table) {
            table.increments();
            table.string('first_name');
            table.string('name');
            table.string('mail');
            table.string('password');
            table.string('phone_number');
            table.integer('role_id');
            table.foreign('role_id').references('roles.id');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('wonderful_users')
    ]);
};
