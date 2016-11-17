'use strict';

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('prospection', function(table) {
      table.string('contact_name');
      table.string('contact_number');
      table.string('contact_comments');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('prospection', function(table) {
      table.dropColumn('contact_name');
      table.dropColumn('contact_number');
      table.dropColumn('contact_comments');
    })
  ]);
};
