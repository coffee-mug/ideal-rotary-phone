'use strict';

exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('appointments', function(table) {
        table.increments();
        table.string('prestation');
        table.integer('user_id').unsigned().references('users.id');
        table.integer('store_id').unsigned().references('stores.id');
        table.timestamp('start_at');
        table.timestamp('finish_at');
      })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('stores')
      ]);
  
};
