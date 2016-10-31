'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('prospection', function(table) {
            table.increments();
            table.string('store_name');
            table.string('address');
            table.string('address_details');
            table.string('city');
            table.string('postal_code');
            table.string('telephone');
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('prospection')
    ])
  
};
