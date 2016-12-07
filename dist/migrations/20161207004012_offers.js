'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('offers', function(table) {
            table.increments();
            table.integer('prestation_id');
            table.integer('salon_id');
            table.string('offer_duration');
            table.string('offer_price');
            table.foreign('prestation_id').references('prestations.id');
            table.foreign('salon_id').references('wonderful_salons.id');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('offers')
    ]);
};
