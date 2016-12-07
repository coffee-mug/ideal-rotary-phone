'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('wonderful_salons', function(table) {
            table.increments();
            table.integer('owner_id');
            table.string('company_name');
            table.string('street');
            table.string('city');
            table.string('postal_code');
            table.string('company_national_id');
            table.string('phone');
            table.string('email');
            table.string('opening_hour');
            table.string('closing_hour');
            table.foreign('owner_id').references('wonderful_users.id');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('wonderful_salons')
    ]);
};
