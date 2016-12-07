'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('prestations', function(table) {
            table.increments();
            table.string('prestation_name');
            table.string('prestation_description');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('prestations')
    ]);
};
