'use strict';

exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('appointments', function(table) {
        table.increments();
        table.integer('customer_id');
        table.integer('salon_id');
        table.timestamp('start_date');
        table.integer('duration');
        table.timestamp('end_date');
        table.boolean('cancelled');
        table.text('cancellation_reason');
        table.timestamps();
      })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('appointments')
  ]); 
};
